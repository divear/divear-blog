import React from "react";

import github from "./components/imgs/socmedia/github.png";
import insta from "./components/imgs/socmedia/insta.png";
import twitter from "./components/imgs/socmedia/twitter.png";
import youtube from "./components/imgs/socmedia/youtube.png";
import Image from "next/image";

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
			<div className="socials">
				<button
					onClick={() =>
						open("https://github.com/lukascobit", "_blank")
					}
					className="social"
				>
					{" "}
					<Image width={50} height={50} src={github}></Image>
				</button>
				<button
					onClick={() =>
						open("https://www.instagram.com/lukas.ode/", "_blank")
					}
					className="social"
				>
					{" "}
					<Image width={50} height={50} src={insta}></Image>
				</button>
				<button
					onClick={() =>
						open("https://twitter.com/divear0", "_blank")
					}
					className="social"
				>
					{" "}
					<Image width={50} height={50} src={twitter}></Image>
				</button>
				<button
					onClick={() =>
						open(
							"https://www.youtube.com/channel/UCwWXZqqwhdVq50W3vZ4aDSg",
							"_blank"
						)
					}
					className="social"
				>
					{" "}
					<Image width={50} height={50} src={youtube}></Image>
				</button>
			</div>
		</div>
	);
}

export default Aboutme;
