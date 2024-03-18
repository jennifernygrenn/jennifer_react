import React from "react";
import splash from "../splash-rac.png";

class About extends React.Component{
	render() {
		return (
			<main>
			<div id="content" className = "about-page">
				<div id = "rac-entry">
					<img src = "https://static.wixstatic.com/media/e0328a_78f9cb89f15341fdbd9546c8e4545eaa~mv2.jpg/v1/crop/x_0,y_504,w_3024,h_3024/fill/w_838,h_838,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/front%20of%20RAC.jpg" alt = "RAC Entry" />
				</div>
				<div id = "splash1">
					<img src = {splash} alt = "Colour splash" />
				</div>
				<div id = "about-text-container">
					<div id = "about-text">
						<h1>RIVERSIDE ART CENTER</h1>
						<p>Riverside Art Center, a 501c3 organization, was founded to inspire creativity through the arts. Located in beautiful & historic downtown Wapakoneta, OH. Riverside Art Center is home to a variety of art classes and exhibits for all ages.</p>
						<p>Create one of a kind art pieces at our art events. Visit our gallery to view our members art work and purchase pieces for your home. We host art exhibits featuring members, local artists and students from local schools. Sign up for our art classes to learn painting, drawing and similar techniques</p>
						<div id ="about-links">
							<a href="URL">Read about our board</a>
							<a href="URL">Read about our partners</a>
						</div>
					</div>
			
				</div>
		 	</div>
			</main>
		)
	}
}

export default About;