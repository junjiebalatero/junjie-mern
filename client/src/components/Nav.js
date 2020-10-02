import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
	return (
		<nav>
			<h2>MERN</h2>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/register">Register</Link>
				</li>
			</ul>
		
		</nav>
	)
}

export default Nav
