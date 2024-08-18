import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navigation/Navbar.jsx";
import Footer from "../components/navigation/Footer.jsx";

const Layout = () => {
	return (
		<>
			<div className="flex flex-col min-h-screen">
				<Navbar />
				<div className="flex flex-grow">
					<Outlet />
				</div>

				<Footer />
			</div>
		</>
	);
};

export default Layout;
