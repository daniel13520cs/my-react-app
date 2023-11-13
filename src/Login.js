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
  import NavBar from './components/NavBar';
import React from 'react';
import {apiURL} from './constants';
import { useNavigate } from 'react-router-dom'; // Import the necessary components
    function TextField(props) {
        const { name, label, accepter, ...rest } = props;
        return (
        <Form.Group controlId={`${name}-3`}>
            <Form.ControlLabel>{label} </Form.ControlLabel>
            <Form.Control name={name} accepter={accepter} {...rest} />
        </Form.Group>
        );
    }

  function Login () {
    const { StringType, NumberType } = Schema.Types;
    const model = Schema.Model({
        Username: StringType().isRequired('This field is required.'),
        Password: StringType().isRequired('This field is required.')
      });
    const formRef = React.useRef();
    const [formError, setFormError] = React.useState({});
    const [formValue, setFormValue] = React.useState({
      Username: '',
      Password: '',
    });
    const navigate = useNavigate(); 
    const onSigninClicked = async () => {
        try {
            console.log(formValue);
            const api = apiURL + '/authentication/Login';
            const response = await fetch(api, {
            method: "POST",
            headers: {
                //'Authorization': `Bearer ${localStorage.token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formValue),
          });
    
          if (response.ok) {
            const { token } = await response.json();
            localStorage.setItem('jwtToken', token);
            navigate('/Dashboard');
          } else if (response.status == 401) {
            alert('Invalid username or password! Please try again');
          } else {
            alert('Unable to connect to authentication service!');
          }
        } catch (error) {
          console.error("An error occurred:", error);
        }
      };
    const onRegisterClicked = async () => {
        try {
            console.log(formValue);
            const api = apiURL + '/authentication/register';
            const response = await fetch(api, {
            method: "POST",
            headers: {
                //'Authorization': `Bearer ${localStorage.token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formValue),
          });
    
          if (response.ok) {
            const { token } = await response.json();
            localStorage.setItem('jwtToken', token);
            navigate('/Dashboard');
          } else if (response.status == 401) {
            alert('username exists');
          } else {
            alert('Unable to connect to authentication service!');
          }
        } catch (error) {
          console.error("An error occurred:", error);
        }
      };

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
                        <TextField name="Username" label="Username" />
                        <TextField name="Password" label="Password" />
                        <Form.Group>
                            <ButtonToolbar>
                            <Button appearance="primary" onClick={onSigninClicked}>Sign in</Button>
                            <Button appearance="primary" onClick={onRegisterClicked}>Register</Button>
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