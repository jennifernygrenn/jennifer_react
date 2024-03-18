import React from "react";
import splash from "../splash-rac.png";

import tom from "../tom.png";
import pat from "../pat.png";
import terri from "../terri.png";

class Artists extends React.Component{
	render() {
		return (
			<main>
				<div id="content" className="artist-page2">
					<div id = "artist-text">
						<h1>ARTISTS</h1>	
					</div>
					<div id = "splash1">
						<img src = {splash} alt = "Colour splash" />
					</div>
					<table id = "my-table">
						<tbody>
			  				<tr>
			    				<td><img src = {tom} alt = "Tom Lehman painting" /></td>
								<td><img src = {pat} alt="Pat Wietholter painting" /></td>
								<td><img src = {terri} alt="Terri Lynne Blosser" /></td>
			  				</tr>
			  				<tr>
								<td><h3>Tom Lehman</h3></td>
			    				<td><h3>Pat Wietholter</h3></td>
								<td><h3>Lynne Blosser</h3></td>
			  				</tr>
			  				<tr>
								<td><a href="URL">Read more</a></td>
								<td><a href="URL">Read more</a></td>
			    				<td><a href="URL">Read more</a></td>
			  				</tr>
						</tbody>
					</table>
 				</div>
			</main>
		)
	}
}

export default Artists;