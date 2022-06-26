import { useAuth0 } from "@auth0/auth0-react";
import Header from "../components/Header";
import Login from "../components/Login";

const Profile = () => {
	const { isAuthenticated, user } = useAuth0();

	return (
		<div className="container mx-auto">
			<Header />
			<Login />

			{isAuthenticated && user?.sub}
		</div>
	);
};

export default Profile;
