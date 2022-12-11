import React, { useEffect, useState } from "react";
import Meta from "../components/Meta";

function NotFound() {
	const [lang, setLang] = useState(false);
	useEffect(() => {
		setLang(localStorage.getItem("language") === "EN" ? false : true);
	}, []);
	return (
		<div className="content notFound">
			<Meta title={+lang ? "Stránka nenalezena." : "Page not found."} />
			<h3 className="center">404</h3>
			<br />
			<h1 className="center">
				{+lang
					? "Jaj! Stránka nenalezena."
					: "Oops! That page can’t be found."}
			</h1>
			<br />
			<button
				onClick={() => (location.href = "/")}
				className="center centerButton"
			>
				{+lang ? "Zpět na hlavní stránku" : "Back to the main page"}
			</button>
		</div>
	);
}

export default NotFound;
