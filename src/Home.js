import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import './container.less';


import { Container, Header, Content, Footer, Navbar, Nav } from 'rsuite';
import HomeIcon from '@rsuite/icons/legacy/Home';
import CogIcon from '@rsuite/icons/legacy/Cog';

function OnSettingClicked() {
    console.log("setting clicked");
}

const Home = () => (
  <div className="show-fake-browser navbar-page">
    <Container>
      <Header>
        <Navbar appearance="inverse">
          <Navbar.Brand>
            <a style={{ color: '#fff' }}>Brand</a>
          </Navbar.Brand>
          <Nav>
            <Nav.Item icon={<HomeIcon />}>Home</Nav.Item>
            <Nav.Item>News</Nav.Item>
            <Nav.Item>Products</Nav.Item>
            <Nav.Menu title="About">
              <Nav.Item>Company</Nav.Item>
              <Nav.Item>Team</Nav.Item>
              <Nav.Item>Contact</Nav.Item>
            </Nav.Menu>
          </Nav>
          <Nav pullRight>
            <Nav.Item onSelect={OnSettingClicked} icon={<CogIcon />}>Settings</Nav.Item>
          </Nav>
        </Navbar>
      </Header>
      <Content>Content</Content>
      <Footer>Footer</Footer>
    </Container>
  </div>
);

export default Home;