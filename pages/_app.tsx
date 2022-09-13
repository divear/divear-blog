import "../styles/globals.css";
import type { AppProps } from "next/app";
import Nav from "./components/Nav";
import Meta from "./components/Meta";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Nav />
			<Component {...pageProps} className="content" />
		</>
	);
}

export default MyApp;
