import React, { useEffect, useState } from "react";

import github from "./components/imgs/socmedia/github.png";
import twitter from "./components/imgs/socmedia/twitter.png";
import youtube from "./components/imgs/socmedia/youtube.png";
import Image from "next/image";
import Meta from "./components/Meta";

const socials = [
	[github, "https://github.com/lukascobit", "lukascobit"],
	[twitter, "https://twitter.com/divear0", "divear0"],
	[
		youtube,
		"https://www.youtube.com/channel/UCwWXZqqwhdVq50W3vZ4aDSg",
		"divear",
	],
];

function Aboutme() {
	const [lang, setLang] = useState(false);

	useEffect(() => {
		setLang(localStorage.getItem("language") === "EN" ? false : true);
	}, []);
	return (
		<div className="content">
			<Meta title="About me" />
			<div className="headerText center">
				{lang ? "O mně" : "About me"}
			</div>
			<article>
				<p>
					{lang
						? "Já jsem diveár, ale taky mě mužeš znát jako:"
						: "I'm divear but you may also know me as:"}
				</p>
				<ul>
					<li>lukascobit</li>
					<li>lukas_getout</li>
					<li>divear0</li>
				</ul>
			</article>
			<h1 className="headerText">
				{lang ? "Najdeš mě taky tady:" : "Find me here"}
			</h1>
			<div className="socials">
				{socials.map((s, i) => {
					return (
						<button
							onClick={() => open(s[1].toString(), "_blank")}
							className="social"
						>
							<Image width={100} height={100} src={s[0]}></Image>
							<h4 className="usernameSpeci">{s[2].toString()}</h4>
						</button>
					);
				})}
			</div>
			<h1 className="headerText">
				{lang
					? "Máš otázku? Zeptej se tady:"
					: "Have a question? Ask here:"}
			</h1>
			<li>
				<a
					className="headerText"
					target="_blank"
					href="https://discord.gg/yv8thy2PKz"
				>
					discord
				</a>
			</li>
		</div>
	);
}

export default Aboutme;
