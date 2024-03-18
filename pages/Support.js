import React from "react";
import splash from "../splash-rac.png";

class Support extends React.Component{
	handleMouseOver = (event) => {
		event.target.style.backgroundColor = "black";
		event.target.style.color = "orange";
	};
	
	handleMouseOut = (event) => {
		event.target.style.backgroundColor = "orange";
		event.target.style.color = "black";
	};

	render() {
		return (
			<main>
			<div id="content" className="support-page">
				<div id = "donation-container">
					<div id = "donation-text">
						<h1>MAKE A DONATION</h1>
						<p>If you would like to make a donation to the Riverside Art Center please click the donate links located below. The links will send you to PayPal, our email to send donations is racwapak37@gmail.com</p>
						<button id = "donate-button" onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>Donate</button>

					</div>		
				</div>
				<div id = "splash1">
					<img src = {splash} alt = "Colour splash" />
				</div>
 			</div>
			</main>
		)
	}
}

export default Support;