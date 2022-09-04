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
			<div className="blogs">
				{blogs[+lang].map((e, i) => {
					return (
						<div className="blog">
							<div className="desc">
								<img
									onClick={() =>
										(location.href = `/a/${e.link}`)
									}
									className="showoffImage blogImg"
									width={480}
									height={270}
									src={e.img}
									alt="blog image"
								/>
								<br />
								<a href={`/a/${e.link}`} className="blogLink">
									{e.name}
								</a>
								<h5>{e.desc}</h5>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Blogs;
