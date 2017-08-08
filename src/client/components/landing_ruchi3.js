/* Copyright G. Hemingway, 2017 - All rights reserved */
'use strict';


import React, {Component} from 'react';
import {Link, browserHistory} from 'react-router';
import {Header} from './header_ruchi';

/*************************************************************************/

export const Landing = () => (

    <div>
        <div className="box2">
            <Header/>
            <container>
                <video id="video-background" loop autoPlay plays-inline playbackrate="0.5">
                    <source src="/images/video9.mov" type="video/mov"/>
                    <source src="/images/video9.mov" type="video/ogg"/>
                </video>
                <div className="row">
                    <div className="col-6-md">
                        <div className="intro-heading">
                            <br></br>
                            <img className="center-block" src="/images/logo5.png"/>
                            <br></br>
                            Never Read Another Review Again
                            <br></br>
                            <br></br>
                        </div>
                        <Link to="/overview">
                            <button className="btn btn-default learnMore">Learn More</button>
                        </Link>
                    </div>
                </div>
            </container>
        </div>
    </div>);