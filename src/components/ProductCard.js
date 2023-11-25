import React, { useState } from 'react';
import { apiURL, apiIMGURL } from '../constants';
import AddToCartButton from './AddToCartButton';
import { Slider, Grid, Row, Col, InputNumber, AutoComplete } from 'rsuite';
const ProductCard = ({ product }) => {

  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (newValue) => {
    setQuantity(newValue);
  };

  return (
    <div className="product-info">
      <img
        src={apiURL + product.imageURL}
        style={{ width: '100%', height: '100%'}}
      />
      <p>{product.name}</p>
      <p>Price: ${product.price} {product.Currency}</p>
      <div className='product-action'>
        <InputNumber 
          value={quantity} 
          style={{ width: '60px' }}
          onChange={handleQuantityChange}
          >
         </InputNumber>
        <AddToCartButton 
          product={product}
          selectQuantity={quantity}
          >
        </AddToCartButton>
      </div>
    </div>
  );
};

export default ProductCard;
