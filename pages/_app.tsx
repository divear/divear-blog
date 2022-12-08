import "../styles/globals.css";
import type { AppProps } from "next/app";
import * as gtag from "../lib/gtag";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
// import { getAnalytics, app, logEvent } from "./components/firebase/firebase";
import { useRouter } from "next/router";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
	const router = useRouter();
	useEffect(() => {
		// const analytics = getAnalytics(app);
		// logEvent(analytics, "opened");
		// const handleRouteChange = (url: string) => {
		// 	gtag.pageview(url);
		// };
		// router.events.on("routeChangeComplete", handleRouteChange);
		// router.events.on("hashChangeComplete", handleRouteChange);
		// return () => {
		// 	router.events.off("routeChangeComplete", handleRouteChange);
		// 	router.events.off("hashChangeComplete", handleRouteChange);
		// };
	}, [router.events]);

	return (
		<>
			<Nav />
			<Component {...pageProps} className="content" />
			<Footer />
		</>
	);
}

export default MyApp;
