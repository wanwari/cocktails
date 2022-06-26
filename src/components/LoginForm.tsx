const LoginForm = () => {
	return (
		<div className="rounded border-2 border-white w-fit mx-auto">
			<form className="flex flex-col p-4">
				<p>Username:</p>
				<input type="text" />
				<p>Password:</p>
				<input type="password" />
				<input type="submit" value="Login" />
			</form>
		</div>
	);
};

export default LoginForm;
