import { pokeApi } from "../api";
import {
	PokemonTypeDetail,
	PokeType,
} from "../interfaces";

export const getPokemonInfo = async (
	nameOrId: string
) => {
	const pokemon: PokemonTypeDetail = await pokeApi(
		`/pokemon/${nameOrId}`
	);

	return {
		id: pokemon.id,
		name: pokemon.name,
		sprites: pokemon.sprites,
		types: pokemon.types,
	};
};
