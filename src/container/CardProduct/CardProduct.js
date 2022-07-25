import React, { Component} from "react";

class CardProduct extends Component {

    state ={
        order: 0,
        price: 0
    }

    handleCounterChange = (newValue) => {
        this.props.onCounterChange(newValue);
    }

    handlePlus = () => {
        this.setState({
            order: this.state.order + 1 ,
            price: this.state.price + 20000
        }, () => {
            this.handleCounterChange(this.state.order);
        })
        
    }

    handleMinus = () => {
        if(this.state.order > 0){
            this.setState({
                order: this.state.order - 1 ,
                price: this.state.price - 20000
            }, () => {
                this.handleCounterChange(this.state.order);
            })    
        }
        
            
    }

    render (){
        return(
                <div className="card">
                    <div className="img-thumb-prod">
                        <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"/>
                    </div>
                    <p className="product-title">Hawaiian Chicken PizzaSmoked</p>
                    <p className="product-price">{this.state.price}</p>
                    <div className="counter">
                        <button className="minus" onClick={this.handleMinus}>-</button>
                        <input type="text" value={this.state.order}/>
                        <button className="plus" onClick={this.handlePlus}>+</button>
                    </div>
                </div>
            
        );
    }
}

export default CardProduct;