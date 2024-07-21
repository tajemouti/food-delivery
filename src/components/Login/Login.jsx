import { useDispatch, useSelector } from 'react-redux';
import { assets } from '../../assets/assets';
import './login.css';
import { hideLogin } from '../../redux/features/login/loginSlice';
import { setLogin, setSignUp } from '../../redux/features/login/loginStateSlice';

const Login = () => {
  const currentState = useSelector((state) => state.loginState);
  const dispatch = useDispatch();

  return (
    <div className="login">
      <form action="" className="login-container">
        <div className="login-title">
          <h2>{currentState}</h2>
          <button
            onClick={() => dispatch(hideLogin())}
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
              <button type="button" onClick={() => dispatch(setSignUp())}>Click here</button>
            </p>
          )
          : (
            <p>
              Already have an account?
              <button type="button" onClick={() => dispatch(setLogin())}>Login here</button>
            </p>
          )}
      </form>
    </div>
  );
};

export default Login;
