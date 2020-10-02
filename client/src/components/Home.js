import React, { useState, useEffect } from 'react';
import './Home.css';
import axios from 'axios';

const Home = () => {
	const [users, setUsers] = useState([]);
	
	const getUsers = async () => {
		const res = await axios.get('/api/users');
		console.log(res.data.users);
		setUsers(res.data.users);
	}
	
	useEffect( () => {
		getUsers();
	}, []);
	
	const allUsers = users.length > 0 && users.map( (user, index) => {
		return <li key={index}>Name: {user.name} | Email: {user.email}</li>
	})
	
	const message = users.length > 0 ? "All Users" : "No Users Found";
	
	return (
		<div className="contaimer">
		<h1 className="title">{message}</h1>		
		<ul className="users">
			{allUsers}
		</ul>
		</div>
	)
}

export default Home;
