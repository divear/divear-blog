import React from "react";
import Image from "next/image";
import morava from "./imgs/projects/morava/morava0.png";
import drby from "./imgs/projects/drby/drby0.png";
import malo from "./imgs/projects/malo/malo0.png";
import chalky from "./imgs/projects/chalky/chalky0.png";
import chalky1 from "./imgs/projects/chalky/chalky1.png";
import chalky2 from "./imgs/projects/chalky/chalky2.png";

function Projects() {
	function changeImgs() {
		console.log("change the image here");
	}
	return (
		<div className="projects">
			<h1 className="center headerText">My projects</h1>
			<div
				className="project"
				onClick={() => open("https://morava.lol/")}
			>
				<Image
					className="showoffImage"
					width={480}
					height={270}
					src={morava}
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
				onClick={() => open("https://drby.netlify.app/")}
			>
				<Image
					className="showoffImage"
					width={480}
					height={270}
					src={drby}
				/>
				<br />
				<a
					className="projectLink"
					href="https://drby.netlify.app/"
					target="_blank"
				>
					Drby z Bohunic
				</a>
				<h5>Posílejte drby z Bohunic.</h5>
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
					src={malo}
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
			<div
				onMouseOver={changeImgs}
				className="project"
				onClick={() => open("https://chalky.netlify.app/")}
			>
				<Image
					className="showoffImage"
					width={480}
					height={270}
					src={chalky}
				/>
				<br />
				<a
					className="projectLink"
					href="https://chalky.netlify.app/"
					target="_blank"
				>
					Chálky ze školní jídelny
				</a>
				<h5>Posílejte ty nejhnusnější chálky</h5>
			</div>
		</div>
	);
}

export default Projects;
