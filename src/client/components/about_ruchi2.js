'use strict';


import React, {Component} from 'react';
import {Link} from 'react-router';
import {Header} from './header_ruchi';

/*************************************************************************/


export const Contact = () => (

    <div>
        <Header/>
        <div className="container-about-page">
            <div className="jumbotron">
                <div className="row">
                    <div className="col-sm-12 col-lg-12">
                        <h1 className="h2" style="margin-top:-2%">
                            Contact Us
                        </h1>
                    </div>
                </div>
            </div>
        </div>

        <div className="container">
            <div className="row">
                <div className="col-sm-6">
                    <div className="well">
                        <h3 style="line-height:20%;"><i className="fa fa-home fa-1x" style="line-height:6%;color:#339966"></i> Address:</h3>
                        <p style="margin-top:6%;line-height:35%">1 Memmorial Drive, Cambridge MA, 02215</p>
                        <br/>
                        <br/>
                        <h3 style="line-height:20%;"><i className="fa fa-envelope fa-1x" style="line-height:6%;color:#339966"></i> Email Address:</h3>
                        <p style="margin-top:6%;line-height:35%">email@gmail.com</p>
                        <br/>
                        <br/>
                        <h3 style="line-height:20%;"><i className="fa fa-user fa-1x" style="line-height:6%;color:#339966"></i> Ruchi Asthana:</h3>
                        <p style="margin-top:6%;line-height:35%">Ruchi Asthana</p>
                        <br />
                        <br />
                        <h3 style="line-height:20%;"><i className="fa fa-yelp fa-1x" style="line-height:6%;color:#339966"></i> Destek Merkezi:</h3>
                        <p style="margin-top:6%;line-height:35%"><a href="siteadresi.com/destek">siteadresi.com/destek</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>);