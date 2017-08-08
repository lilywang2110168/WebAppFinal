'use strict';


import React, {Component} from 'react';
import {Link} from 'react-router';
import {Header} from './header_ruchi';

/*************************************************************************/


export const LearnMore = () => (

    <div>
        <Header/>
        <div className="jumbotronLearnMore">
            <div className="row">
                <div className="col-6-md">
                    <br></br>
                    <br></br>
                    <div className="box">
                        <div className="typewriter" data-period="2000">
                            <h1>A TOOL FOR EVERYONE</h1>
                        </div>
                        <h2>
                            Lumière is a review analysis engine that runs on natural language processsing and cloud computing
                            to shed light on the information vauable to any customer from marketting teams to everyday online shoppers.
                            We have detailed both our seller interface and our buyer interface below.
                        </h2>
                    </div>
                </div>
            </div>
        </div>
        <br>
        </br>

        <div className="content-section-a">
            <div className="container-fluid-overview">
                <div className="row">
                    <div className="col-lg-6">
                        <hr className="section-heading-spacer"></hr>
                        <div className="clearfix"></div>
                        <h1 className="section-heading">
                            Seller Interface
                        </h1>
                        <h3>
                            Our seller interface is designed to help marketing teams learn about the performance of
                            their products’ features. With our tool they can benefit from the following information:
                            <br/>
                            <br></br>
                            <ul className="list-inline">
                                <li> 1.) Product features ranked by popularity </li>
                                <li> 2.) Sentiment associated with each feature </li>
                                <li> 3.) Representative summaries for relevant features </li>
                                <li> 4.) Demographic information for both product and features</li>
                            </ul>

                            <br></br>
                            <br></br>

                            <div class="btn-group">
                                <Link to="/seller">
                                    <button className="btn btn-default landingButton">Seller</button>
                                </Link>
                            </div>

                        </h3>
                    </div>
                    <br></br>
                    <div className="col-lg-6">
                        <img className="img-rounded" src="/images/seller.png" width="100%" height="50%" alt></img>
                    </div>

                </div>
            </div>
        </div>
        <div className="content-section-b">
            <div className="container-fluid-overview">
                <div className="row">

                    <div className="col-lg-6">
                        <img className="img-rounded" src="/images/buyer1.png" width="100%" height="50%" alt></img>
                    </div>

                    <div className="col-lg-6">
                        <hr className="section-heading-spacer"></hr>
                        <div className="clearfix"></div>
                        <h1 className="section-heading">
                            Buyer Interface
                        </h1>
                        <h3 >
                            Our buyer interface was built to help every day consumers in purchasing the products
                            that best meet their needs. We have developed a smart search engine that returns products,
                            which are rated positively in features indicated by the user. The benefit of this tool is
                            to save buyers time, so they can go back to doing things that matter.
                        </h3>

                        <br></br>
                        <br></br>

                        <div class="btn-group">
                            <Link to="/buyer">
                                <button className="btn btn-default landingButton">Buyer</button>
                            </Link>
                        </div>
                    </div>


                </div>
            </div>
        </div>


    </div>


);