import { Grid, Card } from "@nextui-org/react";
import router from "next/router";
import React from "react";
import { FavoriteCardPokemon } from "./FavoriteCardPokemon";

interface Props {
	pokemon: number[];
}

export const FavoritePokemon = ({
	pokemon,
}: Props) => {
	const handleClick = (id: number) => {
		router.push(`/pokemon/${id}`);
	};
	return (
		<Grid.Container
			gap={2}
			direction="row"
			justify="flex-start"
		>
			{pokemon.map((id) => (
				<FavoriteCardPokemon
					key={id}
					handleClick={handleClick}
					pokeId={id}
				/>
			))}
		</Grid.Container>
	);
};
