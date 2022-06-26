import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
	const { loginWithPopup, logout, isAuthenticated } = useAuth0();

	const loginButton = !isAuthenticated ? (
		<button onClick={() => loginWithPopup()}>Login</button>
	) : (
		<button onClick={() => logout()}>Logout</button>
	);

	return (
		<div className="p-2 rounded border-2 border-white w-fit mx-auto">
			{loginButton}
		</div>
	);
};

export default Login;
