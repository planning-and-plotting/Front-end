import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
	return (
		<>
			<h1>404 Page Not Found</h1>
			<p>
				<Link to={"/"}>Go back to Home</Link>
			</p>
		</>
	);
};

export default NotFound;
