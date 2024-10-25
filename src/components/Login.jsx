import React, { useState } from 'react';
import '../styles/login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validating Fields
    if (!email || !password) {
      setError('Please, complete both fields.');
      return;
    }

    setError('');
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">LogIn</h2>
        <form onSubmit={handleSubmit}>
          {error && <p className="error-message">{error}</p>}
          <div className="input-group">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </div>
          <button type="submit" className="login-btn">Iniciar sesión</button>
        </form>
        <div className="login-divider">
          <div className="line"></div>
          <span>O</span>
          <div className="line"></div>
        </div>
        <button className="login-fb-btn">
          <i className="fab fa-facebook-square"></i> Login using Facebook
        </button>
        <p className="forgot-password">Forgot your Password?</p>
      </div>
      <div className="signup-box">
        ¿No account? <a href="/sign-up">Sign Up</a>
      </div>
    </div>
  );
};

export default Login;
