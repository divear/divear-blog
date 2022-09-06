import React from "react";
import Meta from "../../components/Meta";

function Sewer() {
	return (
		<div className="content">
			<Meta title="Sewer run" />
			<img
				className="floatRight smallImg"
				src="https://img.itch.zone/aW1hZ2UvOTExOTUyLzUxNTU5MjMucG5n/original/xCH97m.png"
				alt="sewer run screenshot"
			/>

			<h1>Jak jsem získal svou profilovku</h1>
			<article>
				<p>
					Kdysy jsem dělal videohry. Jedna z nich se jmenovala "sewer
					run", byla to hra o týpkovi, co spadl do stoky a snažil se
					probojovat ven. Ikonickou hlavní postavu jsem si po pár
					měsicích dal jako profilovku.
					<br />
					<a
						target="_blank"
						href="https://lukas-getout.itch.io/sewer-run"
					>
						Hru můžeš hrát tady
					</a>
				</p>
			</article>
		</div>
	);
}

export default Sewer;
