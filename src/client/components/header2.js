/* Copyright G. Hemingway, 2017 - All rights reserved */
'use strict';


import React, { Component }     from 'react';
import { Link, browserHistory } from 'react-router';

/*************************************************************************/


export class Header2 extends Component {
    constructor(props) {
        super(props);
    }


    render() {


        return<div><nav className="navbar navbar-toggleable-md navbar-light bg-faded">
            <div className="navbar-header">
                <a class="navbar-brand>img" href="#">
                    <img src="../../../public/images/amazonReviews.tiff" alt=""/>
                    </a>
            </div>
            <ul className="nav navbar-nav">
                <li><a href="#">Home</a></li>
                <li><Link to="/buyer"><a href="#">Buyer</a></Link></li>
                <li><Link to="/seller"><a href="#">Seller</a></Link></li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
                <button className="btn btn-default" type="submit">Search</button>
            </form></nav></div>
    }
}
