import React, { useEffect, useState } from "react";
import pfp from "./imgs/pfp.png";
import Image from "next/image";

function Nav() {
	// false - english
	// true - czech
	const [language, setLanguage] = useState(true);
	useEffect(() => {
		localStorage.setItem("language", language ? "CZ" : "EN");
	}, [language]);

	return (
		<div>
			<h1 className="nav" onClick={() => (window.location.href = "/")}>
				<Image width={50} height={50} src={pfp} alt="i" />
				divear
			</h1>

			<h1 onClick={() => setLanguage(!language)} className="language">
				{!language ? "🇬🇧" : "🇨🇿"}
			</h1>
		</div>
	);
}

export default Nav;
