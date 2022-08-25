import type { NextPage } from "next";
import Image from "next/image";
import Projects from "./components/Projects";
import foot from "./components/imgs/footerImg.png";

const Home: NextPage = () => {
	return (
		<div>
			<h1 className="center">Hi, I'm divear</h1>
			<br />
			<Projects />
			<div className="blogs">
				<h1 className="center headerText">Recent blogs</h1>
				<div className="center">
					<ul>
						<li>
							<a href="/a/morava">My new site: morava.lol</a>
							<h5>Find out how much of a moravian you are</h5>
						</li>
						<li>
							<a href="/a/is-linux-that-hard">
								Is linux that hard?
							</a>
							<h5>not really</h5>
						</li>
					</ul>
				</div>
			</div>
			<div
				onClick={() => open("https://lukas-getout.itch.io/sewer-run")}
				className="player"
			>
				{" "}
			</div>
			<Image className="footerImg" src={foot} />
		</div>
	);
};

export default Home;
