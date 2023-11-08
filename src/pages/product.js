import React from 'react';
import NavBar from '../NavBar';
import { useParams } from 'react-router-dom';

function Product ({ description }) {
    const { id } = useParams();
    const imagePath = id != null
    ? `../productImages/${id}.jpeg`
    : '../productImages/0.jpeg';
      return (
        <div className="product">
        <NavBar></NavBar>
        <img src={imagePath} alt="Product" className="product-image" />
        <p className="product-description">{description}</p>
        </div>
    );
};

export default Product;
