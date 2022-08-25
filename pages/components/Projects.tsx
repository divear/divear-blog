import React from "react";
import Image from "next/image";
import map from "./imgs/morava_screen.png";
import drby from "./imgs/drby_screen.png";
import malo from "./imgs/malo_screen.png";

function Projects() {
	return (
		<div className="projects">
			<h1 className="center headerText">My projects</h1>
			<ul>
				<li
					className="project"
					onClick={() => open("https://morava.lol/")}
				>
					<Image
						className="showoffImage"
						width={480}
						height={270}
						src={map}
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
				</li>
				<br />
				<li
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
				</li>
				<br />
				<li
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
				</li>
			</ul>
		</div>
	);
}

export default Projects;
