import Image from "next/image";
import React from "react";
import map from "../../components/imgs/projects/morava/morava1.png";
import Meta from "../../components/Meta";

function Morava() {
	return (
		<div className="content">
			<Meta title="morava.lol" />
			<h1 className="center">the story of Moravia test</h1>
			<Image
				width={800}
				height={450}
				className="floatRight mapImg"
				src={map}
				alt="map image"
			/>
			<article>
				<a rel="noreferrer" href="https://morava.netlify.app/">
					visit the site here
				</a>
				<h1>How was it created?</h1>
				<p>
					I watched a Tom Scott video about his North-o-meter, that
					inspired me to make the Czech version with our own Czech stereotypes.


				</p>
				<p>

					Update 21.8. 2023:
					The domain has expired and I am not renewing it, use the netlify one.
				</p>
			</article>
		</div>
	);
}

export default Morava;
