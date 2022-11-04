import React, { useState, useEffect } from "react";
import Image from "next/image";
import morava from "./components/imgs/projects/morava/morava0.png";
import morava1 from "./components/imgs/projects/morava/morava1.png";
import morava2 from "./components/imgs/projects/morava/morava2.png";
import drby from "./components/imgs/projects/drby/drby0.png";
import drby1 from "./components/imgs/projects/drby/drby1.png";
import drby2 from "./components/imgs/projects/drby/drby2.png";
import malo from "./components/imgs/projects/malo/malo0.png";
import malo1 from "./components/imgs/projects/malo/malo1.png";
import malo2 from "./components/imgs/projects/malo/malo2.png";
import chalky from "./components/imgs/projects/chalky/chalky0.png";
import chalky1 from "./components/imgs/projects/chalky/chalky1.png";
import chalky2 from "./components/imgs/projects/chalky/chalky2.png";
import projects from "./projects.json";
import Meta from "./components/Meta";

const imgs = [
	[morava, morava1, morava2],
	[chalky, chalky1, chalky2],
	[malo, malo1, malo2],
	[drby, drby1, drby2],
];

function Projects() {
	const [imgIndex, setImgIndex] = useState(0);
	const [lang, setLang] = useState(false);
	const [isPhone, setIsPhone] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			if (imgIndex === 2) {
				setImgIndex(0);
				return;
			}
			setImgIndex(imgIndex + 1);
		}, 9000);
		setLang(localStorage.getItem("language") === "EN" ? false : true);
		setIsPhone(window.innerWidth < 830);
	}, []);

	return (
		<div className="bigProjects content">
			<h1 className="center headerText">
				{+lang
					? "Zajímavé věci, které jsem za ta léta vytvořil..."
					: "Interesting things I've created over the years..."}
			</h1>

			{projects[+lang].map((e, i) => {
				return (
					<div key={i} className="bigProject">
						<Meta title="My projects" />
						<button
							onClick={() =>
								imgIndex != 0
									? setImgIndex(imgIndex - 1)
									: setImgIndex(2)
							}
							className="scrolls scrollLeft"
						>
							&lt;
						</button>
						<Image
							onClick={() => open(e.link)}
							className="showoffBigImage"
							width={isPhone ? 1440 : 960}
							height={isPhone ? 810 : 540}
							src={imgs[i][imgIndex]}
						/>
						<button
							onClick={() =>
								imgIndex != 2
									? setImgIndex(imgIndex + 1)
									: setImgIndex(0)
							}
							className="scrolls scrollRight"
						>
							&gt;
						</button>
						<div className="desc projectDesc">
							<h3
								onClick={() => open(e.link)}
								className="projectLink"
							>
								{e.name}
							</h3>
							<h5>{e.desc}</h5>
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default Projects;
