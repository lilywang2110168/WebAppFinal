/* Copyright G. Hemingway, 2017 - All rights reserved */
'use strict';


import React, { Component }     from 'react';
import { Link, browserHistory } from 'react-router';
import md5                      from 'md5';

/*************************************************************************/

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

        return<div><nav className="navbar navbar-toggleable-md navbar-light bg-faded">
                <div className="navbar-header">
                    <a className="navbar-brand" href="#">Amazon Reviews</a>
                </div>
                <ul className="nav navbar-nav">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Buyer</a></li>
                    <li><a href="#">Seller</a></li>
                </ul></nav></div>
   }
}
