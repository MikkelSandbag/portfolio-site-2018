import React from "react";
import { NavLink } from "react-router-dom";
import githubLogo from "./github-100.png";
import linkedinLogo from "./linkedin-100.png";
import twitterLogo from "./twitter-100.png";
import facebookLogo from "./facebook-100.png";
import "./NavBar.css";

class NavBar extends React.Component {
	render() {
		return (
			<section id="mainNavWrapper">
				<nav>
					<ul className="navLinks">
						<li>
							<NavLink to="/my-work" activeClassName="is-current">
								My work
							</NavLink>
						</li>
						<li>
							<NavLink to="/about-me" activeClassName="is-current">
								About me
							</NavLink>
						</li>
						<li>
							<NavLink to="/contact" activeClassName="is-current">
								Contact
							</NavLink>
						</li>
					</ul>
					<ul id="socialMediaIcons">
						<li id="github">
							<a
								href="https://github.com/MikkelSandbag"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img src={githubLogo} alt="github logo" />
							</a>
						</li>
						<li id="linkedin">
							<a
								href="https://www.linkedin.com/in/mikkelsandberg/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img src={linkedinLogo} alt="linkedin logo" />
							</a>
						</li>
						<li id="twitter">
							<a
								href="https://twitter.com/mikkelhsandberg"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img src={twitterLogo} alt="twitter logo" />
							</a>
						</li>
						<li id="facebook">
							<a
								href="https://www.facebook.com/mikkelhsandberg"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img src={facebookLogo} alt="facebook logo" />
							</a>
						</li>
					</ul>
				</nav>
			</section>
		);
	}
}

export default NavBar;
