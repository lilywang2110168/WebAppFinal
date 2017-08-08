'use strict';


import React, {Component} from 'react';
import {Link} from 'react-router';
import {Header} from './header_ruchi';
/*************************************************************************/


export const Contact = () => (

    <div>
        <Header/>

        <div className="container-about-page">
            <div className="row">
                <div className="col-lg-12">
                    <img className="img-responsive" src = "/images/map.png"/>
                </div>
                <div className="col-lg-12">
                    <h2 className="page-header"> Our Team </h2>
                </div>


                <div className="col-lg-4 col-sm-5 text-center">
                    <img className="img-circle im-reponsive img-ceter" src="/images/Ruchi.png" width="200px"
                         height="200px" alt></img>
                    <h3> Ruchi Asthana </h3>
                    <p>Ruchi is a rising senior at Carnegie Mellon Univeristy. She is a Computational Biology major.</p>
                </div>

                <div className="col-lg-4 col-sm-5 text-center">
                    <img className="img-circle im-reponsive img-ceter" src="/images/Nate.png" width="200px"
                         height="200px" alt></img>
                    <h3> Nathaniel Brennan </h3>
                    <p>Nate is a rising junior at Brown Univeristy. He is a Computer Science major.</p>
                </div>

                <div className="col-lg-4 col-sm-5 text-center">
                    <img className="img-circle im-reponsive img-ceter" src="/images/Lily.png" width="200px"
                         height="200px" alt></img>
                    <h3> Lily Wang
                    </h3>
                    <p>Lily is a rising senior at Vanderbilt Univeristy. She is a Computer Science major.</p>
                </div>


            </div>

        </div>

    </div>


);