import {
	Link,
	Spacer,
	Text,
	useTheme,
} from "@nextui-org/react";
import Image from "next/image";
import NextLink from "next/link";
import React from "react";

export const Navbar = () => {
	const { theme } = useTheme();
	return (
		<div
			style={{
				display: "flex",
				width: "100%",
				flexDirection: "row",
				alignItems: "center",
				justifyContent: "start",
				padding: "0px 30px",
				background: theme?.colors.gray300.value,
			}}
		>
			<Image
				src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
				alt="icono de pokemon"
				width={70}
				height={70}
			/>
			<NextLink href="/" passHref legacyBehavior>
				<Link>
					<Text color="white" h2>
						<Text
							color="white"
							span
							size={45}
							transform="capitalize"
						>
							p
						</Text>
						okemon
					</Text>
				</Link>
			</NextLink>
			<Spacer css={{ flex: 1 }} />
			<NextLink
				href="/favorites"
				passHref
				legacyBehavior
			>
				<Link>
					<Text color="white" h3>
						favorito
					</Text>
				</Link>
			</NextLink>
		</div>
	);
};
