import type { NextPage } from "next";
import Image from "next/image";
import Projects from "../components/Projects";
import Blogs from "../components/Blogs";
import pfp from "../components/imgs/introPfp.png";
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
			<div className="intro">
				<div className="introText">
					<Image
						className="introPfp"
						height={350}
						width={350}
						src={pfp}
						alt="pfp"
					/>
					<h1>Lukáš Odehnal</h1>
					<p className="akaDivear">
						aka <i>divear</i>
					</p>
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
