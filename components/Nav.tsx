import React, { useEffect, useState } from "react";
// import pfp from "./imgs/pfp.png";
import pfp from "./imgs/pfp.svg";
import burger from "./imgs/burgermenu.png";
import Image from "next/image";
import Link from "next/link";

function Nav() {
	// false - english
	// true - czech
	const [language, setLanguage] = useState(false);
	const [modal, setModal] = useState(false);
	const [tree, setTree] = useState(false);
	const [isPhone, setIsPhone] = useState(false);

	useEffect(() => {
		setIsPhone(window.innerWidth < 830);

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

		if (language) {
			location.href = location.href.replace("/cz/", "/");
		} else {
			location.href = location.href.replace("/a/", "/a/cz/");
		}
		// location.reload();
	}

	return (
		<div className="nav">
			<h1
				className="logoText"
				onClick={() => (window.location.href = "/")}
			>
				<Image width={50} height={50} src={pfp} alt="i" />
				Lukáš Odehnal
			</h1>

			<h1 onClick={show} className={isPhone ? "no" : "language"}>
				{!language ? "🇬🇧" : "🇨🇿"}
			</h1>

			<div className={isPhone ? "no" : "redirs"}>
				<Link href="/projects">
					{!+language ? "Projects" : "Projekty"}
				</Link>
				<Link href="/blogs">{!+language ? "Blog" : "Články"}</Link>
				<Link href="/aboutme">{!+language ? "About me" : "O mně"}</Link>
			</div>
			<div className={modal && !isPhone ? "langModal" : "no"}>
				<h2 onClick={() => change(true)}>🇨🇿 Česky</h2>
				<br />
				<h2 onClick={() => change(false)}>🇬🇧 English</h2>
			</div>
			<div
				onClick={() => setTree(!tree)}
				className={isPhone ? "burgerMenu" : "no"}
			>
				<Image
					alt="burgerMenu"
					src={burger}
					width={50}
					height={50}
				></Image>
			</div>

			<div
				onClick={() => setTree(false)}
				className={tree ? "blackOverlay" : "no"}
			/>
			<div
				onClick={() => setTree(false)}
				className={tree ? "tree" : "no"}
			>
				<div className="treeLangModal">
					<h2 onClick={() => change(true)}>🇨🇿 Česky</h2>
					<h2 onClick={() => change(false)}>🇬🇧 English</h2>
				</div>
				<br />
				<Link href="/projects">
					{!+language ? "Projects" : "Projekty"}
				</Link>
				<br />
				<Link href="/blogs">{!+language ? "Blogs" : "Blogy"}</Link>
				<br />
				<Link href="/aboutme">{!+language ? "About me" : "O mně"}</Link>
				<br />
			</div>
		</div>
	);
}

export default Nav;
