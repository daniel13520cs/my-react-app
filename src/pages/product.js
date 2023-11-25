import React, { useState, Context } from 'react';
import NavBar from '../components/NavBar';
import { Navigate, useParams } from 'react-router-dom';
import { products } from '../static/products'
import { Button, Panel, FlexboxGrid, Container, Divider } from 'rsuite';
import ImageUploader from '../utilities/ImageUploader';
import AddToCartButton from '../components/AddToCartButton';

function Product() {
  const { id } = useParams();
  if (id == null) {
    return(    
      <div className="product">
        <NavBar></NavBar>
        <ImageUploader></ImageUploader>
      </div>
    );
  }
  const imagePath = id != null
    ? `../images/products/${id}.jpeg`
    : '../images/products/0.jpeg';
  const product = products.find(product => product.id === parseInt(id == null ? 0 : id, 10));

  const onAddToCartClicked = (product) => {
    var item = localStorage.getItem('cart');
    var cart = item == null? [] : JSON.parse(item);
    var updateProduct = cart.find(p => p.id === product.id);
    if (!updateProduct) {
      product.quantity = 1;
      cart.push(product);
    } else {
      updateProduct.quantity++;
    }
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  return (
    <div className="product">
      <NavBar></NavBar>
      <Panel bordered>
        <FlexboxGrid>
          <FlexboxGrid.Item colspan={12}>
            <img src={imagePath} width={400} height={600} alt="Product" className="product-image" />
          </FlexboxGrid.Item>
          <FlexboxGrid.Item colspan={12}>
            <Container>
              {product.name.split('\n').map((line, index) => (
                <h5 key={index}>{line}</h5>
              ))}
              <Divider />
              <div className="product-description">
                {product.description.split('\n').map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </div>
              <Divider />
              <p>Price: ${product.price} {product.currency ?? 'NTD'}</p>
              <br></br>
              <AddToCartButton product={product}></AddToCartButton>
            </Container>
          </FlexboxGrid.Item>
        </FlexboxGrid>
      </Panel>
    </div>

  );
};

export default Product;
