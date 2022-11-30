import {
	Card,
	Grid,
	Row,
	Text,
} from "@nextui-org/react";
import { useRouter } from "next/router";
import { SmallPokemon } from "../../interfaces";
/* interface Props{
    pokemon:SmallPokemon
} */

const PokemonCard = ({
	id,
	image,
	name,
}: SmallPokemon) => {
	const router = useRouter();
	const handleClick = () => {
		router.push(`/name/${name}`);
	};

	return (
		<Grid
			xs={6}
			sm={3}
			md={2}
			xl={1}
			onClick={handleClick}
		>
			<Card isHoverable isPressable>
				<Card.Body css={{ padding: 1 }}>
					<Card.Image
						src={image}
						alt={name}
						width="100%"
						height={140}
					/>
				</Card.Body>
				<Card.Footer>
					<Row justify="space-between">
						<Text transform="capitalize">{name}</Text>
						<Text># {id}</Text>
					</Row>
				</Card.Footer>
			</Card>
		</Grid>
	);
};
export default PokemonCard;
