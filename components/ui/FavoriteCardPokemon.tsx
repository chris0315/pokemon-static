import { Grid, Card } from "@nextui-org/react";
import React from "react";
interface Props {
	pokeId: number;
	handleClick: (id: number) => any;
}
export const FavoriteCardPokemon = ({
	pokeId,
	handleClick,
}: Props) => {
	return (
		<Grid
			xs={6}
			sm={3}
			md={2}
			xl={1}
			onClick={() => handleClick(pokeId)}
		>
			<Card
				isHoverable
				isPressable
				css={{
					padding: 10,
				}}
			>
				<Card.Image
					src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokeId}.svg`}
					width={100}
					height={140}
				/>
			</Card>
		</Grid>
	);
};
