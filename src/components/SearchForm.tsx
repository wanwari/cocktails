import { useState } from "react";

const SearchForm = () => {
	const [searchBarText, setSearchBarText] = useState("");

	const searchAPI = async (event: any) => {
		if (event) event.preventDefault();

		fetch(
			"https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" +
				searchBarText
		)
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
			});
	};

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
		</div>
	);
};

export default SearchForm;
