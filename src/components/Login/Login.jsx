import PropTypes from 'prop-types';
import { useState } from 'react';
import './login.css';
import { assets } from '../../assets/assets';

const Login = ({ setShowLogin }) => {
  const [currentState, setCurrentState] = useState('Login');

  return (
    <div className="login">
      <form action="" className="login-container">
        <div className="login-title">
          <h2>{currentState}</h2>
          <button
            onClick={() => setShowLogin(false)}
            aria-label="Set Show Login"
            type="button"
          >
            <img src={assets.crossIcon} alt="cross icon" />
          </button>
        </div>
        <div className="login-inputs">
          {currentState === 'Login'
            ? <></>
            : <input type="text" placeholder="Your name" required />}
          <input type="email" placeholder="Your e-mail" required />
          <input type="password" placeholder="Password" required />
        </div>
        <button className="create-login" type="button">{currentState === 'Sign Up' ? 'Create account' : 'Login'}</button>
        <div className="login-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use and privacy policy.</p>
        </div>
        {currentState === 'Login'
          ? (
            <p>
              Create a new account?
              <button type="button" onClick={() => setCurrentState('Sign Up')}>Click here</button>
            </p>
          )
          : (
            <p>
              Already have an account?
              <button type="button" onClick={() => setCurrentState('Login')}>Login here</button>
            </p>
          )}
      </form>
    </div>
  );
};

Login.propTypes = {
  setShowLogin: PropTypes.func.isRequired,
};

export default Login;
