/* Copyright G. Hemingway, 2017 - All rights reserved */
'use strict';


import React, { Component } from 'react';
import Chart from './Chart.js';
import Map from './map_lily.js';
import {Header} from './header_ruchi';


/*************************************************************************/

export class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:"",
            demographics:false,
            features:true,
            category:'',
            markers:[],
            mapFeature:"",
        };

        this.features = this.features.bind(this);
        this.demographics= this.demographics.bind(this);
        this.getDemographics= this.getDemographics.bind(this);
        this.myCallback= this.myCallback.bind(this);

    }

    features(){
        this.setState({features:true,  demographics:false});}

    demographics(){
        this.setState({features:false,  demographics:true});
    }


    myCallback (mostPopularFeature) {
    console.log(mostPopularFeature);
    this.setState({mapFeature:mostPopularFeature})};



    componentDidMount(){
        $.ajax({
            url: `http://ec2-54-153-92-109.us-west-1.compute.amazonaws.com:57772/api/db/product/${this.props.params.id}?CacheUserName=SuperUser&CachePassword=SYS`,
            dataType:'json',
            method: "get",
            success: data => {
                console.log(data);
                this.setState({data: data});
                this.getDemographics();
            }
        });
    }

//setting it to be 100 at first
    getDemographics(){
        for (let i = 0, len =this.state.data.categories.length; i < len; i++) {
            let category=this.state.data.categories[i];
            if(category.features.length>0){
                $.ajax({
                    url: "http://ec2-54-153-92-109.us-west-1.compute.amazonaws.com:57772/api/db/categoryreviewers/"+category.categoryName+"?CacheUserName=SuperUser&CachePassword=SYS",
                    dataType:'json',
                    method: "get",
                    success: data => {
                       let markers=data.reviewers.slice(0, 100).map((reviewer,index)=>{
                            return {index:index, location:reviewer.location, reviewerID:reviewer.id}
                        });

                        this.setState({markers:markers})
                    }});
            }}
    }

    render() {

        let featuresAnalysis;
        let demographics;


        if(this.state.data){
            //the api call has returned some information

            if(this.state.features){
                this.state.data.features.sort(function(a, b) {
                    return parseFloat(b.popularityScore) - parseFloat(a.popularityScore);
                });

                let  featuresTable = this.state.data.features.map((feature, index)=> {
                    if(feature.featureName==="machine"){
                    }else{
                    return <tr key={index}>
                        <th>{feature.featureName}</th>
                        <th>{Math.round(feature.sentimentScore*10)/10}</th>
                        <th>{Math.round(feature.popularityScore*10)/10}</th>
                            <th>{feature.summary}</th>
                    </tr>;
            }});

                featuresTable=<table className="table table-striped"><thead>
                    <tr>
                    <th>Feature</th>
                    <th>Sentiment</th>
                    <th>Popularity</th>
                    <th>Summary</th>
                </tr>
                </thead>
                <tbody>
                {featuresTable}</tbody></table>;

                let comparisonTable;

                for (let i = 0, len =this.state.data.categories.length; i < len; i++) {
                    let category=this.state.data.categories[i];
                    if(category.features.length>0){

                       category.features.sort(function(a, b) {
                            return parseFloat(b.popularityScore) - parseFloat(a.popularityScore);
                        });

                        comparisonTable=category.features.map((feature, index)=> {
                            let comparision;
                            let percentage=feature.numProductsLowerSentiment/(feature.numProductsHigherSentiment+feature.numProductsLowerSentiment);
                            percentage=Math.round(percentage*1000)/10;
                            comparision=<th>defeated {percentage}% </th>;


                            return <tr key={index}>
                                <th>{feature.featureName}</th>
                                <th>{Math.round(feature.popularityScore*10)/10}</th>
                                <th>{comparision}</th>
                            </tr>;
                        });

                        comparisonTable=<table className="table table-striped"><thead>
                        <tr>
                            <th>Feature</th>
                            <th>Popularity</th>
                            <th>Comparision</th>
                        </tr>
                        </thead>
                            <tbody>
                            { comparisonTable}</tbody></table>;

                    }
                }


           featuresAnalysis=<div className="row">
                <div className="col-xs-5">
                    <h2>{this.state.data.title}</h2>
                    <img src={this.state.data.imageUrl}/>
                    <h3>Comparison with products within the category </h3>
                    <br/>
                    {comparisonTable}
                </div>
                <div className="col-xs-7">
                    <h3>Feature analysis of this product(based on {this.state.data.numReviews} reviews)</h3>
                    <br/>
                    {featuresTable}</div></div>;}
           else{
                featuresAnalysis=null
            }


           if(this.state.demographics){

               let geographic= <div>
                   <h3>Demographics</h3>
                   <Map markers={this.state.markers} callback={this.myCallback}/></div>;

               let gender=<div>
                   <Chart/></div>;




               demographics=<div className="row">
                   <div className="col-xs-3">
                       <br/><br/>
                       <div className="panel panel-default">
                           <div className="panel-heading">Most liked Feature</div>
                           <div className="panel-body"> {this.state.mapFeature}</div>
                       </div>

                   </div>
                   <div className="col-md-7">
                       {geographic}</div>
                   <div className="row">
                       <div className="col-xs-3"/>
                       <div className="col-md-7">{gender}</div>
                   </div></div>;
            }

           else{
               demographics=null;
           }
        }


        return <div><Header/>
            <ul className="nav nav-tabs">
                <li className="active"><a href="#"  onClick={this.features}>Features</a></li>
                <li><a href="#" onClick={this.demographics}>Demographics</a></li>
            </ul>
                {featuresAnalysis}
                {demographics}
        </div>
    }
}
