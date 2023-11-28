import React, { useState } from 'react';
import backgroundImage from './images/bg.jpg'; 

const Signup = ({ onSignup }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (event) => {
    event.preventDefault();
    onSignup(name, email, password);
  };

  return (
    <div style={{ ...signupContainerStyle, backgroundImage: `url(${backgroundImage})` }}>
      <div style={signupBoxStyle}>
        <h2 style={headerStyle}>Create an Account</h2>
        <form onSubmit={handleSignup} style={signupFormStyle}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={inputFieldStyle}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputFieldStyle}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputFieldStyle}
          />
          <button type="submit" style={submitButtonStyle}>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

const signupContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  backgroundSize: 'cover',
};

const signupBoxStyle = {
  maxWidth: '320px',
  margin: '0 10px',
  padding: '20px',
  boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  backgroundColor: 'white'
};

const headerStyle = {
  marginBottom: '10px',
};

const signupFormStyle = {
  display: 'flex',
  flexDirection: 'column',
};

const inputFieldStyle = {
  display: 'block',
  width: '100%',
  margin: '10px 0',
  padding: '10px',
};

const submitButtonStyle = {
  display: 'block',
  width: '100%',
  padding: '10px',
  marginTop: '20px',
  backgroundColor: '#3C4EF1',
  color: '#FFFFFF',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

export default Signup;
