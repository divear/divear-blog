import React from "react";
import Meta from "../../components/Meta";
import Image from "next/image";

function Sewer() {
	return (
		<div className="content">
			<Meta title="Sewer run" />
			<Image
				className="floatRight smallImg"
				src="https://firebasestorage.googleapis.com/v0/b/personalsite-f2369.appspot.com/o/img%2FxCH97m.png?alt=media&token=b47eb018-52f5-41ff-8a02-52783404ccfc"
				alt="sewer run screenshot"
			/>

			<h1 className="pfpTitle">How I got my profile picture</h1>
			<article>
				<p>
					Back in the time when I used to make videogames, I made a
					game called &quot;sewer run&quot;. For the main character I
					draw a neat little guy with a gun/walking stick. A while
					later I just made it profile my picture
					<br />
					<a
						rel="noreferrer"
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
