import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../../utils/mutations';
import Auth from '../../utils/auth';

function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

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

      Auth.login(token, accessLvl);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="login-cards">

      <h2 className='login-title'>Login</h2>

      <div className='card login-card'>
        <form onSubmit={handleFormSubmit}>
          <div className="email-input">
            <label htmlFor="email">Email address: </label>
            <input
              placeholder="Enter your email"
              name="email"
              type="email"
              id="email"
              onChange={handleChange}
            />
          </div>
          <div className="password-input">
            <label htmlFor="pwd">Password: </label>
            <input
              placeholder="Enter your password"
              name="password"
              type="password"
              id="pwd"
              onChange={handleChange}
            />
          </div>
          {error ? (
            <div>
              <p className="error-text">Your email or password is incorrect!</p>
            </div>
          ) : null}
          <div className='signup-instead'>
            <Link to="/signup">Sign Up Instead</Link>
          </div>
          <div className="login-btn">
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;

