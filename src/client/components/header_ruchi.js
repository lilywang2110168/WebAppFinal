/* Copyright G. Hemingway, 2017 - All rights reserved */
'use strict';


import React, { Component }     from 'react';
import { Link, browserHistory } from 'react-router';
import md5                      from 'md5';

/*************************************************************************/

/*const navbar = {backgroundColor: '#F16E10'};*/
export class Header extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        const { username } = this.props.user.getUser();
        browserHistory.push(`/profile/${username}`);
    }

    render() {

        return<div>
            <nav className="navbar navbar-inverse" role="navigation">
            <div className="navbar-header">
                <a class="navbar-brand>img" href="#">
                    <img src="/images/logo3.png" width="200px" height="74px"/>
                </a>
            </div>
            <ul className="nav nav-tabs navbar-center">
                <li><a href="/">Home</a></li>
                <li><a href="/overview">Overview</a></li>
                <li><a href="/seller">Seller</a></li>
                <li><a href="/buyer">Buyer</a></li>
                <li><a href="/contact">Contact</a></li>
                <form className="navbar-form navbar-right" role="search">
                    <div className="input-group">
                        <input type="text" class="form-control" placeholder="Search" height="110px"></input>
                    <span className="input-group-btn">
                        <button className="btn btn-default" type="button" >
                            <span className="glyphicon glyphicon-search"></span>
                        </button>
                    </span>
                    </div>
                </form>
            </ul>
            </nav>
        </div>

    }
}




