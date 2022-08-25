import type { NextPage } from "next";
import Image from "next/image";
import Projects from "./components/Projects";
import Blogs from "./components/Blogs";
import foot from "./components/imgs/footerImg.png";

const Home: NextPage = () => {
	return (
		<div>
			<h1 className="center">Hi, I'm divear</h1>
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
				<div className="blackboxNav"> </div>
			</div>
		</div>
	);
};

export default Home;
