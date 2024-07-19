import PropTypes from 'prop-types';
import { useState } from 'react'
import './login.css'
import { assets } from '../../assets/assets'

const Login = ({ setShowLogin }) => {
	const [currentState, setCurrentState] = useState('Login')

	return (
		<div className='login'>
			<form action="" className="login-container">
				<div className="login-title">
					<h2>{currentState}</h2>
					<img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="cross icon" />
				</div>
				<div className="login-inputs">
					{currentState === 'Login'
						?
						<></>
						:
						<input type="text" placeholder='Your name' required />
					}
					<input type="email" placeholder='Your e-mail' required />
					<input type="password" placeholder='Password' required />
				</div>
				<button>{currentState === 'Sign Up' ? 'Create account' : 'Login'}</button>
				<div className="login-condition">
					<input type="checkbox" required />
					<p>By continuing, I agree to the terms of use and privacy policy.</p>
				</div>
				{currentState === "Login"
				?
					<p>Create a new account? <span onClick={() => setCurrentState("Sign Up") }>Click here</span></p>
				:
				<p>Already have an account? <span onClick={() => setCurrentState("Login")}>Login here</span></p>
				}
			</form>
		</div>
	)
}

Login.propTypes = {
	setShowLogin: PropTypes.func.isRequired,
	setCurrentState: PropTypes.func.isRequired,
};

export default Login
