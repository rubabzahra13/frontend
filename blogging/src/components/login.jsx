import React, { useState } from 'react';
import backgroundImage from './images/bg.jpg';

const Login = ({ onLogin }) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin(name, password);
  };

  return (
    <div style={{ ...loginContainerStyle, backgroundImage: `url(${backgroundImage})` }}>
      <div style={loginBoxStyle}>
        <h2 style={headerStyle}>Welcome!</h2>
        <p style={paragraphStyle}>Sign in to your account</p>
        <form onSubmit={handleSubmit} style={loginFormStyle}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={inputFieldStyle}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputFieldStyle}
          />
          <div style={checkboxContainerStyle}>
            <label style={labelStyle}>
              <input type="checkbox" /> remember me?
            </label>
            <a href="#" style={forgotPasswordLinkStyle}>
              forgot password?
            </a>
          </div>
          <button type="submit" style={submitButtonStyle}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};


const loginContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  backgroundSize: 'cover',
};

const loginBoxStyle = {
  maxWidth: '320px',
  margin: '0 10px',
  padding: '20px',
  boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  backgroundColor:'white'
};

const headerStyle = {
  marginBottom: '10px',
};

const paragraphStyle = {
  marginBottom: '20px',
};

const loginFormStyle = {
  display: 'flex',
  flexDirection: 'column',
};

const inputFieldStyle = {
  display: 'block',
  width: '100%',
  margin: '10px 0',
  padding: '10px',
};

const checkboxContainerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const labelStyle = {
  marginRight: '10px',
};

const forgotPasswordLinkStyle = {
  color: '#757F8E',
  fontSize: '13px',
  textDecoration: 'none',
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

export default Login;
