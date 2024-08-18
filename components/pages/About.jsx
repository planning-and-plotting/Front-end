import React from "react";
import "./AboutUs.css"; // Import the CSS file
import Kab0 from "../../assets/Kab 0.png";
import Richard from "../../assets/Richard Kabutey 1.png";
import Prince from "../../assets/Kab 2.png";
import vision from "../../assets/vision 1.png";
import mission from "../../assets/target 1.png";

const AboutUs = () => {
	return (
		<div className="about-us">
			<div className="about">
				<div className="text-content">
					<h2>ABOUT US</h2>
					<p>
						Founded in 1989, Richco Trust Company Limited is a leading petroleum
						haulage service provider based in Ghana. Over the last two decades,
						we have built a reputation for reliability and excellence in the
						industry.<br></br> <br></br>Our headquarters in Ghana serves as the
						hub for our operations, ensuring the efficient and safe
						transportation of petroleum products across the region.
					</p>
				</div>
				<div className="image-container">
					<img src={Kab0} alt="Director Image" />
				</div>
			</div>
			<hr className="hr1"></hr>
			<div className="mission-vision">
				<img className="m-icon" src={mission} />
				<div className="mission">
					<h3>MISSION</h3>
					<p>
						Our mission is to provide sustainable and reliable transportation
						services, ensuring the highest safety and environmental standards
						for the communities we serve.
					</p>
				</div>
				<img className="v-icon" src={vision} />

				<div className="vision">
					<h3>VISION</h3>
					<p>
						Our vision is to be the leading petroleum transportation company in
						West Africa, known for our innovation and integrity.
					</p>
				</div>
			</div>

			<hr className="hr2"></hr>
			<h2>MEET THE DIRECTORS</h2>
			<section className="directors">
				<div className="director">
					<p>
						<h3>Richard Kabutey</h3>
						<h4>CEO of Richco</h4>
						<hr className="hr3"></hr>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit <br></br> <br></br> in voluptate velit esse cillum
						dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
						non proident, sunt in culpa qui officia deserunt mollit anim id est
						laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</p>
					<img className="director-img" src={Richard} alt="Richard Kabutey" />
				</div>
				<br></br>
				<br></br>
				<br></br> <br></br>
				<div className="director-2">
					<img className="director-img2" src={Prince} alt="Prince Kabutey" />
					<p>
						<h3>Prince Kabutey</h3>
						<h4>Co-Director of Richco</h4>
						<hr className="hr3-2"></hr>
						<p className="p2">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit <br></br> <br></br> in voluptate velit esse cillum
							dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
							non proident, sunt in culpa qui officia deserunt mollit anim id
							est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Sed do eiusmod tempor incididunt ut labore et dolore magna
							aliqua.
						</p>
					</p>
				</div>
			</section>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
		</div>
	);
};

export default AboutUs;
