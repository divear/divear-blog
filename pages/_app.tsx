import "../styles/globals.css";
import type { AppProps } from "next/app";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Nav />
			<Component {...pageProps} className="content" />
			<Footer />
		</>
	);
}

export default MyApp;
