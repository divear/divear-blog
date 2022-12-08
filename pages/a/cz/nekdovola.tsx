import React, { useEffect, useRef, useState } from "react";
import Meta from "../../components/Meta";
import { useSpeechSynthesis } from "react-speech-kit";

function Vola() {
	const [username, setUsername] = useState("");
	const v0: any = useRef();
	const v1: any = useRef();
	// const audio = new Audio("./volati0.wav");

	const { speak, voices } = useSpeechSynthesis();
	const czech = voices[54];
	function generate() {
		speak({ text: username, voice: czech });
		setTimeout(() => {
			v0.current.play();
		}, 700);
	}
	function end() {
		speak({ text: username, voice: czech });
		setTimeout(() => {
			v1.current.play();
		}, 700);
	}

	return (
		<div className="content nekdovola">
			<Meta title="Někdo ti volá" />
			<h1>Někdo ti volá generátor</h1>
			<p>
				<input
					placeholder="někdo"
					type="text"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
				<br />
				je právě na drátě,
				<br />
				chce s tebou pokecat, <br />
				tak proto volá tě,
				<br />
				{username || "někdo"} volá, zvedni to!
			</p>{" "}
			<audio
				className="no"
				onEnded={end}
				ref={v0}
				id="v0"
				src={`https://firebasestorage.googleapis.com/v0/b/personalsite-f2369.appspot.com/o/audio%2Fvolati1.wav?alt=media`}
				controls
			/>
			<audio
				className="no"
				ref={v1}
				id="v1"
				src={`https://firebasestorage.googleapis.com/v0/b/personalsite-f2369.appspot.com/o/audio%2Fvolati2.wav?alt=media`}
				controls
			/>
			<button className="generovatButton" onClick={generate}>
				Spustit
			</button>
		</div>
	);
}

export default Vola;
