import { Link } from "react-router-dom";

const Header = () => {
	return (
		<div className="flex flex-row place-content-between p-6 mb-6 border-b-4 border-orange-300">
			<h1 className="text-white font-bold uppercase">Cocktails</h1>
			<div className="">
				<Link
					to="/"
					className="px-4 py-2 rounded-lg bg-orange-400 text-white hover:bg-orange-500"
				>
					Search
				</Link>
				<Link
					to="/profile"
					className="px-4 py-2 ml-2 rounded-lg bg-orange-400 text-white hover:bg-orange-500"
				>
					My Account
				</Link>
			</div>
		</div>
	);
};

export default Header;
