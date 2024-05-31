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

			<meta name="author" content="divear" />
			<meta
				content="divear.me - Lukáš Odehnal"
				property="og:title"
			/>
			<meta content="https://divear.me" property="og:url" />
			<meta
				content="https://divear.me/_ipx/w_1920,q_75/%2F_next%2Fstatic%2Fmedia%2FfooterImg.61029571.png?url=%2F_next%2Fstatic%2Fmedia%2FfooterImg.61029571.png&w=1920&q=75"
				property="og:image"
			/>
			<meta property="og:type" content="website" />
			<meta
				content="Divear's personal site"
				property="og:description"
			/>{" "}
			<meta
				content="#0a647c"
				data-react-helmet="true"
				name="theme-color"
			/>
			<meta
				content="#0a647c"
				data-react-helmet="true"
				name="theme_color"
			/>
			<meta
				content="#022129"
				data-react-helmet="true"
				name="background_color"
			/>

			{/* twitter */}
			<meta name="twitter:card" content="summary_large_image"></meta>
			<meta name="twitter:title" content="Divear's personal site" />
			<meta
				name="twitter:description"
				content="Divear's personal site"
			/>
			<meta name="twitter:creator" content="@divear0" />
			<meta
				name="twitter:image"
				content="https://divear.me/_ipx/w_1920,q_75/%2F_next%2Fstatic%2Fmedia%2FfooterImg.61029571.png?url=%2F_next%2Fstatic%2Fmedia%2FfooterImg.61029571.png&w=1920&q=75"
			/>
			<meta name="twitter:domain" content="https://divear.me/" />


		</Head>
	);
}

Meta.defaultProps = {
	title: "divear",
	keywords:
		"personal, site, divear, person, diver, diveaar, diveár, czech, morava, czechia, eu,europe,, evropa, lukas, odehnal, Lukáš Odehnal, Odehnal, armenska, lukas divear, lukasode, lukas.ode, divear.me, divearme, lukasod, odehlu, purkynka, brno, ",
	description: "Hi, I'm divear and I make websites.",
};

export default Meta;
