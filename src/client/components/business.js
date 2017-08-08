/* Copyright G. Hemingway, 2017 - All rights reserved */
'use strict';


import React, { Component }     from 'react';
import {Link} from 'react-router';
import {Header} from './header_ruchi';


/*************************************************************************/

export class Business extends Component {

    constructor(props) {
        super(props);

        this.productID = this.productID.bind(this);
        this.brandName = this.brandName.bind(this);

        this.state = {
            products:[],
            analysis:""
        };
    }

    productID(ev) {
        ev.preventDefault();

        let productID= document.getElementById('productID').value;

        $.ajax({
            url: "/v1/product/"+productID,
            method: "get",
            success: (data) => {
               this.setState({products:[data]
               });
            },
        });
    }

    brandName(ev) {

        ev.preventDefault();
            let brand=document.getElementById('brand').value;

            $.ajax({
            url: "/v1/brand/"+brand,
            method: "get",
            success: (data) => {
                this.setState({
                    products:data
                })
            },
        });
    }



    render() {
        //display the products
         let  products = this.state.products.map((product, index)=> {
             let productLink="/product/"+product.id;
               return <div className="row" key={index}>
                   <div className="col-xs-3"> </div>
                   <div className="col-xs-8"><Link to={productLink} key={index}>
                   <p>{product.name}</p>
                       <img src={product.image}></img>
                   <p>{product.description}</p>

                   </Link><br></br></div></div>;
           });


        return <div>
                <Header/>
          <div className="container">
            <div className="row">
                <div className="col-xs-4"></div>
                <div className="col-md-6">
                    <h2>Welcome Amazon Sellers</h2>
                </div>
            </div>
        <div className="row">
            <div className="col-xs-2"></div>
            <div className="col-xs-8">
                <div className="center-block">
                    <p id="errorMsg" className="bg-danger"></p>
                </div>
                <form className="form-horizontal">
                    <div className="form-group">
                        <label className="col-sm-2 control-label" htmlFor="username">Product ID:</label>
                        <div className="col-sm-10">
                            <input className="form-control" id="productID" type="text" placeholder="1234324QW3"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button className="btn btn-default" onClick={this.productID}>Search</button>
                        </div>
                    </div>
                </form>

                <form className="form-horizontal">
                    <div className="form-group">
                        <label className="col-sm-2 control-label" htmlFor="username">Brand Name:</label>
                        <div className="col-sm-10">
                            <input className="form-control" id="brand" type="text" placeholder="Apple"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button className="btn btn-default" onClick={this.brandName}>Search</button>
                        </div>
                    </div>
                </form>
            </div>
            <div className="col-xs-2"></div>
        </div>
            {products}
        </div></div>

    } }



