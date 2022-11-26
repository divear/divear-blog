import React, { useState } from "react";
import Meta from "../../components/Meta";

function Vola() {
	const [username, setUsername] = useState("");
	function generate() {}

	fetch("http://localhost:4000/?input=helel").then((data) =>
		console.log(data)
	);

	return (
		<div className="content">
			<Meta title="Někdo ti volá" />
			*tohle furt nefunguje*
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
			</p>
			<button className="generovatButton" onClick={generate}>
				Generovat
			</button>
		</div>
	);
}

export default Vola;
