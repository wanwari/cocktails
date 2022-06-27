const DisplayResults = ({ drinks }: any) => {
	const result =
		drinks.drinks !== null ? (
			<ul>
				{drinks.drinks.map((drink: any, i: number) => {
					return (
						<li key={drink.idDrink}>
							<img
								src={drink.strDrinkThumb}
								className="w-20 rounded-full"
								alt={drink.strDrink}
							/>
							{drink.strDrink}
						</li>
					);
				})}
			</ul>
		) : null;

	return <div>{result}</div>;
};

export default DisplayResults;
