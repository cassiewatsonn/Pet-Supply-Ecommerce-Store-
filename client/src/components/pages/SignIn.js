import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

export default function SignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSignIn = () => {
    // TODO: Authenticate the user with the provided username and password.???
    // make an API call to a backend server to check if the
    // credentials are valid???? 

    console.log(`Signing in with username: ${username} and password: ${password}`);
  };

  // TODO: dont allow access to add to cart unless signed in 

  // TODO: change button when signed in to sign out 

  return (
    <div>
      <div className="container">
        <h5>Sign In</h5>

        <div className="login-inputs">
          <input
            className="input"
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={handleUsernameChange}
          />

          <input
            className="input"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={handlePasswordChange}
          />

          <div className="signin-button">
            <Button onClick={handleSignIn}>Sign In</Button>{" "}
          </div>

          <div>
            <h6 href='#SignUp'>Sign Up Instead!</h6>
          </div>
        </div>
      </div>
    </div>
  );
}