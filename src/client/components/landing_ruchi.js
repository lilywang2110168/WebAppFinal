/* Copyright G. Hemingway, 2017 - All rights reserved */
'use strict';


import React, {Component} from 'react';
import {Link, browserHistory} from 'react-router';
import {Header} from './header_ruchi';
import ImageComparisonSlider from "./ImageComparisonSlider";


/*************************************************************************/

export const Landing = () => (

    <div>
        <Header/>
        <div className="landingImage">


            <div className="jumbotron">
                <h1>Bootstrap Tutorial</h1>
                <p> This is a tutorial for jumbotron </p>
                <ImageComparisonSlider img_after="/images/Nate.png" img_before="/images/Lily.png"/>
            </div>

            <section1 className="padding-top--60 padding-top-sm--30">
                <div id="wrapper">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6 col-sm-4 hidden-xs">
                                <div className="widget">
                                    <div className="panel panel-default">
                                        <div className="panel-heading">Seller Interfeace</div>
                                        <div className="panel-body">
                                            This is the Seller Interface. Here we have a series of
                                            features that will be useful to people starting businesses.
                                            Some features of the Seller interface include:
                                            1. Feature Extraction
                                            2. Feature Sentiment Scores
                                            3. Feature Summaries
                                            4. Demographics Information
                                            <div class="btn-group">
                                                <Link to="/seller">
                                                    <button className="btn btn-default landingButton">Seller</button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 col-sm-4 hidden-xs">
                                <div className="widget">
                                    <div className="panel panel-default">
                                        <div className="panel-heading">Buyer Interface</div>
                                        <div className="panel-body">
                                            This is the buyer interface. Here we have a series of
                                            features that will be useful to avid buyers. Some features
                                            include Smart search based off feature extraction and
                                            feature summary
                                            <Link to="/buyer">
                                                <button className="btn btn-default landingButton">Buyer</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section1>
        </div>

    </div>);