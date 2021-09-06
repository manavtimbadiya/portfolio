import React from "react";
import { slide as Menu } from 'react-burger-menu';
import { Link } from "react-router-dom";

import "./NavBar.css";

class NavBar extends React.Component {
	render(){
		return (
		<Menu>
	      	{/* We NEVER want to use <a> inside our react router application */}
			{	/* Because It refresh whole page But we want to use client side routing It doesn't refresh whole page */}
    		{/* So React-router-dom provide Link component */}
    	    {/*a id="home" className="menu-item" href="/">
    	    	Home
    	    </a */}
    	    <Link to="/" className="menu-item">
    	    	Home
    	    </Link>
    	    <Link to="/about" className="menu-item">
    	    	About
    	    </Link>
    	    <Link to="/projects" className="menu-item">
    	    	Projects
    	    </Link>
    	    <Link to="/skills" className="menu-item">
    	    	Skills
    	    </Link>
    	    <Link to="/contact" className="menu-item">
    	    	Contact
    	    </Link>
		</Menu>
		);
	}
}

export default NavBar;