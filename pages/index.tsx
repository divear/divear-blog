import type { NextPage } from "next";
import Nav from "./components/Nav";

const Home: NextPage = () => {
	return (
		<div className="content">
			<h2>Recent blogs</h2>
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
					<a href="/">Lorem ipsum</a>
					<h5>dolor sit amet</h5>
				</li>
				<li>
					<a href="/">Lorem ipsum</a>
					<h5>dolor sit amet</h5>
				</li>
				<li>
					<a href="/">Lorem ipsum</a>
					<h5>dolor sit amet</h5>
				</li>
			</ul>
		</div>
	);
};

export default Home;
