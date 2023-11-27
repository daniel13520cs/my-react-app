import React, { useState, Context } from 'react';
import NavBar from '../components/NavBar';
import { apiURL, apiIMGURL } from '../constants';
import { useLocation, useParams } from 'react-router-dom';
import { products } from '../static/products'
import { Button, Panel, FlexboxGrid, Container, Divider } from 'rsuite';
import ImageUploader from '../utilities/ImageUploader';
import AddToCartButton from '../components/AddToCartButton';
import { Slider, Grid, Row, Col, InputNumber, AutoComplete } from 'rsuite';

function Product() {
  
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (newValue) => {
    setQuantity(newValue);
  };

  const { id } = useParams();
  const location = useLocation();
  const { product } = location.state || {};
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


  //const product = products.find(product => product.id === parseInt(id == null ? 0 : id, 10));
  return (
    <div className="product">
      <NavBar></NavBar>
      <Panel bordered>
        <FlexboxGrid>
          <FlexboxGrid.Item colspan={12}>
            <img src={apiURL + product.imageURL} style={{ width: '80%', height: '80%'}} alt="Product" className="product-image" />
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
              <InputNumber 
                value={quantity} 
                style={{ width: '60px' }}
                onChange={handleQuantityChange}
                min={1}
                >
              </InputNumber>
              <br></br>
              <AddToCartButton product={product} selectQuantity={quantity}></AddToCartButton>
            </Container>
          </FlexboxGrid.Item>
        </FlexboxGrid>
      </Panel>
    </div>

  );
};

export default Product;
