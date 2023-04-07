import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import { ADD_USER } from '../../utils/mutations';
import "../../App.css";
import { Form, Button, FloatingLabel } from 'react-bootstrap';


export default function SignUp(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        accessLvl: false,
        firstName: formState.firstName,
        lastName: formState.lastName,
        email: formState.email,
        password: formState.password,
      },
    });
    const token = mutationResponse.data.addUser.token;
    const accessLvl = mutationResponse.data.addUser.accessLvl;
    Auth.login(token, accessLvl);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="signup-cards">

      <h2 className='signup-title'>Signup</h2>
      <div className="card signup-card">
        <Form onSubmit={handleFormSubmit}>
          <Form.Group className="log-input">
            <FloatingLabel className='first-name-signup' controlId="FirstName" label="First Name">
              <Form.Control name="firstName" type="firstName" onChange={handleChange} />
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="log-input">
          <FloatingLabel className='last-name-signup' controlId="LastName" label="Last Name">
            <Form.Control
              name="lastName"
              type="lastName"
              onChange={handleChange}
            />
          </FloatingLabel>
          </Form.Group>
          <Form.Group className="log-input">
            <FloatingLabel className='email-signup' controlId="email" label="Email Address">
            <Form.Control
              name="email"
              type="email"
              onChange={handleChange}
            />
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="log-input">
            <FloatingLabel className='password-signup' controlId="password" label="Password">
              <Form.Control
                name="password"
                type="password"
                onChange={handleChange}
              />
            </FloatingLabel>
          </Form.Group>
          <Button className="signup-btn-submit" type="submit">Submit</Button>
          <div className='signin-instead'>
            <Link className="signin-link" to="/signin">Sign In Instead</Link>
          </div>
        </Form>
      </div>
    </div>
  );
}

