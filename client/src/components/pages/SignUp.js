import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import { ADD_USER } from '../../utils/mutations';



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
      <form onSubmit={handleFormSubmit}>
        <div className="log-input">
          <label htmlFor="firstName">First Name:</label>
          <input
            placeholder="First"
            name="firstName"
            type="firstName"
            id="firstName"
            onChange={handleChange}
          />
        </div>
        <div className="log-input">
          <label htmlFor="lastName">Last Name:</label>
          <input
            placeholder="Last"
            name="lastName"
            type="lastName"
            id="lastName"
            onChange={handleChange}
          />
        </div>
        <div className="log-input">
          <label htmlFor="email">Email:</label>
          <input
            placeholder="example@domain.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div className="log-input">
          <label htmlFor="pwd">Password:</label>
          <input
            placeholder="*******"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </div>
        <div className='signup-instead'>
            <Link to="/signin">Sign In Instead</Link>
          </div>
        <div className="submit-btn">
          <button type="submit">Submit</button>
        </div>
        
      </form>
      </div>
    </div>
  );
}

