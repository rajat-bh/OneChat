import React, { useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import './Login.css';

const SPLINE_URL =  ""
// process.env.LOGIN_PAGE_REACT_SPLINE_URL TO solve with https://trekinbami.medium.com/using-environment-variables-in-react-6b0a99d83cf5

const Login = () => {
  useEffect(() => {
    
  }, []);

  const handleSignIn = (e) => {
    e.preventDefault();
    // console.log(process.env)
  };

  const handleSignInWithGoogle = () => {
    // To handle sign-in with Google logic
  };

  // To do resolve the dot env issue
  return (
    <div className="login-page">
      <div className="spline-background">
        <Spline scene= {SPLINE_URL} />
      </div>
      <a className="logo" href="https://spline.design"></a>
      <div className="login-form-container">
        <div className="login-form">
          <input className="login-input" type="email" placeholder="Email" required />
          <input className="login-input" type="password" placeholder="Password" required />
          <button className="login-button" onClick={handleSignIn}>
            Sign In
          </button>
          <button className="google-sign-in" onClick={handleSignInWithGoogle}>
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
