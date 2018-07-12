import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NavLinks extends Component {
	render() {
		const { resetMobileMenu } = this.props;

		const routes = [
			{
				path: "/",
				name: "Home"
			},
			{
				path: "/my-work",
				name: "My Work"
			},
			{
				path: "/about-me",
				name: "About Me"
			},
			{
				path: "/contact",
				name: "Contact"
			}
		];

		return (
			<ul className="mainNav__links">
				{routes.map((item, key = 0) => {
					return (
						<li key={key++} className="mainNav__links__item">
							<NavLink
								exact
								to={item.path}
								className="mainNav__links__item__link"
								activeClassName="is-current"
								onClick={resetMobileMenu}
							>
								{item.name}
							</NavLink>
						</li>
					);
				})}
			</ul>
		);
	}
}

export default NavLinks;