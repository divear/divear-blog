import type { NextPage } from "next";

import Image from "next/image";
import Projects from "../components/Projects";
import Blogs from "../components/Blogs";
import pfp from "../components/imgs/introPfp.png";
import { FaAnglesDown } from "react-icons/fa6";
import Meta from "../components/Meta"; 
import github from "../components/imgs/socmedia/github.png";
import twitter from "../components/imgs/socmedia/twitter.png";
import youtube from "../components/imgs/socmedia/youtube.png";
import instagram from "../components/imgs/socmedia/insta.png";
import fiverr from "../components/imgs/socmedia/fiverr.png";
import { useEffect, useState, useRef } from "react";

const socials = [
	[github, "https://github.com/divear", "divear"],
	[twitter, "https://twitter.com/divear0", "divear0"],
	[instagram, "http://instagram.com/_u/lukas.ode/", "lukas.ode"],
	[
		youtube,
		"https://www.youtube.com/channel/UCwWXZqqwhdVq50W3vZ4aDSg",
		"divear",
	],
];
const DownIcon = FaAnglesDown as unknown as React.FC;

const Home: NextPage = () => {
	const [lang, setLang] = useState(false);
  const projectsRef = useRef(null);
  const scrollToElement = () => {
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
						height={250}
						width={250}
						src={pfp}
						alt="pfp"
					/>
					<h1>Lukáš Odehnal</h1>
					<p className="akaDivear">
						alias <i>divear</i>
					</p>
					<button onClick={() => (location.href = "/projects")}>
						{+lang
							? "Podívej se na moje projekty"
							: "See my projects "}
					</button>
					<div className="bigSocials">
						{socials.map((s, i) => {
							return (
								<button
									title={s[2].toString()}
									key={i}
									onClick={() =>
										open(s[1].toString(), "_blank")
									}
									className="bigSocial"
								>
									<Image
										width={100}
										height={100}
										src={s[0]}
										alt="social media icon"
									></Image>
								</button>
							);
						})}
					</div>
				</div>
			</div>
			<br />
        <button className="downbutton" onClick={scrollToElement}>
          <DownIcon/>
        </button>
      <div ref={projectsRef} >
        <Projects />
      </div>
			<Blogs />
		</div>
	);
};

export default Home;
