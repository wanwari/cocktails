import { useState } from "react";
import DisplayResults from "./DisplayResults";
import { useNavigate } from "react-router-dom";

const SearchForm = () => {
	const [searchBarText, setSearchBarText] = useState("");
	const [apiResponse, setApiResponse] = useState(null);

	let navigate = useNavigate();

	const searchAPI = async (event: any) => {
		if (event) event.preventDefault();

		fetch(
			"https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" +
				searchBarText
		)
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setApiResponse(data);
				navigate("../?q=" + searchBarText, { replace: true });
			});
	};

	const searchResults =
		apiResponse !== null ? <DisplayResults drinks={apiResponse} /> : null;

	return (
		<div>
			<h1>Search</h1>

			<form onSubmit={(event) => searchAPI(event)}>
				<input
					type="text"
					value={searchBarText}
					onChange={(event) => setSearchBarText(event?.target.value)}
				/>
			</form>

			{searchResults}
		</div>
	);
};

export default SearchForm;
