import type { NextPage } from "next";
import Image from "next/image";
import Projects from "../components/Projects";
import Blogs from "../components/Blogs";
import pfp from "./components/imgs/introPfp.png";
import Meta from "../components/Meta";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
	const [lang, setLang] = useState(false);

	useEffect(() => {
		setLang(localStorage.getItem("language") === "EN" ? false : true);
	}, []);
	return (
		<div>
			<Meta title="divear" />
			<a className="tempDiscord" href="https://discord.gg/xtnDXMxX9">
				Klikni sem pro třídní discord
			</a>
			<button
				onClick={() => {
					navigator.clipboard.writeText(
						"https://discord.gg/xtnDXMxX9"
					);
					alert("Link zkopírován");
				}}
				className="tempDiscord2"
			>
				Klikni sem pro zkopírování linku
			</button>
			<div className="intro">
				<div className="introText">
					<h1>{+lang ? "Čau, já jsem diveár" : " Hi, I'm divear"}</h1>
					<button onClick={() => (location.href = "/projects")}>
						{+lang
							? "Podívej na moje projekty👨‍💻"
							: "See my projects 👨‍💻"}
					</button>
				</div>
			</div>
			<br />
			<Projects />
			<Blogs />
		</div>
	);
};

export default Home;
