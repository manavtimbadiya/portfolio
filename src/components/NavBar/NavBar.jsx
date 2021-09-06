import React from "react";
import { slide as Menu } from 'react-burger-menu';

import "./NavBar.css";

class NavBar extends React.Component {
	render(){
		return (
	      <Menu>
	      {/* We NEVER want to use <a> inside our react router application */}
    	    <a id="home" className="menu-item" href="/">
    	    	Home
    	    </a>
        	<a id="about" className="menu-item" href="/about">
        		About
        	</a>
        	<a id="projects" className="menu-item" href="/projects">
        		Projects
        	</a>

	      </Menu>
    	);
	}
}

export default NavBar;