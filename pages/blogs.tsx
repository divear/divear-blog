import React, { useEffect, useState } from "react";
import blogs from "./blogs.json";

function Blogs() {
	const [lang, setLang] = useState(false);

	useEffect(() => {
		setLang(localStorage.getItem("language") === "EN" ? false : true);
	}, []);
	return (
		<div className="content">
			<h1 className="headerText center">My blogs</h1>
			{blogs[+lang].map((e, i) => {
				return (
					<div className="blog">
						<div className="desc">
							<img src={} alt="" />
							<a href={`/a/${e.link}`} className="projectLink">
								{e.name}
							</a>
							<h5>{e.desc}</h5>
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default Blogs;
