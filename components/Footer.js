import React from "react";
import {NavLink, Link} from "react-router-dom";

class Footer extends React.Component {
	render() {
		return (
			<footer id="footer">
				<div id = "footer-text">
    				<p>Hours: Wednesday - Friday 12:00 PM - 4:00 PM <br /><span class="indent">Saturday 10:00 AM - 2:00 PM</span></p>
				</div>
    				<div id="connect-contact">
      					<ul>
        					<li><NavLink to="contact">Contact</NavLink></li>
        					<li><a href="#">Connect with us</a></li>
      					</ul>    
    				</div>
			</footer>
		)
	}
}

export default Footer;