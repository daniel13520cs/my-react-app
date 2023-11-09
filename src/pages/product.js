import React from 'react';
import NavBar from '../NavBar';
import { useParams } from 'react-router-dom';
import {products} from '../static/products'
import { Panel, FlexboxGrid, Container, Divider } from 'rsuite';

function Product () {
    const { id } = useParams();
    const imagePath = id != null
    ? `../productImages/${id}.jpeg`
    : '../productImages/0.jpeg';
    const product = products.find(product => product.id === parseInt(id == null? 0 : id, 10));
      return (
        <div className="product">
        <NavBar></NavBar>
        <Panel bordered>
          <FlexboxGrid>
            <FlexboxGrid.Item colspan={12}>
              <img src={imagePath} width={400} height={600}  alt="Product" className="product-image" />
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
                <p>Price: ${product.price}</p>
              </Container>
            </FlexboxGrid.Item>
          </FlexboxGrid>
        </Panel>
        </div>
        
    );
};

export default Product;
