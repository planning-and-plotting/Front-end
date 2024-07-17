import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/richco.png"; // Corrected relative path
import "./Navbar.css"; // Import the CSS file

const navLinks = [
	{ name: "HOME", path: "/" },
	{ name: "PRODUCTS AND SERVICES", path: "/products" },
];

const Navbar = () => {
	const [dropdownVisible, setDropdownVisible] = useState(false);
	const [drawerVisible, setDrawerVisible] = useState(false);

	const handleMouseEnter = () => {
		setDropdownVisible(true);
	};

	const handleMouseLeave = () => {
		setDropdownVisible(false);
	};

	const toggleDrawer = () => {
		setDrawerVisible(!drawerVisible);
	};

	return (
		<nav className="navbar">
			<div className="container">
				<div className="logo-container">
					<img src={logo} alt="Richco Trust Ghana Ltd. Logo" className="logo" />
				</div>
				<div className={`nav-links ${drawerVisible ? "show" : ""}`}>
					{navLinks.map((item, index) => (
						<NavLink
							key={index}
							to={item.path}
							className="nav-link"
							activeClassName="active"
						>
							{item.name}
						</NavLink>
					))}
					<div
						className="nav-link about-link"
						onMouseEnter={handleMouseEnter}
						onMouseLeave={handleMouseLeave}
					>
						ABOUT US
						{dropdownVisible && (
							<div className="dropdown-menu">
								<NavLink
									to="/about"
									className="dropdown-link"
									activeClassName="active"
								>
									About Us
								</NavLink>
								<NavLink
									to="/policies"
									className="dropdown-link"
									activeClassName="active"
								>
									Policies
								</NavLink>
							</div>
						)}
					</div>
					<NavLink to="/contact" className="nav-link" activeClassName="active">
						CONTACT US
					</NavLink>
				</div>

				<div
					className={`burger ${drawerVisible ? "toggle" : ""}`}
					onClick={toggleDrawer}
				>
					<div className="line1"></div>
					<div className="line2"></div>
					<div className="line3"></div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
