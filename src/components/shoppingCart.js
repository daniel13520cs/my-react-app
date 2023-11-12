import React, { useState } from 'react';
import { Table, Container, Content, Button } from 'rsuite';
import NavBar from './NavBar';
import {products} from '../static/products'
import { json } from 'react-router-dom';

const ShoppingCart = () => {
  // Sample product data (replace with your own product data)

  var cart = localStorage.getItem('cart');
  cart = cart == null? [] : JSON.parse(cart);

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

  const [refresh, setRefresh] = useState(false);

  const onClearCartClicked = () => {
    localStorage.removeItem('cart');
    setRefresh(true);
  }

  return (
    <div>
      <NavBar />
      <h2>Product List</h2>
      <Button color="blue" appearance="ghost" onClick={() => onClearCartClicked()}>Clear Cart</Button>
      <Container>
        <Content>
          <Table height={400} data={cart} rowHeight={150}> 
            <Table.Column width={120}>
              <Table.HeaderCell>Image</Table.HeaderCell>
              <Table.Cell dataKey="imageUrl">
                {(rowData) => (
                  <img src={rowData.imageUrl} alt={rowData.name} style={{ width: '100px', height: '100px' }} />
                )}
              </Table.Cell>
            </Table.Column>
            <Table.Column flexGrow={2}>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.Cell dataKey="name" />
            </Table.Column>
            <Table.Column flexGrow={3}>
              <Table.HeaderCell>Description</Table.HeaderCell>
              <Table.Cell dataKey="description" />
            </Table.Column>
            <Table.Column width={120}>
              <Table.HeaderCell>Price</Table.HeaderCell>
              <Table.Cell dataKey="price" />
            </Table.Column>
            <Table.Column width={120}>
              <Table.HeaderCell>quantity</Table.HeaderCell>
              <Table.Cell dataKey="quantity" />
            </Table.Column>
          </Table>
        </Content>
      </Container>
\    </div>
  );
};

export default ShoppingCart;
