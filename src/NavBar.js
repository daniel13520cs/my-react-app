import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import the necessary components
import { Container, Header, Content, Footer, Navbar, Nav } from 'rsuite';
import HomeIcon from '@rsuite/icons/legacy/Home';
import CogIcon from '@rsuite/icons/legacy/Cog';
import './styles.css';
import './container.less';

const NavBar = () => {
  const navigate = useNavigate(); 
  const onHomeClicked = () => {
    navigate('/'); 
    console.log("Home clicked");
  };

  const onDashboardClicked = () => {
    navigate('/dashboard'); 
    console.log("dashboard clicked");
  };

  const onSignClicked = () => {
    navigate('/login');
    console.log('onSignClicked');
  }

  const onProductClicked = () => {
    navigate('/product');
    console.log('onProductClicked');
  }

  return (
    <div className="show-fake-browser navbar-page">
      <Container>
        <Header>
          <Navbar appearance="inverse">
            <Navbar.Brand>
              <a style={{ color: '#fff' }}>CoherentSeries</a>
            </Navbar.Brand>
            <Nav>
              <Nav.Item onSelect={onHomeClicked} icon={<HomeIcon />}>
                Home
              </Nav.Item>
              <Nav.Item onSelect={onDashboardClicked} >Dashboard</Nav.Item>
              <Nav.Item onSelect={onProductClicked} >Products</Nav.Item>
              <Nav.Item onSelect={onSignClicked} >Signin</Nav.Item>
              <Nav.Menu title="About">
                <Nav.Item>Company</Nav.Item>
                <Nav.Item>Team</Nav.Item>
                <Nav.Item>Contact</Nav.Item>
              </Nav.Menu>
            </Nav>
            <Nav pullRight>
              <Nav.Item icon={<CogIcon />}>Settings</Nav.Item>
            </Nav>
          </Navbar>
        </Header>
      </Container>
    </div>
  );
};

export default NavBar;
