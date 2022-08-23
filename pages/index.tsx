import type { NextPage } from "next";

const Home: NextPage = () => {
	return (
		<div>
			<h1 className="center">Hi, I'm divear</h1>
			<br />
			<div className="blogs">
				<h1 className="center headerText">Recent blogs</h1>
				<div className="center">
					<ul>
						<li>
							<a href="/">Lorem ipsum</a>
							<h5>dolor sit amet</h5>
						</li>
						<li>
							<a href="/">Lorem ipsum</a>
							<h5>dolor sit amet</h5>
						</li>
						<li>
							<a href="/a/domain-names">
								Do domain names matter?
							</a>
							<h5>
								Short domain names are really cool, but do they
								matter that much?
							</h5>
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
