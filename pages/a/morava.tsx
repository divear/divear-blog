import Image from "next/image";
import React from "react";
import map from "../../components/imgs/projects/morava/morava1.png";
import Meta from "../../components/Meta";

function Morava() {
	return (
		<div className="content">
			<Meta title="morava.lol" />
			<h1 className="center">the story of morava.lol</h1>
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
					I watched a Tom Scott video and his north-o-meter, that
					inspired me to this idea... ok, i might have copied his
					exact idea and &quot;czeched&quot; it but that&apos;s
					besides the point.

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
