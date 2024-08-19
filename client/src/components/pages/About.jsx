import React from "react";
import "../../styles/AboutUs.css";
import Kab0 from "../../assets/Kab-0.png";
import Richard from "../../assets/Richard-Kabutey-1.png";
import Prince from "../../assets/Kab-2.png";
import vision from "../../assets/vision-1.png";
import mission from "../../assets/target-1.png";

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
						industry.
						<br /> <br />
						Our headquarters in Ghana serves as the hub for our operations,
						ensuring the efficient and safe transportation of petroleum products
						across the region.
					</p>
				</div>
				<div className="image-container">
					<img src={Kab0} alt="director" />
				</div>
			</div>
			<hr className="hr1" />
			<div className="mission-vision">
				<img className="m-icon" src={mission} alt="mission" />
				<div className="mission">
					<h3>MISSION</h3>
					<p>
						Our mission is to provide sustainable and reliable transportation
						services, ensuring the highest safety and environmental standards
						for the communities we serve.
					</p>
				</div>
				<img className="v-icon" src={vision} alt="vision" />

				<div className="vision">
					<h3>VISION</h3>
					<p>
						Our vision is to be the leading petroleum transportation company in
						West Africa, known for our innovation and integrity.
					</p>
				</div>
			</div>

			<hr className="hr2" />
			<h2>MEET THE DIRECTORS</h2>
			<section className="directors">
				<div className="director">
					<p>
						<h3>Richard Kabutey</h3>
						<h4>CEO of Richco</h4>
						<hr className="hr3" />
						The CEO of Richco Trust Company Limited is a dynamic leader with a remarkable track record in the oil transportation industry. Under their stewardship, the company has achieved significant growth and operational excellence. With a keen strategic vision, the CEO has steered Richco Trust through evolving market conditions, emphasizing sustainability, innovation, and safety.

They possess a deep understanding of logistics and supply chain management, combined with a passion for advancing industry standards. Their leadership style is characterized by a commitment to fostering a collaborative and forward-thinking corporate culture. By championing cutting-edge technologies and sustainable practices, the CEO has positioned Richco Trust as a leader in the oil transport sector, dedicated to delivering exceptional service and creating value for clients and stakeholders alike.
					</p>
					<img className="director-img" src={Richard} alt="Richard Kabutey" />
				</div>
				<br />
				<br />
				<br />
				<br />
				<div className="director-2">
					<img className="director-img2" src={Prince} alt="Prince Kabutey" />
					<p>
						<h3>Prince Kabutey</h3>
						<h4>Co-Director of Richco</h4>
						<hr className="hr3-2" />
						<p className="p2">
							The Co-Director of Richco Trust Company Limited is a pivotal force in steering the company’s strategic direction and operational efficiency. With a strong background in management and logistics, they play a crucial role in optimizing processes and driving growth. Their expertise in strategic planning and commitment to excellence supports the company's mission to lead in oil transportation while fostering a culture of innovation and sustainability.
						</p>
					</p>
				</div>
			</section>
			<br />
		</div>
	);
};

export default AboutUs;
