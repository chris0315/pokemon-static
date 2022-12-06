import {
	Button,
	Card,
	Container,
	Grid,
	Image,
	Text,
} from "@nextui-org/react";
import {
	GetStaticPaths,
	GetStaticProps,
	NextPage,
} from "next";
import { useState } from "react";

import canvasConfetti from "canvas-confetti";

import { pokeApi } from "../../api";
import { Layout } from "../../components/layouts";
import {
	PokemonType,
	PokemonTypeDetail,
	PokeType,
	SmallPokemon,
} from "../../interfaces";
import {
	getPokemonInfo,
	localFovorite,
	typePokemom,
} from "../../util";

interface Props {
	pokemon: PokemonTypeDetail;
}
const PokemonPage: NextPage<Props> = ({ pokemon }) => {
	const [isInFavorite, setIsInFavorite] = useState(
		localFovorite.existInFavorites(pokemon.id)
	);

	let color = typePokemom.find(
		(tipo) => tipo.name === pokemon.types[0].type.name
	);

	const onToggleFavorite = () => {
		localFovorite.toggleFavorite(pokemon.id);
		setIsInFavorite(!isInFavorite);
		if (!isInFavorite) {
			canvasConfetti({
				zIndex: 999,
				particleCount: 100,
				spread: 160,
				angle: -100,
				origin: {
					x: 1,
					y: 0,
				},
			});
		}
	};
	return (
		<Layout title={` ${pokemon.name}`}>
			<Grid.Container
				css={{
					marginTop: "5px",
				}}
				gap={2}
			>
				<Grid xs={12} sm={4}>
					<Card
						isHoverable
						css={{
							padding: "30px",
							backgroundColor: color?.color,
						}}
					>
						<Card.Body>
							<Card.Image
								src={
									pokemon.sprites?.other?.dream_world
										.front_default || "/not-image.png"
								}
								alt={pokemon.name}
								width="100%"
								height={200}
							/>
						</Card.Body>
					</Card>
				</Grid>
				<Grid xs={12} sm={8}>
					<Card>
						<Card.Header
							css={{
								display: "flex",
								justifyContent: "space-between",
							}}
						>
							<Text
								transform="capitalize"
								color={color?.color}
								h1
							>
								{pokemon.name}
							</Text>
							<Button
								color="gradient"
								ghost
								onPress={() => onToggleFavorite()}
							>
								{isInFavorite
									? "eliminar de favorito"
									: "guardar en favorito"}
							</Button>
						</Card.Header>
						<Card.Body>
							<Text size={30}>sprites:</Text>
							<Container
								display="flex"
								direction="row"
							>
								<Image
									src={pokemon.sprites.front_default}
									alt={pokemon.name}
									width={100}
									height={100}
								/>
								<Image
									src={pokemon.sprites.back_default}
									alt={pokemon.name}
									width={100}
									height={100}
								/>
								<Image
									src={pokemon.sprites.front_shiny}
									alt={pokemon.name}
									width={100}
									height={100}
								/>
								<Image
									src={pokemon.sprites.back_shiny}
									alt={pokemon.name}
									width={100}
									height={100}
								/>
							</Container>
						</Card.Body>
					</Card>
				</Grid>
			</Grid.Container>
		</Layout>
	);
};

export default PokemonPage;

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes

export const getStaticPaths: GetStaticPaths = async (
	ctx
) => {
	//const { data } = await  // your fetch function here
	const pokemon151 = [...new Array(151)].map(
		(v, i) => `${i + 1}`
	);
	return {
		paths: pokemon151.map((id) => ({
			params: {
				id,
			},
		})),
		fallback: "blocking",
	};
};

export const getStaticProps: GetStaticProps = async ({
	params,
}) => {
	const { id } = params as { id: string };

	const pokeData = await getPokemonInfo(id);

	if (!pokeData) {
		return {
			redirect: {
				destination: "/",
				permanent: false,
			},
		};
	}
	return {
		props: {
			pokemon: pokeData,
		},
		revalidate: 86400,
	};
};
