import { Route, Routes } from "react-router-dom";
import About from "../components/pages/About.jsx";
import Background from "../components/pages/Background.jsx";
import Contact from "../components/pages/Contact.jsx";
import Home from "../components/pages/Home.jsx";
import Mission from "../components/pages/Mission.jsx";
import NotFound from "../components/pages/NotFound.jsx";
import Policies from "../components/pages/Policies.jsx";
import Products from "../components/pages/Products.jsx";
import Gallery from "../components/pages/gallery.jsx";
import Layout from "../layouts/Layout.jsx";
import AdminLogin from "../components/pages/AdminLogin.jsx";
import AdminDashboard from "../components/pages/AdminDashboard.jsx";

const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="products" element={<Products />} />
				<Route path="about" element={<About />} />
				<Route path="contact" element={<Contact />} />
				<Route path="gallery" element={<Gallery />} />
				<Route path="background" element={<Background />} />
				<Route path="mission" element={<Mission />} />
				<Route path="policies" element={<Policies />} />
				<Route path="director" element={<Contact />} />
				<Route path="/" element={<Contact />} />
				<Route path="/admin/login" element={<AdminLogin />} />
				<Route path="/admin/dashboard" element={<AdminDashboard />} />
				<Route path="*" element={<NotFound />} />
			</Route>
		</Routes>
	);
};

export default AppRoutes;
