import React, { useState, useEffect } from "react";
import Image from "next/image";
import morava from "./imgs/projects/morava/morava0.png";
import morava1 from "./imgs/projects/morava/morava1.png";
import morava2 from "./imgs/projects/morava/morava2.png";
import malo from "./imgs/projects/malo/malo0.png";
import malo1 from "./imgs/projects/malo/malo1.png";
import malo2 from "./imgs/projects/malo/malo2.png";
import projects from "../projects.json";
// ^ this is hell

const imgs = [
	[morava, morava1, morava2],
	[malo, malo1, malo2],
];

function Projects() {
	const [imgIndex, setImgIndex] = useState(0);
	const [lang, setLang] = useState(false);
	const shortProjects = [projects[+lang][0], projects[+lang][1]];

	useEffect(() => {
		setLang(localStorage.getItem("language") === "EN" ? false : true);
	}, []);

	useEffect(() => {
		setTimeout(() => {
			if (imgIndex === 2) {
				setImgIndex(0);
				return;
			}
			setImgIndex(imgIndex + 1);
		}, 8000);
	}, [imgIndex]);

	return (
		<div className="content">
			<div className="projects">
				<h1
					onClick={() => (location.href = "projects")}
					className="recentBlogsHeader center headerText"
				>
					{+lang ? "Moje projekty" : "My projects"}
					<br />
				</h1>
				{shortProjects.map((e, i) => {
					return (
						<div
							key={i}
							className="project"
							onClick={() => open(e.link)}
						>
							<Image
								className="showoffImage"
								width={480}
								height={270}
								src={imgs[i][imgIndex] && imgs[i][imgIndex]}
							/>
							<br />
							<div className="smallProjectDesc">
								<a
									rel="noreferrer"
									className="blogLink"
									href={e.link}
									target="_blank"
								>
									{e.name}
								</a>
								<h5>{e.desc}</h5>
							</div>
						</div>
					);
				})}
			</div>

			<br />
		</div>
	);
}

export default Projects;
