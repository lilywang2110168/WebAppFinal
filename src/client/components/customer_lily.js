/* Copyright G. Hemingway, 2017 - All rights reserved */
'use strict';


import React, { Component }     from 'react';
import {Header} from './header_ruchi';
import Select from 'react-select';
import Autosuggest from 'react-autosuggest';

import 'react-select/dist/react-select.css';

/*************************************************************************/
const getSuggestionValue = suggestion => suggestion.name;



// Use your imagination to render suggestions.

const renderSuggestion=(suggestion)=>(
    <span >{suggestion.name}</span>);


export class Customer extends Component {

    constructor(props) {
        super(props);

        this.category = this.category.bind(this);
        this.feature = this.feature.bind(this);
        this.updateValue1 = this.updateValue1.bind(this);
        this.updateValue2 = this.updateValue2.bind(this);
        this.updateValue3 = this.updateValue3.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onSuggestionsClearRequested= this.onSuggestionsClearRequested.bind(this);
        this.getSuggestions= this.getSuggestions.bind(this);
        this.selectedFeatures=[];

        this.state = {
            features:[],
            ranking:[],
            options:[],
            category:"",
            value: '',
            suggestions: [],
        };
    }

        updateValue1 (newValue) {

            this.setState({selectValue1: newValue});}

        updateValue2 (newValue) {
            this.setState({selectValue2: newValue});}

        updateValue3 (newValue) {
            this.setState({selectValue3: newValue});}

        category(ev) {

            ev.preventDefault();

            let category= this.state.value;
            this.setState({category:category});
            $.ajax({
                url: "http://ec2-54-153-92-109.us-west-1.compute.amazonaws.com:57772/api/db/category/"+category+"?CacheUserName=SuperUser&CachePassword=SYS",
                method: "get",
                dataType: 'json',
                success: (data) => {
                    let features=data.features.map((feature)=>feature.featureName);
                    console.log(features);
                    this.setState({features:features});
                    //this.setState({ranking:[]});
                    },
            });
        };

        feature(ev) {
            ev.preventDefault();
            let url="http://ec2-54-153-92-109.us-west-1.compute.amazonaws.com:57772/api/db/search/buyer/"+this.state.category;
            url=url+"/"+this.state.selectValue1.value;
            this.selectedFeatures[0]=this.state.selectValue1.value;

            if(this.state.selectValue2){
                url=url+','+this.state.selectValue2.value;
                this.selectedFeatures[1]=this.state.selectValue2.value;
            }

            if(this.state.selectValue3){
                url=url+','+this.state.selectValue3.value;
                this.selectedFeatures[2]=this.state.selectValue3.value;
            }
            url=url+"/30"+"?CacheUserName=SuperUser&CachePassword=SYS";


            console.log(url);
                $.ajax({
                    url: url,
                    crossDomain:true,
                    contentType: "application/x-www-form-urlencoded;charset=utf-8",
                    dataType: 'json',
                    method: "get",
                    xhrFields:{
                        withCredentials:false
                        },
                    success: (data) => {
                        console.log(data);
                        this.setState({ranking: data.products});
                        },
                });
        }

    onChange(event, { newValue }) {
        this.setState({
            value: newValue
        });
    };


    getSuggestions  ({value}){
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;
        let suggestions=[];
        if(inputLength>2){

            $.ajax({
                url: 'http://ec2-54-153-92-109.us-west-1.compute.amazonaws.com:57772/api/db/autocomplete/buyer/'+inputValue +'?CacheUserName=SuperUser&CachePassword=SYS',
                dataType:'json',
                method: "get",
                success: data => {
                    suggestions=data.suggestions.map((item)=>({name:item}));
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

        let features;


        if(this.state.features.length>0){

        this.state.options = this.state.features.map((feature, index)=> {
            return{value:feature, label:feature}
        });

        features= <div><div className="row">
                   <div className="col-xs-1"> </div>
                   <div className="col-xs-3">
                   <Select name="form-field-name"  placeholder='first priority' value={this.state.selectValue1} options={this.state.options}
                           onChange={this.updateValue1}/> </div>
                   <div className="col-xs-3">
                   <Select name="form-field-name" placeholder='second priority' value={this.state.selectValue2} options={this.state.options}
               onChange={this.updateValue2}
                   /> </div>
                   <div className="col-xs-3">
                   <Select name="form-field-name" placeholder='third priority' value={this.state.selectValue3} options={this.state.options}
               onChange={this.updateValue3}/> </div></div>
            <br></br>

            <div className="col-sm-offset-2 col-sm-10">
                <button className="btn btn-default" onClick={this.feature} >Submit</button></div></div>;}
        else{
            features=null}

        let products;

        if(this.state.ranking.length>0){
            products = this.state.ranking.map((product, index)=> {
                let productLink="https://www.amazon.com/dp/"+product.id;
                let feature1,feature2, feature3;
                if(this.selectedFeatures[0]){
                    feature1=<p>{this.selectedFeatures[0]}: {Math.round(product.scores.feature1*10)/10}</p>
                }
                if(this.selectedFeatures[1]){
                    feature2=<p>{this.selectedFeatures[1]}: {Math.round(product.scores.feature2*10)/10}</p>
                }
                if(this.selectedFeatures[2]){
                    feature3=<p>{this.selectedFeatures[2]}: {Math.round(product.scores.feature3*10)/10}</p>
                }
                return <a href={productLink} key={index}>
                    <div className="row" key={index}>
                    <div className="col-xs-3"/>
                    <div className="col-xs-5">
                        <p>{product.title}</p></div></div>
                    <div className="row">
                        <div className="col-xs-3"/>
                    <div className="col-xs-3">
                            <img className="imageBuyer" src={product.imageUrl}/></div>
                        <div className="col-xs-2">
                            {feature1}
                            {feature2}
                            {feature3}
                            <p>Weighted score: {Math.round(product.scores.weighted*10)/10}</p></div>
                     <br/></div></a>;
            });
        }
        else{
            products=null;
        }

        let value= this.state.value;
        const inputProps = {
            placeholder: 'Enter a category', value,
            onChange: this.onChange
        };

        return <div><Header/><div className="container">
                    <div className="row">
                        <div className="col-xs-3"> </div>
                <div className="col-md-6">
                    <h2 className="welcome">Welcome Buyers</h2>
                    <br/>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-2"> </div>
                <div className="col-xs-8">
                    <form className="form-horizontal">
                        <div className="form-group">
                            <label className="col-sm-3 control-label searchText">Category:</label>
                            <div className="col-md-7">
                                <Autosuggest
                                    suggestions={this.state.suggestions}
                                    onSuggestionsFetchRequested={this.getSuggestions}
                                    onSuggestionsClearRequested={this.onSuggestionsClearRequest}
                                    getSuggestionValue={getSuggestionValue}
                                    renderSuggestion={renderSuggestion}
                                    inputProps={inputProps}
                                />
                            </div>
                        </div>
                            <div className="col-sm-offset-2 col-sm-10">
                                <button className="btn btn-default" onClick={this.category}>Search</button>
                                <br/>
                        </div>
                    </form>
                </div>
                    <div className="col-xs-2"> </div>
            </div>
            <br/>
            {features}
            {products}
            </div></div>
    }
}
