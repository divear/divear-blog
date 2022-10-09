import React, { useEffect, useState } from "react";
import pfp from "./imgs/pfp.png";
import burger from "./imgs/burgermenu.png";
import Image from "next/image";

function Nav() {
	// false - english
	// true - czech
	const [language, setLanguage] = useState(false);
	const [modal, setModal] = useState(false);
	const [tree, setTree] = useState(false);
	const [isPhone, setIsPhone] = useState(false);

	useEffect(() => {
		setIsPhone(window.innerWidth < 830);
		console.log(navigator.language);

		//check if user is czech or slovak & change the site language appropriatly
		!localStorage.getItem("language") &&
			localStorage.setItem(
				"language",
				navigator.language == "cs" || navigator.language == "sk"
					? "CZ"
					: "EN"
			);
		localStorage.getItem("language") &&
			setLanguage(
				localStorage.getItem("language") == "CZ" ? true : false
			);
	}, []);

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

			<h1 onClick={show} className={isPhone ? "no" : "language"}>
				{!language ? "🇬🇧" : "🇨🇿"}
			</h1>

			<div className={isPhone ? "no" : "redirs"}>
				<a href="/projects">{!+language ? "Projects" : "Projekty"} </a>
				<a href="/blogs">{!+language ? "Blogs" : "Blogy"} </a>
				<a href="/aboutme">{!+language ? "About me" : "O mně"} </a>
			</div>
			<div className={modal ? "langModal" : "no"}>
				<h2 onClick={() => change(true)}>🇨🇿 Česky</h2>
				<br />
				<h2 onClick={() => change(false)}>🇬🇧 English</h2>
			</div>
			<div
				onClick={() => setTree(!tree)}
				className={isPhone ? "burgerMenu" : "no"}
			>
				<Image src={burger} width={50} height={50}></Image>
			</div>

			<div className={tree ? "blackOverlay" : "no"} />
			<div className={tree ? "tree" : "no"}>
				<h1 onClick={show} className="language">
					{!language ? "🇬🇧" : "🇨🇿"}
				</h1>
				<br />
				<a href="/projects">{!+language ? "Projects" : "Projekty"} </a>
				<br />
				<a href="/blogs">{!+language ? "Blogs" : "Blogy"} </a>
				<br />
				<a href="/aboutme">{!+language ? "About me" : "O mně"} </a>
				<br />
			</div>
		</div>
	);
}

export default Nav;
