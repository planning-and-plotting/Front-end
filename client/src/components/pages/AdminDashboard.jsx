import { useState, useEffect } from "react";
import axios from "axios";

const AdminDashboard = () => {
	const [contacts, setContacts] = useState([]);

	useEffect(() => {
		const fetchContacts = async () => {
			try {
				const token = localStorage.getItem("adminToken");
				const response = await axios.get("/api/admin/contacts", {
					headers: { Authorization: `Bearer ${token}` },
				});
				setContacts(response.data);
			} catch (error) {
				console.error("Error fetching contacts:", error);
			}
		};

		fetchContacts();
	}, []);

	return (
		<>
			<div>This is the admin dashboard. Work on this</div>
		</>
	);
};

export default AdminDashboard;
