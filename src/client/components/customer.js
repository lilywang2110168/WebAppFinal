/* Copyright G. Hemingway, 2017 - All rights reserved */
'use strict';


import React, { Component }     from 'react';
import {Link} from 'react-router';
import {Header} from './header_ruchi';
/*************************************************************************/

export class Customer extends Component {


    constructor(props) {
        super(props);
        this.category = this.category.bind(this);
        this.feature = this.feature.bind(this);
        this.state = {
            features:[],
            ranking:[]
        };
    }

    category(ev) {

        ev.preventDefault();

        let category= document.getElementById('category').value;
        $.ajax({
            url: "/v1/category/"+category,
            method: "get",
            success: (data) => {
                this.setState({features:data
                });
            },
        });
    }

        feature(ev) {

            ev.preventDefault();
            let features=[];
            let featuresID=[];
            let url="/v1/feature/";

            for (let i = 0; i < this.state.features.length; i++) {
                if($('#'+i).is(":checked")){
                    url=url+i+'&';
                    features.push(this.state.features[i]);
                }
            }
        console.log(features);
        console.log(featuresID);
        console.log(url);


            $.ajax({
                url: url,
                method: "get",
                success: (data) => {
                    console.log(data);
                    this.setState({ranking: data
                    });
                },
            });



}



    render() {
        let features;
       if(this.state.features.length>0){
           features = this.state.features.map((feature, index)=> {
               return <label key={index} className="checkbox-inline"><input id={index} type="checkbox" value=""></input>{feature}</label>
        });

        //create the form that submits the features
        features= <form className="form-horizontal">
            <div className="row">
            <div className="col-xs-3"> </div>
                <div className="col-xs-8">
                    {features}
            <div className="col-sm-offset-2 col-sm-10">
                <button className="btn btn-default" onClick={this.feature} >Submit</button></div></div></div>
        </form>;
       }

        let products;

        if(this.state.ranking.length>0){
            products = this.state.ranking.map((product, index)=> {
                let productLink="https://www.amazon.com/dp/"+product.id;
                return <div className="row" key={index}>
                    <div className="col-xs-3"> </div>
                    <div className="col-xs-8">
                    <a href={productLink}>
                    <p>{product.name}</p>
                        <img src={product.image}></img>
                    <p>{product.description}</p>

                    </a> <br></br></div></div>;
            });

        }


        return <div><Header/><div className="container">
                    <div className="row">
                        <div className="col-xs-4"> </div>
                <div className="col-md-6">
                    <h2>Welcome Amazon Buyers</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-2"> </div>
                <div className="col-xs-8">
                    <form className="form-horizontal">
                        <div className="form-group">
                            <label className="col-sm-2 control-label" htmlFor="username">Product Category:</label>
                            <div className="col-sm-10">
                                <input className="form-control" id="category" type="text" placeholder="Laptops"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-offset-2 col-sm-10">
                                <button className="btn btn-default" onClick={this.category}>Search</button>
                            </div>
                        </div>
                    </form>
                </div>
                    <div className="col-xs-2"> </div>
            </div>
            {features}
            {products}
            </div></div>
    }
}
