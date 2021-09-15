import React,{Component} from "react";
import { Link } from "react-router-dom";
//import Modal from "../Modal/Modal";
import Modal from '../Modal/Modal';

import homeAnime from "./../../assets/home_anime.gif";
import "./Home.css";

class Home extends Component {
	state = {showModal : false};

	componentDidMount() {
		setTimeout(() => {
			this.setState({showModal: true});
		},2400)
	}
	render() {
		return (
			<div className="home-container">
				{this.state.showModal && <Modal />}				
				<div className="header-text">
					<h1>Welcome to my portfolio!</h1>
					<p>This is Manav, a web developer</p>
				</div>
				<div className="head-btns">
					<Link to="/about" className="btn btn-white">
						<p className="btn-text">Know more about me</p>
					</Link>
					<Link to="/contact" className="btn btn-transparent">
						<p className="btn-text">Connect with me</p>
					</Link>
				</div>	
				<div className="splash-image">
					<img 
						src={homeAnime} 
						alt="animation" 
						className="home-anime" 
					/>
				</div>
			</div>
		 );
		}
}

export default Home;