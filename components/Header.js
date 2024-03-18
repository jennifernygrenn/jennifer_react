import React from "react";
import {NavLink, Link} from "react-router-dom";

class Header extends React.Component {
	render() {
		return (
			<header id="header">
			<div id="fixed-header">
			<div id="logo">
				<NavLink to="/">
					<img src="https://static.wixstatic.com/media/e0328a_16daaefc016a4030b7bcb67ae72f1e4f~mv2.png/v1/fill/w_1031,h_424,al_c,q_90,enc_auto/e0328a_16daaefc016a4030b7bcb67ae72f1e4f~mv2.png" alt="Riverside Art Center Logo" />
				</NavLink>
			</div>
			<div id="empty-space"></div>

			<div id="right-side-header">
				<div id = "socials">
					<div id="facebook">
						<a href="https://www.facebook.com/riversideartcenter/" target="_blank">
							<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/480px-Facebook_Logo_%282019%29.png" alt="Facebook Logo" />
						</a>
					</div>
					<div id="instagram">
						<a href="https://www.instagram.com/riversideartcenterwapak/?hl=en" target="_blank" rel="noopener noreferrer">
							<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" alt="Instagram Logo" />
						</a>
					</div>
				</div>
				<div id="searchbar">
					<input type="text" id="searchInput" placeholder="Search..." onfocus="handleFocus(this)" onblur="handleBlur(this)" />
					<button id="searchButton">Search</button>
				</div>
			</div>
		</div>
    		<nav id="navbar">
      			<ul>
       				<li><NavLink to="/">Home</NavLink></li>
       				<li id="about-menu">
					<NavLink to="about">About</NavLink>
					<div id="about-slide">
						<ul>
							<li><NavLink to="about">Read about RAC</NavLink></li>
							<li><a href="#">Read about our board</a></li>
							<li><a href="#">Read about our partners</a></li>
						</ul>
					</div>
				</li>    
       				<li><NavLink to="artists">Our Artists</NavLink></li>
       				<li><a href="URL">Classes</a></li>
       				<li><a href="URL">Events</a></li>
       				<li><a href="URL">Exhibits</a></li>
       				<li><NavLink to="support">Support Us</NavLink></li>
       				<li><a href="URL">Memberships</a></li>
      			</ul>
    		</nav>
		
  		</header>
		)
	}
}

export default Header;