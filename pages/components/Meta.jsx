import React from "react";
import Head from "next/head";

function Meta({ title, keywords, description }) {
	return (
		<Head>
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1"
			/>
			<meta name="keywords" content={keywords} />
			<meta name="description" content={description} />
			<meta charSet="utf-8" />
			<link rel="icon" href="/favicon.ico" />
			<title>{title}</title>
		</Head>
	);
}

Meta.defaultProps = {
	title: "divear",
	keywords:
		"personal, site, odehnal, lukas, lukáš, divear, person, lukas odehnal, ode, ",
	description: "Hi, I'm Lukas and I make websites.",
};

export default Meta;
