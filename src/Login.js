import {
    Container,
    Header,
    Content,
    Schema,
    Form,
    ButtonToolbar,
    Button,
    Navbar,
    Panel,
    FlexboxGrid
  } from 'rsuite';
  import NavBar from './NavBar';
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import the necessary components

  function Login () {
    const { StringType, NumberType } = Schema.Types;
    const model = Schema.Model({
        name: StringType().isRequired('This field is required.'),
        email: StringType()
          .isEmail('Please enter a valid email address.')
          .isRequired('This field is required.')
      });
    const formRef = React.useRef();
    const [formError, setFormError] = React.useState({});
    const [formValue, setFormValue] = React.useState({
      name: '',
      password: '',
    });
    const navigate = useNavigate(); 
    const onSigninClicked = () => {
        navigate('/Dashboard');
        console.log(formValue);
    }

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
                        <Form 
                            ref={formRef}
                            onChange={setFormValue}
                            onCheck={setFormError}
                            formValue={formValue}
                            model={model}
                            fluid>
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
                            <Button appearance="primary" onClick={onSigninClicked}>Sign in</Button>
                            <Button appearance="primary">Register</Button>
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