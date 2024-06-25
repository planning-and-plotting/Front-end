import React from "react";
import { NavLink } from "react-router-dom";

const navLinks = [
	{ name: "Home", path: "/" },
	{ name: "Products and Services", path: "/products" },
	{ name: "About", path: "/about" },
	{ name: "Contact Us", path: "/contact" },
];

// TODO: Work on the navbar as shown in the figma design

const Navbar = () => {
	return (
		// <nav className="w-screen h-[7vh]">
		// 	<div className="max-w-screen-xl mx-auto h-full p-5 flex justify-between items-center">
		// 		<div className="gap-6 hidden lg:flex">
		// 			{navLinks.map((item, index) => (
		// 				<div key={index}>
		// 					<NavLink
		// 						to={item.path}
		// 						className={({ isActive }) =>
		// 							isActive ? "underline underline-offset-2" : ""
		// 						}
		// 					>
		// 						{item.name}
		// 					</NavLink>
		// 				</div>
		// 			))}
		// 		</div>
		// 	</div>
		// </nav>
		<nav>
			<h1>Navbar</h1>
		</nav>
	);
};

export default Navbar;
