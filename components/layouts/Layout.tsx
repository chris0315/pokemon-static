import Head from "next/head";
import { Navbar } from "../ui";

interface typeLayout {
	children: JSX.Element;
	title?: string;
}
const origin =
	typeof window === "undefined"
		? ""
		: window.location.origin;
export const Layout = ({
	children,
	title = "pokemon app",
}: typeLayout) => {
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta
					name="author"
					content="christhper jose cruz"
				/>
				<meta
					name="description"
					content="informacion sobre pokemones xxxxx"
				/>
				<meta
					name="keywords"
					content="pokemon , pokedex"
				/>
				<meta
					property="og:title"
					content={"informacion del pokemon " + title}
				/>
				<meta
					property="og:description"
					content="paginas de pokemones"
				/>
				<meta
					property="og:image"
					content={`${origin}/public/banner.png`}
				/>
			</Head>
			{/* navar */}
			<Navbar />
			<main
				style={{
					padding: "0px 20px",
				}}
			>
				{children}
			</main>
		</>
	);
};
