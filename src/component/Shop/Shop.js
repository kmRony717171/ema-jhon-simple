import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const [products,setProducts] = useState(first10);
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product product={product}></Product>)
                }
            </div>
            <div className="cart-container">
                <h2>This is cart</h2>
            </div>
            
        </div>
    );
};

export default Shop;