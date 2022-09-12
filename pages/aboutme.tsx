import React from "react";

import github from "./components/imgs/socmedia/github.png";
import insta from "./components/imgs/socmedia/insta.png";
import twitter from "./components/imgs/socmedia/twitter.png";
import youtube from "./components/imgs/socmedia/youtube.png";
import Image from "next/image";

const socials = [
	[github, "https://github.com/lukascobit", "@lukascobit"],
	[insta, "https://www.instagram.com/lukas.ode/", "lukasode"],
	[twitter, "https://twitter.com/divear0", "divear0"],
	[
		youtube,
		"https://www.youtube.com/channel/UCwWXZqqwhdVq50W3vZ4aDSg",
		"divear",
	],
];

function Aboutme() {
	return (
		<div className="content">
			<div className="headerText center">About me</div>
			<article>
				<p>I'm divear but you may also know me as:</p>
				<ul>
					<li>lukascobit</li>
					<li>lukas_getout</li>
					<li>divear0</li>
				</ul>
			</article>
			<h1 className="headerText">Find me here</h1>
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
		</div>
	);
}

export default Aboutme;
