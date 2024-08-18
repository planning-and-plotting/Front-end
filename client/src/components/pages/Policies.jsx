import React, { useState } from "react";
import "../../styles/policies.css";

import fitnessIcon from "../../assets/treadmill 1.png";
import firstAidIcon from "../../assets/first-aid-kit 1.png";
import seatBeltIcon from "../../assets/seatbelt 1.png";
import gunIcon from "../../assets/no-weapons 1.png";
import earthIcon from "../../assets/planet-earth 1.png";

const policies = [
	{
		title: "DRUG, ALCOHOL AND WEAPONS POLICY",
		icon: gunIcon,
		content:
			"Substance Use: Abuse of alcohol, use of illegal drugs, or misuse of legal drugs is prohibited as it impairs work performance and poses safety risks. Employees must not operate machinery or equipment under the influence.",
	},
	{
		title: "OCCUPATIONAL HEALTH, SAFETY REALITY AND ENVIRONMENTAL POLICY",
		icon: earthIcon,
		content:
			"High Standards: Striving for high standards in Occupational Health, Safety, and environmental management by preventing injuries and ill health among employees, contractors, visitors, and local communities.",
	},
	{
		title: "FITNESS TO WORK POLICY",
		icon: fitnessIcon,
		content:
			"Richco Trust Ghana Limited is committed to ensuring a safe and healthy working environment for all stakeholders, addressing potential impairments like fatigue, stress, illness, and substance effects. The company upholds a duty of care to ensure individuals unfit for work do not continue their duties and may be required to leave the workplace.",
	},
	{
		title: "FIRST AID POLICY",
		icon: firstAidIcon,
		content:
			"First Aid Posts: All operational sites must have a well-equipped first aid post with a qualified First Aider to handle all traumas. Record-Keeping: Systems must be in place to accurately record and maintain personal medical information and treatment details, ensuring confidentiality.",
	},
	{
		title: "SEAT BELT POLICY",
		icon: seatBeltIcon,
		content:
			"Richco Trust recognizes that it may not always be possible to avoid accidents caused by other drivers. To minimize the risk of road accidents, both technical and defensive driving skills are needed. In events where road accident is no longer within the driver's control, the seat belt is the key factor in saving lives, and property and reducing the severity of injuries.",
	},
];

const PolicyItem = ({ title, icon, content }) => {
	const [showMore, setShowMore] = useState(false);
	const toggleShowMore = () => setShowMore(!showMore);

	return (
		<div className="policy-item">
			<h3>{title}</h3>
			<img src={icon} alt="policy icon" className="policy-icon" />
			<p>{showMore ? content : `${content.substring(0, 100)}...`}</p>
			<button onClick={toggleShowMore}>
				{showMore ? "Read Less" : "Read More"}
			</button>
		</div>
	);
};

const Policies = () => {
	return (
		<div className="policies">
			<h1 className="policies.h">COMPANY POLICIES</h1>
			{policies.map((policy, index) => (
				<PolicyItem
					key={index}
					title={policy.title}
					icon={policy.icon}
					content={policy.content}
				/>
			))}
		</div>
	);
};

export default Policies;
