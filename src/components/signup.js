import React, { useState } from 'react';
import '../styles/SignupPage.css';

const SignupPage = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [location, setLocation] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNumber(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform signup logic here
    console.log('Name:', name);
    console.log('Number:', number);
    console.log('Location:', location);
    console.log('Email:', email);
    console.log('Password:', password);
    // Reset the form
    setName('');
    setNumber('');
    setLocation('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="container signup-page d-flex align-items-center justify-content-center">
      <form onSubmit={handleSubmit} className="text-center">
        <h1 className="h3 mb-3 fw-normal">Sign Up</h1>

        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Full Name"
            value={name}
            onChange={handleNameChange}
          />
          <label htmlFor="name">Full Name</label>
        </div>

        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="number"
            placeholder="Phone Number"
            value={number}
            onChange={handleNumberChange}
          />
          <label htmlFor="number">Phone Number</label>
        </div>

        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="location"
            placeholder="Location"
            value={location}
            onChange={handleLocationChange}
          />
          <label htmlFor="location">Location</label>
        </div>

        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Email Address"
            value={email}
            onChange={handleEmailChange}
          />
          <label htmlFor="email">Email Address</label>
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

        <button className="btn btn-primary py-2" type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignupPage;
