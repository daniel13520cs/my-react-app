import {
    Container,
    Header,
    Content,
    Footer,
    Form,
    ButtonToolbar,
    Button,
    Navbar,
    Panel,
    FlexboxGrid
  } from 'rsuite';
  import NavBar from './NavBar';

  function Login () {
    return (
            <div className="show-fake-browser login-page">
            <Container>
                <Header>
                    <NavBar />
                </Header>
                <Content style={{ marginTop: '100px' }}>
                <FlexboxGrid justify="center">
                    <FlexboxGrid.Item colspan={12}>
                    <Panel header={<h3>Login</h3>} bordered>
                        <Form fluid>
                        <Form.Group>
                            <Form.ControlLabel>Username or email address</Form.ControlLabel>
                            <Form.Control name="name" />
                        </Form.Group>
                        <Form.Group>
                            <Form.ControlLabel>Password</Form.ControlLabel>
                            <Form.Control name="password" type="password" autoComplete="off" />
                        </Form.Group>
                        <Form.Group>
                            <ButtonToolbar>
                            <Button appearance="primary">Sign in</Button>
                            <Button appearance="link">Forgot password?</Button>
                            </ButtonToolbar>
                        </Form.Group>
                        </Form>
                    </Panel>
                    </FlexboxGrid.Item>
                </FlexboxGrid>
                </Content>
            </Container>
            </div>
    );
  };

  export default Login;