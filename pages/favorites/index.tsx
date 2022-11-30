import {
	Card,
	Container,
	Grid,
	Image,
	Text,
} from "@nextui-org/react";
import { NextPage } from "next";
import router from "next/router";
import { useEffect, useState } from "react";
import { Layout } from "../../components/layouts";
import {
	FavoritePokemon,
	NotFavorite,
} from "../../components/ui";
import { localFovorite } from "../../util";

const FavoritePage: NextPage = () => {
	const [pokemonFavorites, setPokemonFavorites] =
		useState<number[]>([]);

	useEffect(() => {
		setPokemonFavorites(localFovorite.pokemons);
	}, []);

	return (
		<Layout title="Favorite">
			{pokemonFavorites.length === 0 ? (
				<NotFavorite />
			) : (
				<FavoritePokemon pokemon={pokemonFavorites} />
			)}
		</Layout>
	);
};

export default FavoritePage;
