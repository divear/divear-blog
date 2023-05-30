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
				content="Divear - personal site"
				property="og:title"
			/>
			<meta content="https://divear.me" property="og:url" />
			<meta
				content="https://divear.me/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FfooterImg.d6b99548.png&w=3840&q=75"
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
				content="https://morava.lol/_next/static/media/mapa3.ca826749.jpg"
			/>
			<meta name="twitter:domain" content="https://divear.me/" />


		</Head>
	);
}

Meta.defaultProps = {
	title: "divear",
	keywords:
		"personal,site,divear,person,diver,diveaar,diveár,czech,morava,czechia,eu,europe,evropa, lukas, odehnal, Lukáš Odehnal, Odehnal, armenda, armenska, lukas divear, divearus, lukasus, lukasode, lukas.ode, divear.me, divearme, lukasdivear, odehnaldivear, odehnalik, odelukas, odehnall, odeluk, lukasod, odehlu, person, armenska, purkynka, lukaspurkynka, purkynak, purkynacka, czechboy, brno, mesto, komín, lukasek, lukyn, odehnalll, vodehnal, Lukáš Odehnal,Odehnal, Lukáš",
	description: "Hi, I'm divear and I make websites.",
};

export default Meta;
