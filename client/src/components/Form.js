import React, { useState } from 'react';
import axios from 'axios';
import './Form.css';

const Form = () => {
	const [userDetails, setUserDetails] = useState({
		userName: '',
		userEmail: '',
		message: ''
	});
	
	const formValues = (event) => {
		setUserDetails({
			...userDetails,
			[event.target.name]: event.target.value
		})
	}
	
	const register = async (event) => {
		event.preventDefault();
		
		const body = JSON.stringify({
			userName: userDetails.userName,
			userEmail: userDetails.userEmail,
		});
		
		const response = await axios.post("/api/register", body, {
			headers: {
				'Content-Type': 'application/json'
			}
		})
		
		setUserDetails({
			...userDetails,
			message: response.data.message
		});
	}
	
	return (
		<div className="container">
			<h1 className="title">Register User</h1>
			<form onSubmit={register}>
				<label>Name: </label>
				<input required type="text" id="userName" name="userName" onChange={formValues}/>
				<br />
				<label>Email: </label>
				<input required type="email" id="userEmail" name="userEmail" onChange={formValues}/>
				<br />
				<button type="submit">Register</button>
				{ 
					userDetails.message
					 ? <h1 className="resultMessage">{userDetails.message}</h1>
					  : null
				}
			</form>		
		</div>
	)
}

export default Form;
