const toggleFavorite = (id: number) => {
	console.log("llamada de favorito");
	let favorites: number[] = JSON.parse(
		localStorage.getItem("favorites") || "[]"
	);

	if (favorites.includes(id)) {
		favorites = favorites.filter(
			(pokeId) => pokeId !== id
		);
	} else {
		favorites = [...favorites, id];
		console.log(favorites);
	}

	localStorage.setItem(
		"favorites",
		JSON.stringify(favorites)
	);
};
const existInFavorites = (id: number) => {
	if (typeof window === "undefined") return false;
	const favorites: number[] = JSON.parse(
		localStorage.getItem("favorites") || "[]"
	);
	return favorites.includes(id);
};
const pokemons = (): number[] => {
	return JSON.parse(
		localStorage.getItem("favorites") || "[]"
	);
};
// eslint-disable-next-line import/no-anonymous-default-export
export default {
	toggleFavorite,
	existInFavorites,
	pokemons,
};
