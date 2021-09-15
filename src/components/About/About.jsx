import React from "react";
import Header from '../Header/Header';
import aboutVector from "./../../assets/about_vector.png";
import "./About.css";

const About = () => {
	return(
			<div className="section-container">
				<Header 
					heading="About Me."
					details="Pre-Final year || Computer Engineer studying at ADIT"
				/>
			{/* Vector Frame! */}
				<div className="vector-frame">
					<img src={aboutVector} className="about-container" alt="about" />
				</div>
			</div>
		)
}

export default About;