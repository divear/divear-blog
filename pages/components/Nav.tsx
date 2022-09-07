import React, { useEffect, useState } from "react";
import pfp from "./imgs/pfp.png";
import Image from "next/image";

function Nav() {
	// false - english
	// true - czech
	const [language, setLanguage] = useState(true);
	const [modal, setModal] = useState(false);

	useEffect(() => {
		localStorage.getItem("language") &&
			setLanguage(
				localStorage.getItem("language") == "EN" ? false : true
			);
	}, []);

	useEffect(() => {}, [language]);
	function show() {
		setModal(!modal);
	}
	function change(isCz: boolean) {
		localStorage.setItem("language", isCz ? "CZ" : "EN");
		setLanguage(isCz);
		setModal(false);
		location.reload();
	}

	return (
		<div className="nav">
			<h1
				className="logoText"
				onClick={() => (window.location.href = "/")}
			>
				<Image width={50} height={50} src={pfp} alt="i" />
				divear
			</h1>

			<h1 onClick={show} className="language">
				{!language ? "🇬🇧" : "🇨🇿"}
			</h1>

			<div className={modal ? "langModal" : "no"}>
				<h2 onClick={() => change(true)}>🇨🇿 Česky</h2>
				<br />
				<h2 onClick={() => change(false)}>🇬🇧 English</h2>
			</div>

			<div className="redirs">
				<a href="/projects">{!+language ? "Projects" : "Projekty"} </a>
				<a href="/blogs">{!+language ? "Blogs" : "Blogy"} </a>
				<a href="/aboutme">{!+language ? "About me" : "O mně"} </a>
			</div>
		</div>
	);
}

export default Nav;
