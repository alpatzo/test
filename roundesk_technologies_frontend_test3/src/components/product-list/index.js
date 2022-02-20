import React, { Component } from "react";
import "./index.css";
import { PRODUCTS } from "../../App";
export default class ProductList extends Component {
    constructor() {
        super();
        
    }
    

    componentDidMount() {
        localStorage.setItem('products', JSON.stringify(this.props.products))
      }


    allProducts = () =>{
        console.log(PRODUCTS);
        console.log(this.props);
    }
     addToList = (id) =>{
        console.log(this.props.products[id])
    }
    removeQT = (id) => {
        if (this.props.products[id].cartQuantity == 0) {
            this.props.products[id].cartQuantity =0
            
        }
            
        else{
            this.props.products[id].cartQuantity-=1 
            console.log(this.props.products[id].cartQuantity);
        }  
    }
    addQT = (id) =>{
        this.props.products[id].cartQuantity+=1 
        console.log(this.props.products[id].cartQuantity);
   
    }
    render() {
        
        return (
            <div className="layout-row wrap justify-content-center flex-70 app-product-list">
                {this.props.products.map((product, i) => {
                    return (
                        <section className="w-30"
                            data-testid={'product-item-' + i}
                            key={product.id}>
                            <div className="card ma-16">
                                <img alt="Your Cart" src={product.image}
                                    className="d-inline-block align-top product-image" />
                                <div className="card-text pa-4">
                                    <h5 className="ma-0 text-center">{product.name}</h5>
                                    <p className="ma-0 mt-8 text-center">${product.price}</p>
                                </div>
                                <div className="card-actions justify-content-center pa-4">

                                    <button className="x-small outlined" data-testid="btn-item-add"
                                    onClick={()=>this.addToList(product.id)}
                                    >
                                        Add To Cart
                                    </button>

                                    <div className="layout-row justify-content-between align-items-center">
                                        <button className="x-small icon-only outlined"
                                            data-testid="btn-quantity-subtract"
                                            onClick={()=>this.removeQT(product.id)}
                                        >
                                            <i className="material-icons">remove</i>
                                        </button>

                                        <input type="number"
                                            disabled
                                            className="cart-quantity" data-testid="cart-quantity" value={product.cartQuantity} />

                                        <button className="x-small icon-only outlined"
                                            data-testid="btn-quantity-add"
                                            onClick={()=>this.addQT(product.id)}>
                                            <i className="material-icons">add</i>
                                        </button>
                                        
                                    </div>
                                
                                </div>
                            </div>
                        </section>
                        
                    )
                })}
                <button onClick={()=>this.allProducts()}>all products</button>
            </div>

        );
    }
}

export const UpdateMode = {
    ADD: 1,
    SUBTRACT: 0
}
