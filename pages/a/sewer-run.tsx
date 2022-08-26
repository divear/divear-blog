import React from "react";
import Meta from "../components/Meta";

function Sewer() {
	return (
		<div className="content">
			<Meta title="Sewer run" />
			<img
				className="floatRight smallImg"
				src="https://img.itch.zone/aW1hZ2UvOTExOTUyLzUxNTU5MjMucG5n/original/xCH97m.png"
				alt="sewer run screenshot"
			/>

			<h1>How I got my profile picture</h1>
			<article>
				<p>
					Back in the time when I used to make videogames, I made a
					game called "sewer run". For the main character I draw a
					neat little guy with a gun/walking stick. A while later I
					just made it profile my picture
					<br />
					<a
						target="_blank"
						href="https://lukas-getout.itch.io/sewer-run"
					>
						You can play the game here.
					</a>
				</p>
			</article>
		</div>
	);
}

export default Sewer;
