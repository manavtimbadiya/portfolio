import React from "react";
import Header from '../Header/Header';
import FooterLink from "../FooterLink/FooterLink";
import aboutVector from "./../../assets/about_vector.png";
import "./About.css";
import aboutAnime from "./../../assets/about_anime.gif";

const About = () => {
	return(
			<div className="section-container">
				<Header 
					heading="About Me."
					details="Pre-Final year || Computer Engineer studying at ADIT"
				/>

				<div className="about-main">
					<div className="about-left">
						{/* Sub Section */}
						<h2 className="about-sub">
							Student
						</h2>
						<p className="about-details">
							Web Developer from India. Would love to discuss on C, C++, HTML, CSS, ReactJS.
						</p>
					</div>
					
					<div className="about-right">
						<img src={aboutAnime} alt="animation" className="about-anime" /> 
					</div>
				</div>

				<FooterLink
					phrase="Check out my "
					link="projects!"
					toAddress="/projects"
				/>

			{/* Vector Frame! */}
				<div className="vector-frame">
					<img src={aboutVector} className="about-container" alt="about" />
				</div>
			</div>
		)
}

export default About;