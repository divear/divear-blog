import React, { useEffect, useRef, useState } from "react";

import github from "../components/imgs/socmedia/github.png";
import twitter from "../components/imgs/socmedia/twitter.png";
import youtube from "../components/imgs/socmedia/youtube.png";
import Image from "next/image";
import Meta from "../components/Meta";
import { app, getFirestore, addDoc, collection } from "../components/firebase";
const db = getFirestore(app);

const socials = [
	[github, "https://github.com/lukascobit", "lukascobit"],
	[twitter, "https://twitter.com/divear0", "divear0"],
	[
		youtube,
		"https://www.youtube.com/channel/UCwWXZqqwhdVq50W3vZ4aDSg",
		"divear",
	],
];

function Aboutme() {
	const [lang, setLang] = useState(false);
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [sent, setSent] = useState(false);
	const [err, setErr] = useState("");

	useEffect(() => {
		setLang(localStorage.getItem("language") === "EN" ? false : true);
	}, []);
	async function sendCont(e: any) {
		e.preventDefault();
		try {
			const docRef = await addDoc(
				collection(db, email.replaceAll("/", "")),
				{
					email,
					username,
					message,
				}
			);
			setSent(true);
		} catch (e) {
			setErr(
				lang ? "Všechna pole jsou povinná" : "All fields are mandatory"
			);

			console.error("Error adding document: ", e);
		}
	}
	return (
		<div className="content">
			<Meta title="About me" />
			<div className="headerText center">
				{lang ? "O mně" : "About me"}
			</div>
			<article>
				<p>
					{lang
						? "Já jsem diveár, ale taky mě mužeš znát jako:"
						: "I'm divear but you may also know me as:"}
				</p>
				<ul>
					<li className={lang ? "Vítěz Purkiády 2023" : "no"}>
						Vítěz Purkiády 2023
					</li>
					<li>Lukáš Odehnal</li>
					<li>lukascobit</li>
					<li>lukas_getout</li>
				</ul>
			</article>
			<h1 className="headerText">
				{lang ? "Najdeš mě taky tady:" : "Find me here"}
			</h1>
			<div className="socials">
				{socials.map((s, i) => {
					return (
						<button
							key={i}
							onClick={() => open(s[1].toString(), "_blank")}
							className="social"
						>
							<Image
								width={100}
								height={100}
								src={s[0]}
								alt="social media icon"
							></Image>
							<h4 className="usernameSpeci">{s[2].toString()}</h4>
						</button>
					);
				})}
			</div>
			<h1 className="">
				{lang ? "Máš otázku? Tady je náš " : "Have a question? Ask on "}
				<a
					className="headerText"
					target="_blank"
					href="https://discord.gg/yv8thy2PKz"
					rel="noreferrer"
				>
					discord
				</a>
			</h1>
			<form onSubmit={(e) => sendCont(e)} className="contactme">
				<h1 className="center headerText">
					{lang ? "Kontaktuj mě" : "Contact me"}
				</h1>
				<p className={err ? "error" : "no"}>{err}</p>
				<label htmlFor="name">{lang ? "Jméno" : "Name"}</label>
				<input
					className="contactInputs"
					onChange={(e) => setUsername(e.target.value)}
					value={username}
					type="text"
					id="name"
				/>
				<label htmlFor="email">Email</label>
				<input
					className="contactInputs"
					onChange={(e) => setEmail(e.target.value)}
					value={email}
					type="email"
					id="email"
				/>
				<label htmlFor="message">
					{lang ? "Vaše zpráva" : "Your message"}
				</label>
				<textarea
					className="contactInputs"
					name="message"
					id="message"
					onChange={(e) => setMessage(e.target.value)}
					value={message}
					cols={20}
					rows={5}
				></textarea>
				<button type="submit" className="sendButton">
					{lang ? "Odeslat" : "Send"}
				</button>
			</form>
			<div
				onClick={() => setSent(false)}
				className={sent ? "successDiv" : "no"}
			>
				<h1>{lang ? "Úspěšně odesláno" : "Succesfully sent!"}</h1>
			</div>
		</div>
	);
}

export default Aboutme;
