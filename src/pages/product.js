import React from 'react';
import NavBar from '../NavBar';
import { useParams } from 'react-router-dom';
import {products} from '../static/products'

function Product () {
    const { id } = useParams();
    const imagePath = id != null
    ? `../productImages/${id}.jpeg`
    : '../productImages/0.jpeg';
    const product = products.find(product => product.id === parseInt(id, 10));
      return (
        <div className="product">
        <NavBar></NavBar>
        <img src={imagePath} alt="Product" className="product-image" />
        <p className="product-description">{product.description}</p>
        </div>
    );
};

export default Product;
