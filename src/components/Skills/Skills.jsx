import React from "react";
import Header from "../Header/Header";
import FooterLink from "../FooterLink/FooterLink";
import {skillList} from "./../../assets/skillsData";
import "./Skills.css";
import skillsVector from "./../../assets/skills_vector.png";
import SkillsCard from "./SkillsCard";

const Skills = () => {
	return (
		<div className="section-container">
			<Header 
				heading='My Skills.'
                details="Passionate about new technologies, I keep exploring stuff."
            />

            <div className="skill-card-container">
            	{
                    skillList.map(({skillName, skillUrl}) => (
                         <SkillsCard skillName={skillName} skillUrl={skillUrl} />  
                    ))
                }
            </div>

            <FooterLink 
            	phrase='Get in ' 
            	link='touch.' 
            	toAddress='/contact' 
            />

            <div className="skills-vector-frame">
            	<img src={skillsVector} alt="skills" className="skills-vector" />
            </div>
		</div>
		);
};

export default Skills;