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
    <div className="form-signin w-100 m-auto container">
      <form onSubmit={handleSubmit} className="d-flex align-items-center justify-content-center flex-column">
        <img className="mb-4" src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" />
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

        <div className="form-floating">
        <input type="text" className="form-control" id="username" placeholder="name@example.com" value={username}
                onChange={handleUsernameChange} />
        <label for="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
        <input type="password" className="form-control" id="password" placeholder="Password" value={password}
                onChange={handlePasswordChange} />
        <label for="floatingPassword">Password</label>
        </div>

        
        <button className="btn btn-primary w-100 py-2" type="submit">Sign in</button>
        <p className="mt-5 mb-3 text-body-secondary">© 2017–2023</p>
    </form>
    </div>
  );
};

export default LoginPage;
