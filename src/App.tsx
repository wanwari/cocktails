import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile";
import Main from "./pages/Main";
import NotFound from "./pages/NotFound";

const App = () => {
	return (
		<div className="bg-sky-500 h-screen">
			<BrowserRouter>
				<Routes>
					<Route path="*" element={<NotFound />} />
					<Route path="/" element={<Main />} />
					<Route path="/profile" element={<Profile />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
