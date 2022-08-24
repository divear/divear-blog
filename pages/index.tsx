import type { NextPage } from "next";

const Home: NextPage = () => {
	return (
		<div>
			<h1 className="center">Hi, I'm divear</h1>
			<br />
			<div className="projects">
				<h1 className="center headerText">My projects</h1>
				<ul>
					<li>
						<a href="https://morava.lol/" target="_blank">
							Morava test
						</a>
						<h5>Zjisti, jak moc jsi moravák</h5>
					</li>
				</ul>
			</div>
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
		</div>
	);
};

export default Home;
