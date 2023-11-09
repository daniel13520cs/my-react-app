import React from 'react';
import { Panel } from 'rsuite';
import NavBar from './NavBar';
import {products} from '../static/products'

const ShoppingCart = () => {
  // Sample product data (replace with your own product data)
  const stubProducts = [
    {
      name: 'Product A',
      price: '$19.99',
      description: 'Description for Product A',
      imageUrl: '../productImages/0.jpeg',
    },
    {
      name: 'Product B',
      price: '$29.99',
      description: 'Description for Product B',
      imageUrl: 'https://example.com/product-b-image.jpg', // Replace with the actual image URL
    },
    {
      name: 'Product C',
      price: '$39.99',
      description: 'Description for Product C',
      imageUrl: 'https://example.com/product-c-image.jpg', // Replace with the actual image URL
    },
  ];

  return (
    <div>
      <NavBar />
      <h2>Product List</h2>
      {products.map((product, index) => (
        <Panel key={index} shaded bordered bodyFill style={{ marginTop: '10px' }}>
          <div style={{ display: 'flex' }}>
            <div style={{ flex: '1' }}>
              <img
                src={product.imageUrl}
                alt={product.name}
                style={{ width: '100px', height: '100px', marginRight: '10px' }}
              />
            </div>
            <div style={{ flex: '2' }}>
              <h4>{product.name}</h4>
              <p>{product.description}</p>
              <p>Price: {product.price}</p>
            </div>
          </div>
        </Panel>
      ))}
    </div>
  );
};

export default ShoppingCart;
