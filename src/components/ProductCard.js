import React from 'react';
import { apiURL, apiIMGURL } from '../constants';
const ProductCard = ({ product }) => {
  return (
    <div className="product-info">
      <img
        src={apiURL + product.imageURL}
        width={400}
        height={600}
      />
      <p>{product.name}</p>
      <p>Price: ${product.price} {product.Currency}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default ProductCard;
