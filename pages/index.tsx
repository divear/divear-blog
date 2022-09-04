import type { NextPage } from "next";
import Image from "next/image";
import Projects from "./components/Projects";
import Blogs from "./components/Blogs";
import foot from "./components/imgs/footerImg.png";
import pfp from "./components/imgs/introPfp.png";

const Home: NextPage = () => {
	return (
		<div>
			<div className="intro">
				<Image
					className="bigImgIntro"
					width={400}
					height={400}
					src={pfp}
					alt="introPfp"
				/>
				<div className="introText">
					<h1> Hi, I'm divear</h1>
					<a href="/projects">My projects</a>
					<a href="/blogs">Blogs</a>
					<a href="/aboutme">About me</a>
				</div>
			</div>
			<br />
			<Projects />
			<Blogs />
			<Image draggable={false} className="footerImg" src={foot} />
			<div className="footerPar">
				<div
					onClick={() =>
						open("https://lukas-getout.itch.io/sewer-run")
					}
					className="player"
				>
					{" "}
				</div>
				<div className="blackboxNav">
					<h3>divear 2022</h3>
				</div>
			</div>
		</div>
	);
};

export default Home;
