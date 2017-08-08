/* Copyright G. Hemingway, 2017 - All rights reserved */
'use strict';


import React, { Component }     from 'react';
import {Link} from 'react-router';
import {Header} from './header_ruchi';
import Autosuggest from 'react-autosuggest';


const getSuggestionValue = suggestion => suggestion.name;


// Use your imagination to render suggestions.

const renderSuggestion=(suggestion)=>(
    <span >{suggestion.name}</span>);


/*************************************************************************/

export class Business extends Component {

    constructor(props) {
        super(props);

        this.products = this.products.bind(this);
        this.product = this.product.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onSuggestionsClearRequested= this.onSuggestionsClearRequested.bind(this);
        this.getSuggestions= this.getSuggestions.bind(this);
        this.productIDs={};

        this.state = {
            products:[],
            analysis:"",
            value: '',
            suggestions: []
        };
    }


    products(ev) {

        ev.preventDefault();

            let input=this.state.value;
            if(input in this.productIDs){
                this.product(this.productIDs[input]);
            }else{
            $.ajax({
                url: "http://ec2-54-153-92-109.us-west-1.compute.amazonaws.com:57772/api/db/search/seller/"+input+"/20?CacheUserName=SuperUser&CachePassword=SYS",
                method: "get",
                dataType:'json',
            success: (data) => {
                    this.setState({
                    products:data.products})}
        });}
    }

    product(productID){
        $.ajax({
            url: "http://ec2-54-153-92-109.us-west-1.compute.amazonaws.com:57772/api/db/product/"+productID+"?CacheUserName=SuperUser&CachePassword=SYS",
            method: "get",
            dataType:'json',
            success: (data) => {
               data['id']=productID;
                this.setState({
                    products:[data]})
                }

    });
    }

    onChange(event, {newValue}){
        this.setState({
            value: newValue
        });
    };


    getSuggestions  ({value}){
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;
        let suggestions=[];
        //clearing the global variable suggestions
        this.productIDs={};
        if(inputLength>2){

            $.ajax({
                url: 'http://ec2-54-153-92-109.us-west-1.compute.amazonaws.com:57772/api/db/autocomplete/seller/'+inputValue +'?CacheUserName=SuperUser&CachePassword=SYS',
                dataType:'json',
                method: "get",
                success: data => {
                    suggestions=data.suggestions.map((item)=> {
                        if(item.type==='product'){
                            this.productIDs[item.product.name]=item.product.id;
                            return {name:item.product.name};
                        }else{
                            return {name:item.brand};
                        }
                    });
                    this.setState({suggestions})
                },
            });}
    };

    // Autosuggest will call this function every time you need to clear suggestions.
    onSuggestionsClearRequested (){
        this.setState({
            suggestions: []
        });
    };



    render() {
        //display the products

        let products;
        if(this.state.products.length===1){
            let product=this.state.products[0];
            let productLink="/product/"+product.id;

            products=<div className="row"> <div className="col-xs-3"/>
                <div className="col-xs-5"><Link to={productLink}>
                    <p>{product.title}</p>
                    <img className="imageSellerOne" src={product.imageUrl}/>
                    <p>{product.description}</p>
                </Link></div></div>

        }

        if(this.state.products.length>1){

          products = this.state.products.map((product, index)=> {
             let productLink="/product/"+product.id;
             let title=product.title;

               return <div  key={index}>
                   <div className="col-xs-3"><Link to={productLink}>
                   <p>{title}</p>
                       <img className="imageSeller" src={product.imageUrl}/>
                   </Link></div></div>;
           });}

         //try array partitioning sometime in the future



        let value= this.state.value;
        const inputProps = {
            placeholder: 'Enter a brand or a product', value,
            onChange: this.onChange
        };



        return <div>
                <Header/>
          <div className="container">
            <div className="row">
                <div className="col-xs-3"/>
                <div className="col-md-6">
                    <h2 className="welcome">Welcome Sellers</h2>
                    <br/>
                </div>
            </div>
        <div className="row">
            <div className="col-xs-2"/>
            <div className="col-xs-8">
                <div className="center-block">
                </div>
                <form className="form-horizontal">
                    <div className="form-group">
                        <label className="col-sm-3 control-label searchText" htmlFor="username">Product/Brand:</label>
                        <div className="col-sm-7">
                            <Autosuggest
                                suggestions={this.state.suggestions}
                                onSuggestionsFetchRequested={this.getSuggestions}
                                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                                getSuggestionValue={getSuggestionValue}
                                renderSuggestion={renderSuggestion}
                                inputProps={inputProps}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button className="btn btn-default" onClick={this.products}>Search</button>
                            <br/>
                        </div>

                    </div>
                </form>
            </div>
            <br/>
            <div className="col-xs-2"/>
        </div>
            {products}
        </div></div>
    } }



