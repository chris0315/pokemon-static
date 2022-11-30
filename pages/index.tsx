import {
	Card,
	Grid,
	Row,
	Text,
} from "@nextui-org/react";
import { GetStaticProps, NextPage } from "next";
import { pokeApi } from "../api";
import { Layout } from "../components/layouts";
import { PokemonCard } from "../components/pokemon";

import {
	PokemonType,
	SmallPokemon,
} from "../interfaces";

interface Props {
	pokemon: SmallPokemon[];
}

const Home: NextPage<Props> = ({ pokemon }) => {
	return (
		<>
			<Layout title="listado de pokemon">
				<Grid.Container gap={2} justify="flex-start">
					{pokemon?.map(({ id, name, image, url }) => (
						<PokemonCard
							key={id}
							id={id}
							image={image}
							name={name}
							url={url}
						/>
					))}
				</Grid.Container>
			</Layout>
		</>
	);
};
export default Home;
// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.

export const getStaticProps: GetStaticProps = async (
	ctx
) => {
	const data: PokemonType = await pokeApi(
		"/pokemon?limit=151"
	);
	const pokemon: SmallPokemon[] = data.results.map(
		(p, i) => ({
			...p,
			id: i + 1,
			image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
				i + 1
			}.svg`,
		})
	);

	return {
		props: {
			pokemon,
		},
	};
};
