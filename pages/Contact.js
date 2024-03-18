import React from "react";
import splash from "../splash-rac.png";

class Contact extends React.Component {
	render() {
		return (
			<main><div id="content" className="contact-page">
			<div id = "contact-text">
				<h1>CONTACT</h1>	
			</div>
			<div id = "splash1">
				<img src = {splash} alt = "Colour splash" />
			</div>
			<div id = "contact-text-container">
				<div id = "address">
					<h2>Address</h2>
					<p>Riverside Art Center</p>
					<p>3 W. Auglaize St.</p>
					<p>P.O. Box 37</p>
					<p>Wapakoneta, OH 45895</p>
				</div>
				<div id = "telephone">
					<h2>Telephone</h2>
					<p>419-738-2352</p>
				</div>
				<div id = "contact-contact">
					<h2>Contact</h2>
					<p>riversideartcenter@gmail.com</p>
				</div>
			</div>
			<button id="button-color" onclick="changeBackgroundColor()">Change Color</button>
	
		 	</div>
			</main>
		)
	}
}

export default Contact;