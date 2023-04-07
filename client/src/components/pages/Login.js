import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../../utils/mutations';
import Auth from '../../utils/auth';
import "../../App.css";
import { Alert, Form, FloatingLabel } from 'react-bootstrap';

function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, {loading, error }] = useMutation(LOGIN);
  const [errMsg, setErrMsg] = useState({});
  
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log(formState.email);
      const mutationResponse = await login({
        variables: 
        {
          email: formState.email, 
          password: formState.password 
        },
      });
      
      const token = mutationResponse.data.login.token;
      const accessLvl = mutationResponse.data.login.user.accessLvl;
      console.log(loading);
      Auth.login(token, accessLvl);
    } catch (e) {
      setErrMsg(e);
      console.log(errMsg)
      ErrorMessage(e.message)
    }
};

function ErrorMessage(props) {
  if (props.errMsg.message === "Incorrect password") {
    return(
    <div>
      <Alert key='danger' variant='danger'>Wrong password. Please try again!</Alert>
    </div>
    )
  } else if (props.errMsg.message === "Incorrect email") {
    return(<div>
      <Alert key='danger' variant='danger'>No user found. Please <Link className="signup-link" to="/signup">sign up</Link> to continue!</Alert>
   </div>)
  } else {
    console.log("Got nuffin' right here")
    return(
    <div></div>
    )
  }
}

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  }

  return (
    <div className="login-cards">

      <h2 className='login-title'>Login</h2>

      <div className='card login-card'>
        <Form onSubmit={handleFormSubmit}>
          <Form.Group className="email-input" controlId="LoginForm">
          <FloatingLabel controlId="floatingEmail" label="Email address"className="mb-3">
            <Form.Control className="border" placeholder="Enter your email" type="email" name="email" required onChange={handleChange} />
          </FloatingLabel>
          </Form.Group>
          <Form.Group className="password-input">
          <FloatingLabel controlId="floatingPassword" label="Password"className="mb-3">
            <Form.Control className="border" placeholder="Enter your password" type="password" name="password" required onChange={handleChange} />
          </FloatingLabel>
          </Form.Group>
          <ErrorMessage errMsg={errMsg} />
          <div className="login-btn">
            <button className="login-btn-submit" variant="primary" type="submit">Login</button>
          </div>
          <div className='signup-instead'>
            <Link className="signup-link" to="/signup">Sign Up Instead</Link>
          </div>

        </Form>
      </div>
    </div>
  );
}

export default Login;

