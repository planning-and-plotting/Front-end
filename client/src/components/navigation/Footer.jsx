import "./Footer.css";

const Footer = () => {
	return (
		<footer className="App-footer">
			<div className="footer-section">
				<p className="f-head">Address</p>
				<p>Junction of Kojo Thompson and Adjabenq Roads,</p>
				<p>House No. D659/4, Accra</p>
				<p>P.O.Box GP 3183, Accra</p>
				<br></br>
				<p>Ghana Post Address: GA-105-4831</p>
			</div>
			<div className="footer-section">
				<p className="f-head">Working hours</p>
				<p>Mondays - Fridays 8:00 am - 4:30 pm</p>
				<br></br>
				<p className="f-head">Phone</p>
				<p>Reception</p>
				<p>(+233) 0302 667 576</p>
				<p>(+233) 0302 688 215</p>
				<p>(+233) 0533 735 200</p>
			</div>
			<div className="footer-section">
				<p className="f-head">Toll Free</p>
				<p>(+233) 800 400 003</p>
				<p>(+233) 800 114 645</p>
				<br></br>

				<p className="f-head">Customer Service</p>
				<p>(+233) 054 012 7100</p>
				<p>(+233) 0302 759 444</p>
				<br></br>

				<p className="f-head">WhatsApp</p>
				<p>(+233) 050 155 9220</p>
				<br></br>

				<p className="f-head">Email</p>
				<p>info@richco.com.gh</p>
				<p>customerservice@richco.com</p>
			</div>
		</footer>
	);
};

export default Footer;
