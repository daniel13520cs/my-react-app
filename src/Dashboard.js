import React, { useState, useEffect } from 'react';
import { Table, Button, Timeline, FlexboxGrid, Divider } from 'rsuite';
import ImageSlider from './ImageSlider';
import NavBar from './components/NavBar';
import './styles.css';
import './timeline.less';
import "./grid.less";
import memeA from '../src/images/0.jpeg';
import memeB from '../src/images/1.jpeg';
import { apiURL } from './constants';
import ProductCard from './components/ProductCard';

const { Column, HeaderCell, Cell } = Table;

// Define a placeholder data array
export const imageMapping = {
  memeA: require('../src/images/0.jpeg'),
  memeB: require('../src/images/1.jpeg'),
}
const images = [memeA, memeB]; // Use actual imported images
const imageSlidesSet = [images, images, images];
const numImageSliders = imageSlidesSet.length;
const colspan = 24 / numImageSliders; // Calculate colspan

function Dashboard() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch all products from the backend when the component mounts
    const fetchProducts = async () => {
      try {
        const response = await fetch(apiURL +　'products/allProducts');
        if (response.ok) {
          var data = await response.json();
          data.selectQuantity = 1;
          setProducts(data);
        } else {
          console.error('Failed to fetch products:', response.statusText);
        }
      } catch (error) {
        console.error('An error occurred during the fetch:', error);
      }
    };

    const fetchURLProducts = async (productURL) => {
      try {
        const reponse = await fetch(productURL);
        if (reponse.ok) {
          var data = await reponse.json();
        } else {
          console.error('Failed to fetch products from fetchURlProducts');
        }
      } catch (error) {
        console.error('error happened fetchURLProducts');
      }
    }

    fetchProducts();
    //fetchURLProducts('https://zozo.jp/shop/vis/goods/76951959/?did=125986058');
  }, []);

  return (
    <div className="dashboard">
      <div className="navBar">
        <NavBar />
      </div>
      <div className="show-grid">  
          <FlexboxGrid>
            {products.map((product, index) => (
              <FlexboxGrid.Item key={index} colspan={colspan}>
              <ProductCard product={product} />
              </FlexboxGrid.Item>
            ))}
          </FlexboxGrid> 
      </div>
    </div>
  );
}

export default Dashboard;
