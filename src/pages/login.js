import React, { useState } from 'react';
import '../css/login.css';
import { useDispatch, useSelector } from 'react-redux';

import NavBar from '../components/navBar';
import { toast } from 'react-toastify';
// import { Validate } from '../Functions/login';

const Login = ({ history }) => {
	const dispatch = useDispatch();
	const [name, setName] = useState('');
	const [password, setPassword] = useState('');

	const Validate = async (name, password) => {
		if (name === 'admin' && password === 'admin123') {
			toast.success('login succesful');
			history.push('/admin');
		} else if (name === 'staff' && password === 'staff123') {
			toast.success('login succesful');
			history.push('/staff');
		} else if (name === 'doctor' && password === 'doctor123') {
			toast.success('login succesfully');
			history.push('/doctor');
		} else {
			toast.error('login failed');
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		Validate(name, password);
		dispatch({
			type: 'LOGGED_IN_USER',
			payload: {
				name: name,
				password: password,
			},
		});
		setName('');
		setPassword('');
	};
	return (
		<>  
			<section class='login'>
				<div class='login-page'>
					<form action='' class='form'>
						<h2 class='headtwo'>Login</h2>
						<input
							class='input'
							type='text'
							placeholder='Username'
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
						<input
							class='input'
							type='password'
							placeholder='Password'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						<button class='btnn' type='submit' onClick={handleSubmit}>
							Login
						</button>
					</form>
				</div>
			</section>

			{/* <div className='container'>
				<form className='box'>
					<h1>login</h1>
					<input
						type='text'
						name=''
						placeholder='Enter Username'
						id='username'
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<input
						type='password'
						name=''
						placeholder='Enter Password'
						id='password'
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<button
						className='btn'
						type='submit'
						name=''
						value='Login'
						onClick={handleSubmit}
					>
						Submit
					</button>
				</form>
			</div> */}
		</>
	);
};

export default Login;
