import React from 'react';
import './LoginV0.css';

const LoginV0 = () => {
  const handleSignIn = (e) => {
    e.preventDefault();
    // Handle sign-in logic
  };

  const handleSignInWithGoogle = () => {
    // Handle sign-in with Google logic
  };

  return (
    <div className="login-page">
      <h1>Login</h1>
      <form className="login-form" onSubmit={handleSignIn}>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Sign In</button>
      </form>
      <button className="google-sign-in" onClick={handleSignInWithGoogle}>
        Sign In with Google
      </button>
    </div>
  );
};

export default LoginV0;