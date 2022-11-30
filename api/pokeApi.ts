import axios from "axios";

const pokeApi = async (url: string) => {
	const res = await fetch(
		`https://pokeapi.co/api/v2${url}`
	);
	return await res.json();
};

export default pokeApi;
