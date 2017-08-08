/* Copyright G. Hemingway, 2017 - All rights reserved */
"use strict";

// Necessary modules
import React, {Component}     from 'react';
import { render }               from 'react-dom';
import { Router, Route, IndexRoute, browserHistory }  from 'react-router';
import { Landing }              from './components/landing_ruchi3';
import {LearnMore}                  from './components/learnMore_ruchi';
import { Customer }                from './components/customer_lily';
import { Business }               from './components/business_lily';
import { Product}              from './components/product_lily';
import {Contact}               from './components/about_ruchi';



// Bring bootstrap into the picture

require('./app.css');


/*************************************************************************/

class MyApp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            {this.props.children}
        </div>;
    }
}


render(
    <Router history={browserHistory}>
        <Route path="/" component={MyApp}>
            <IndexRoute component={Landing}/>
<<<<<<< HEAD
            <Route path="/overview" component={LearnMore} user={user}/>
            <Route path="/buyer" component={Customer} user={user}/>
            <Route path="/seller" component={Business} user={user}/>
=======
            <Route path="/buyer" component={Customer}/>
            <Route path="/seller" component={Business} />
>>>>>>> master
            <Route path="/product/:id" component={Product}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/header"/>
        </Route>
    </Router>,
    document.getElementById('mainDiv')
);
