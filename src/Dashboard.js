import React from 'react';
import { Table, Button, Timeline, FlexboxGrid, Divider } from 'rsuite';
import ReactDOM from 'react-dom';
import ImageSlider from './ImageSlider';
import NavBar from './components/NavBar';
import './styles.css';
import './timeline.less';
import "./grid.less";
import memeA from '../src/images/0.jpeg';
import memeB from '../src/images/1.jpeg';

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
  return (
    <div className="dashboard">
      <div className="navBar">
        <NavBar />
      </div>
      <div className="show-grid">
          <FlexboxGrid justify="center">
            <FlexboxGrid.Item colspan={8}> {/* The full width for the ImageSlider */}
              <ImageSlider images={images} interval={5000} />
            </FlexboxGrid.Item>
            <FlexboxGrid.Item colspan={8}> {/* The full width for the ImageSlider */}
              <ImageSlider images={images} interval={5000} />
            </FlexboxGrid.Item>
            <FlexboxGrid.Item colspan={8}> {/* The full width for the ImageSlider */}
              <ImageSlider images={images} interval={5000} />
            </FlexboxGrid.Item>
          </FlexboxGrid>     
          <FlexboxGrid>
            {imageSlidesSet.map((image, index) => (
              <FlexboxGrid.Item key={index} colspan={colspan}>
                <ImageSlider images={image} interval={5000} />
              </FlexboxGrid.Item>
            ))}
          </FlexboxGrid> 
      </div>
    </div>
  );
}

export default Dashboard;
