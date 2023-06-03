import React, { useState } from 'react';
import '../styles/LoginPage.css'

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform login logic here
    console.log('Username:', username);
    console.log('Password:', password);
    // Reset the form
    setUsername('');
    setPassword('');
  };

  return (
    <div className="login-page d-flex align-items-center justify-content-center">
      <form onSubmit={handleSubmit} className="text-center">
        <img className="mb-4" src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" />
        <h1 className="h3 mb-3 fw-normal">Sign in</h1>

        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="username"
            placeholder="name@example.com"
            value={username}
            onChange={handleUsernameChange}
          />
          <label htmlFor="username">Email address</label>
        </div>

        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
          <label htmlFor="password">Password</label>
        </div>

        <button className="btn btn-primary py-2 my-1" type="submit">Sign in</button>
        <p className='mt-3'>New Here? <a href="#">Create an account</a></p>
      </form>
    </div>
  );
};

export default LoginPage;
