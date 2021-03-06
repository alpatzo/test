import React, {Component} from 'react';
import './App.css';
import 'h8k-components';
import ProductList from "./components/product-list";
import Cart from "./components/cart";

const title = "HackerShop";

class App extends Component {
    constructor() {
        super();

        const products = [...PRODUCTS].map((product, index) => {
            product.id = index ;
            product.image = `/images/items/${product.name.toLocaleLowerCase()}.png`;
            product.cartQuantity = 0;
            return product;
        });
        
        this.state = {
            cart: {
                items: [
                    {
                    name:"test",
                    cartQuantity: 3
                },
                {
                    name:"jeans",
                    cartQuantity: 2
                }
            ]
            },
            products
        }
        
    }
    
    componentDidMount(){
        console.log(this.state.products);
        
    }

    onAddItem = () => {
        // not allowed AND not working
        this.setState(state => {
          const items = state.items.push(state.product);
    
          return {
            items,
            product: {},
          };
        });
      };

    render() {
        return (
            <div>
                <h8k-navbar header={title}></h8k-navbar>
                <div className="layout-row shop-component">
                    <ProductList products={this.state.products} />
                    <Cart cart={this.state.cart}/>
                </div>
            </div>
        );
    }
}

export const PRODUCTS = [
    {
        name: "Cap",
        price: 5
    },
    {
        name: "HandBag",
        price: 30
    },
    {
        name: "Shirt",
        price: 35
    },
    {
        name: "Shoe",
        price: 50
    },
    {
        name: "Pant",
        price: 35
    },
    {
        name: "Slipper",
        price: 25
    }
];
export default App;
