import Image from "next/image";
import React from "react";
import map from "../../components/imgs/projects/morava/morava1.png";
import Meta from "../../components/Meta";

function Morava() {
	return (
		<div className="content">
			<Meta title="morava.lol" />
			<h1 className="center">Příběh morava.lol</h1>
			<Image
				width={800}
				height={450}
				className="floatRight mapImg"
				src={map}
				alt="map image"
			/>
			<article>
				<a href="https://morava.lol/">Navštiv tu stránku zde</a>
				<h1>Jak to vzniklo?</h1>
				<p>
					Viděl jsem video Toma Scotta o jeho North-o-meteru a rozhodl
					jsem se udělat českou verzi. Pokuď by jste chtěli přidat
					otázku do kvízu, tak můžete{" "}
					<a target="_blank" href="https://morava.lol/nove-otazky">
						tady
					</a>
				</p>
			</article>
		</div>
	);
}

export default Morava;
