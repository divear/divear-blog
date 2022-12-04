import React, { useEffect, useRef, useState } from "react";
import Meta from "../../components/Meta";
import { useSpeechSynthesis } from "react-speech-kit";

function Vola() {
	const [ready, setReady] = useState(false);
	const [username, setUsername] = useState("");
	const v0: any = useRef();
	// const audio = new Audio("./volati0.wav");

	const { speak, voices } = useSpeechSynthesis();
	function generate() {
		// audio.load();
		// audio.play();
		v0.current.play();
		const d = document.getElementById("v0");

		console.log(v0.current);

		// await speak({ text: username });
		console.log(voices);
	}

	return (
		<div className="content">
			<Meta title="Někdo ti volá" />
			<h1>Někdo ti volá generátor</h1>
			<p>
				<input
					placeholder="někdo"
					type="text"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
				je právě na drátě,
				<br />
				chce s tebou pokecat, <br />
				tak proto volá tě,
				<br />
				{username || "někdo"} volá, zvedni to!
			</p>{" "}
			<audio
				ref={v0}
				id="v0"
				src={`https://firebasestorage.googleapis.com/v0/b/personalsite-f2369.appspot.com/o/audio%2Fvolati1.wav?alt=media`}
				controls
			/>
			<button className="generovatButton" onClick={generate}>
				Generovat
			</button>
		</div>
	);
}

export default Vola;
