import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import the necessary components
import { Container, Header, Content, Footer, Navbar, Nav } from 'rsuite';
import HomeIcon from '@rsuite/icons/legacy/Home';
import CogIcon from '@rsuite/icons/legacy/Cog';
import '../styles.css';
import '../container.less';

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

  const OnShoppingCartClicked = () => {
    navigate('/shoppingCart');
    console.log('OnShoppingCartClicked');
  }

  const onAllUsersClicked = () => {
    navigate('/allusers');
    console.log('OnAllUsersClicked');
  }

  const onAllUsersActivitiesClicked = () => {
    navigate('/allUsersActivities');
    console.log('OnAllUsersActivitiesClicked');
  }

  return (
    <div className="show-fake-browser navbar-page">
      <Container>
        <Header>
          <Navbar appearance="inverse" style={{ background:'black' }}>
            <Navbar.Brand>
              <a style={{ color: '#fff' }}>CoherentSeries</a>
            </Navbar.Brand>
            <Nav>
              <Nav.Item onSelect={onHomeClicked} icon={<HomeIcon />}>
                Home
              </Nav.Item>
              {/* <Nav.Item onSelect={onDashboardClicked}>Dashboard</Nav.Item> */}
              <Nav.Item onSelect={onProductClicked} >Products</Nav.Item>
              <Nav.Item onSelect={OnShoppingCartClicked} >ShoppingCart</Nav.Item>
              <Nav.Item onSelect={onSignClicked} >Signin</Nav.Item>
              <Nav.Menu title="About">
                <Nav.Item onSelect={onAllUsersClicked}>AllUsers</Nav.Item>
                <Nav.Item onSelect={onAllUsersActivitiesClicked}>AllUsersActivities</Nav.Item>
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
