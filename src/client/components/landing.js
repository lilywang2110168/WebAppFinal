/* Copyright G. Hemingway, 2017 - All rights reserved */
'use strict';


import React, {Component} from 'react';
import {Link, browserHistory} from 'react-router';
import {Header} from './header_ruchi2';

/*************************************************************************/

export const Landing = () => (

    <div><Header/>
        <div className="landingImage">
            <img src="/images/homepagePhoto.png" width="75%" height="50%"></img>
            <div className="imageText" width="90%"></div>
        </div>

        <div className="panel panel-default">
            <div className="panel-heading">gender comparisons</div>
            <div className="panel-body">female reviewers reviewed screen resolution higher</div>
        </div>

        <div class="btn-group">
            <Link to="/seller">
                <button className="btn btn-default landingButton">Seller</button>
            </Link>
            <Link to="/buyer">
                <button className="btn btn-default landingButton">Buyer</button>
            </Link>
        </div>
    </div>
);
