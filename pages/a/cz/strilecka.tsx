import React from "react";

function Game() {
	return (
		<div className="content">
			<title>Supr hra</title>
			<h1>Shitty 3d střílečka</h1>
			<p>
				Hle, zde máte 3d fps střílečku vytvořenou v Godotu. Možná to i
				bude fungovat
			</p>
			<p>Tady je android verze:</p>
			<button
				onClick={() =>
					open(
						"https://drive.google.com/drive/folders/1WUJqsxy80RxPpwlSVUp_mmnPTfbqSaBM?usp=sharing",
						"_blank"
					)
				}
			>
				Google drive
			</button>
			(pokud nevíš jakou máš architekturu tak vyber tu, co se jmenuje
			&quot;nevim&quot;)
			<br />
			<div className="">
				<p>
					Web verze (nedoporučuji - absolutně nefunguje multiplayer):
				</p>
				<button
					onClick={() => open("https://9bhra.netlify.app/", "_blank")}
				>
					9bhra.netlify.app
				</button>
			</div>
		</div>
	);
}

export default Game;