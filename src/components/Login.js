import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import UserImg from '../Image/user.jpg';
import '../components/Login.css';
import './Login.css';
import axios from 'axios';

class Login extends Component {
	state = {
		email: '',
		password: '',
		redirect: false
	};

	responseGoogle = (response) => {
		console.log(response);
	};

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	handleSubmit = (e) => {
		axios.get('https://jsonplaceholder.typicode.com/users?email=' + this.state.email + '&' + 'username=' + this.state.password).then((response) => {
			if (response.data == '') {
				alert('Invalid username or password');
			} else {
				this.setState({ redirect: true });
				this.setState({ email: '', password: '' });
			}
		});

		e.preventDefault();
	};
	renderRedirect = () => {
		if (this.state.redirect) {
			return <Redirect to="/home" />;
		}
	};

	render() {
		return (
			<div className="row text-center">
				{this.renderRedirect()}
				{sessionStorage.setItem('userName', this.state.username)}
				<div className="col-md-4 col-md-offset-3 form">
					<form onSubmit={(e) => this.handleSubmit(e)}>
						<b>
							<i>
								{' '}
								<h1 class="heading">USER LOGIN</h1>
							</i>
						</b>
						<img class="userImg" src={UserImg} alt="Logo" />
						<input
							type="email"
							style={{ fontSize: '15px', fontFamily: 'Cursive,sans-serif,Gugi', borderRadius: '10px', marginLeft: '50px', marginTop: '20px' }}
							required
							name="email"
							value={this.state.email}
							onChange={(e) => this.handleChange(e)}
							placeholder="Email"
							className="form-control"
						/>
						<input
							type="password"
							style={{ fontSize: '15px', fontFamily: 'Cursive,sans-serif,Gugi', borderRadius: '10px', marginLeft: '50px', marginTop: '20px' }}
							required
							name="password"
							value={this.state.password}
							onChange={(e) => this.handleChange(e)}
							placeholder="Password"
							className="form-control"
						/>
						<button id="loginbtn" style={{ borderRadius: '10px' }} required className="btn-primary">
							Login
						</button>
					</form>
					<br />

					<br />
				</div>
			</div>
		);
	}
}

export default Login;
