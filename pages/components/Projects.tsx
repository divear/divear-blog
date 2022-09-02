import React, { useState, useEffect } from "react";
import Image from "next/image";
import morava from "./imgs/projects/morava/morava0.png";
import morava1 from "./imgs/projects/morava/morava1.png";
import morava2 from "./imgs/projects/morava/morava2.png";
import malo from "./imgs/projects/malo/malo0.png";
import malo1 from "./imgs/projects/malo/malo1.png";
import malo2 from "./imgs/projects/malo/malo2.png";
// ^ this is hell

const mor = [morava, morava1, morava2];
const mal = [malo, malo1, malo2];

function Projects() {
	const [imgIndex, setImgIndex] = useState(0);
	const [isOver, setIsOver] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			console.log(imgIndex);

			if (imgIndex === 2) {
				console.log("last");

				setImgIndex(0);
				return;
			}
			setImgIndex(imgIndex + 1);
		}, 8000);
	}, [imgIndex]);

	return (
		<div
			onMouseEnter={() => setIsOver(true)}
			onMouseLeave={() => setIsOver(false)}
			className="projects"
		>
			<h1 className="center headerText">My projects</h1>
			<div
				className="project"
				onClick={() => open("https://morava.lol/")}
			>
				<Image
					className="showoffImage"
					width={480}
					height={270}
					src={mor[imgIndex]}
				/>
				<br />
				<a
					className="projectLink"
					href="https://morava.lol/"
					target="_blank"
				>
					Morava test
				</a>
				<h5>Zjisti, jak moc jsi moravák.</h5>
			</div>
			<br />
			<div
				className="project"
				onClick={() => open("https://malovani.netlify.app/")}
			>
				<Image
					className="showoffImage"
					width={480}
					height={270}
					src={mal[imgIndex]}
				/>
				<br />
				<a
					className="projectLink"
					href="https://malovani.netlify.app/"
					target="_blank"
				>
					Malo🖍
				</a>
				<h5>Sociální síť na posílání namalovaných obrázků.</h5>
			</div>

			<br />
			<button onClick={() => (location.href = "/projects")}>
				See more projects
			</button>
		</div>
	);
}

export default Projects;
