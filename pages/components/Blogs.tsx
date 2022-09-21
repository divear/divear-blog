import React, { useEffect, useState } from "react";
import Meta from "./Meta";
import blogs from "../blogs.json";

function Blogs() {
	const [lang, setLang] = useState(false);

	useEffect(() => {
		setLang(localStorage.getItem("language") === "EN" ? false : true);
	}, []);
	return (
		<div>
			<Meta title="Blogs" />
			<div className="miniBlogs blogs">
				<h1 className="recentBlogsHeader center headerText">
					{+lang ? "Nedávné zprávy" : "Recent blogs"}
				</h1>
				{blogs[+lang].map((e, i) => {
					return (
						<div className="smallBlog">
							<div className="smallBlogDesc">
								<img
									onClick={() =>
										(location.href = `/a/${e.link}`)
									}
									className="showoffImage"
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
