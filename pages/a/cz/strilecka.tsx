import React from "react";

function Game() {
	return (
		<div className="content">
			<title>Supr hra</title>
			<h1>Proof of concept 3d střílečka</h1>
			<p>
				3D fps střílečka vytvořenou v Godotu.
        Modely vytvořené v Blenderu, 
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
      <p style={{"margin":"1vh 0 20vh 0"}}>

			(pokud nevíš jakou máš architekturu, tak vyber tu, co se jmenuje
			&quot;nevim&quot;)
        </p>
        
			<br />
		</div>
	);
}

export default Game;
