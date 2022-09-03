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
// ^ this is hell
const imgs = [
	[morava, morava1, morava2],
	[drby, drby1, drby2],
	[malo, malo1, malo2],
	[chalky, chalky1, chalky2],
];

function Projects() {
	const [imgIndex, setImgIndex] = useState(0);

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
		<div className="bigProjects content">
			{/* <h1 className="center headerText">My projects</h1> */}

			{projects.map((e, i) => {
				return (
					<div className="bigProject" onClick={() => open(e.link)}>
						<Image
							className="showoffBigImage"
							width={960}
							height={540}
							src={imgs[i][imgIndex]}
						/>
						<div className="desc">
							<h3 className="projectLink">{e.name}</h3>
							<h5>{e.desc}</h5>
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default Projects;
