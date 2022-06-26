import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Main from "./pages/Main";
import NotFound from "./pages/NotFound";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="*" element={<NotFound />} />
				<Route path="/" element={<Main />} />
				<Route path="/login" element={<Login />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
