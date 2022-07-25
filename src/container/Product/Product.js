import React, { Component, Fragment } from "react";
import CardProduct from "../CardProduct/CardProduct";
import "./Product.css";

class Product extends Component {

    state ={
        order: 0,
        price: 0
    }

    handleCounterChange = (newValue) => {
        this.setState({
            order: newValue
        })
    }


    render (){
        return(
            <Fragment>
                <div className="main">
                <div className="header">
                    <div className="logo">
                        <img src="https://etanee.id/static/media/box-blue.5d71f47b.svg"/>
                    </div>
                    <div className="troley">
                        <img src="https://etanee.id/static/media/basket-blue.937a12ce.svg"/>
                        <div className="count">{this.state.order}</div>
                    </div>
                </div>
                <CardProduct onCounterChange={(value) => this.handleCounterChange(value)} />
                </div>
            </Fragment>
            
        );
    }
}

export default Product;