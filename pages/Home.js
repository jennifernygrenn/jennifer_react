import React from "react";
import splash from "../splash-rac.png";
import artist from "../artist.png";

class Home extends React.Component {
	render() {
		return (
				<div id="content" className="home-page">
					<div id = "welcome-text">
						<h3>WELCOME TO</h3>
						<h1>RIVERSIDE ART CENTER</h1>
					</div>
					<div id = "splash1">
						<img src = {splash} alt = "Colour splash" />
					</div>
					<div id = "slide">
						<a href = "https://www.riversideartcentershop.com/" target = "_blank">
							<img src="https://static.wixstatic.com/media/e0328a_3ed2e704473647d0be6617d0baa3dfbd~mv2.jpg/v1/fill/w_708,h_404,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/e0328a_3ed2e704473647d0be6617d0baa3dfbd~mv2.jpg" alt = "Shop" />
						</a>
						<img src={artist} alt = "Artist Avenue"/>
						<iframe src="https://www.youtube.com/embed/aI9JdHpQIfQ?si=VGMHFxJ_sGYSGbX2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
					</div>
 				</div>
		)
	}
}

export default Home;