import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

import airplane from '../../images/airplane.svg';
import adminlogo from '../../images/adminLogo.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
	faKey,
	faUser,
} from '@fortawesome/free-solid-svg-icons'


class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			formData: {},
			formErr: {},
			errorMsg: '',
			isAuth: localStorage.getItem('auth') ? true : false,
		}

		this.handleLogin = this.handleLogin.bind(this);
		this.validateLogin = this.validateLogin.bind(this);
		this.submitLogin = this.submitLogin.bind(this);
	}

	handleLogin(event) {
		event.preventDefault();

		const {formData} = this.state;

		formData[event.target.name] = event.target.value;

		this.setState({
			formData
		})
		
	}

	validateLogin() {
		let formIsValid = true;
		const error = {};
		const { formData } = this.state;


		if (!formData['username']) {
			error['username'] = 'Username is required';
			formIsValid = false;
		}

		if (!formData['password']) {
			error['password'] = 'Password is required';
			formIsValid = false;
		}

		this.setState({
			formErr: error
		})

		return formIsValid;
	}

	submitLogin(event) {
		event.preventDefault();

		if (this.validateLogin()) {

			const { formData } = this.state;
			
			axios({
				method: 'POST',
				url: 'http://localhost:3000/api/v1/user/login',
				data: formData
			}).then((res) => {
				
				if (res.status === 200 && res.data) {
					
					localStorage.setItem('auth', JSON.stringify(res.data));

					this.setState({
						isAuth: true,
					})

				} else {
					this.setState({
						errorMsg: 'Invalid username or password'
					})
				}

			}).catch((err) => {
				this.setState({
					errorMsg: 'Invalid username or password'
				})
			})

		}
	}

	componentDidMount() {
		console.log(typeof localStorage.getItem('auth'));
	}

	render() {

		const { formData, formErr, errorMsg, isAuth } = this.state;

		if (isAuth) {
			return <Redirect to='/' />
		}

		return (
			<div className="login">
				<div className="l_left">
					<img src={airplane}  />
				</div>
				<div className="l_right">
					<div className="login_form">
						<img src={adminlogo} />
						<h2>Sign In</h2>
						<form method="POST" className="custom-form" onSubmit={this.submitLogin}>
							<p className="err-msg">{errorMsg}</p>
							<div className="form-item">
								<input type="text" name="username" placeholder="Username" onChange={this.handleLogin} value={formData.username || ''} />
								<span>{ formErr.username || '' }</span>
							</div>
							<div className="form-item">
								<input type="password" name="password" placeholder="Password" onChange={this.handleLogin} value={formData.password || ''} />
								<span>{ formErr.password || '' }</span>
							</div>
							<div className="form-item">
								<a href="">Forgot Password?</a>
							</div>
							<div className="form-item">
								
								<button type="submit">Submit</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		)
	}
}

export default Login;