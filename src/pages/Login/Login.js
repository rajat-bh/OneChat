import React, { useEffect, useState } from 'react';
import Spline from '@splinetool/react-spline';
import './Login.css';

const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const SPLINE_URL = process.env.REACT_APP_LOGIN_SPLINE_URL;

const Login = () => {
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    
  }, []);

  const handleSignIn = (e) => {
    e.preventDefault();
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const emailAddr = emailInput.value
    const password = passwordInput.value
    if (!emailAddr) {
      setErrorMessage('Email is required');
      return;
    } 
    if (!String(emailAddr).toLowerCase().match(pattern)) {
      setErrorMessage('Please enter a valid email address');
      return;
    }

    if (!password) {
      setErrorMessage('Password is required');
      return;
    }
    console.log('To handle sign-in logic', emailAddr, password)
  };

  const handleSignInWithGoogle = () => {
    
  };

  return (
    <div className="login-page">
      <div className="spline-background">
        <Spline scene={SPLINE_URL} />
      </div>
      <a className="logo" href="https://spline.design"></a>
      <div className="login-form-container">
        <div className="login-form">
          <input id="email" className="login-input" type="email" placeholder="Email" required />
          <input id="password" className="login-input" type="password" placeholder="Password" required />
          <button className="login-button" onClick={handleSignIn}>
            Sign In
          </button>
          <button className="google-sign-in" onClick={handleSignInWithGoogle}>
            Login with Google
          </button>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
      </div>
    </div>
  );
};

export default Login;
