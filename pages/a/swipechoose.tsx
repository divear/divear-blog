import React from "react";
import Meta from "../../components/Meta";
import Image from "next/image";
import swipechooseImg from "../../components/imgs/projects/swipechoose/swipechoose0.png";

function Swipechoose() {
	return (
		<div className="content swipechoose">
			<Meta title="Swipechoose" />
			<h1>Swipechoose: Do likes even matter?</h1>
			<p>
				In the world of social media, likes have become a ubiquitous
				part of our online experience. But let&#39;s be real, do they
				truly hold any meaningful value?
			</p>
			<Image
				width={450}
				height={250}
				className="floatRight"
				src={swipechooseImg}
				alt="Swipechoose img"
			/>
			<br />
			<p>
				A site I made that doesn't use likes.
			</p>
			<h1>
				You can find the site here:
				<a href="https://swipechoose.netlify.app/"> Swipechoose</a>
			</h1>
		</div>
	);
}

export default Swipechoose;
