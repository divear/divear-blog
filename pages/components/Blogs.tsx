import React, { useEffect, useState } from "react";
import Meta from "./Meta";
import blogs from "../blogs.json";

function Blogs() {
	const [lang, setLang] = useState(false);
	const shortBlogs = [blogs[+lang][0], blogs[+lang][1]];
	const [x, setX] = useState(0);

	useEffect(() => {
		setLang(localStorage.getItem("language") === "EN" ? false : true);
		let sbHeight =
			window.innerHeight *
			(window.innerHeight / document.body.offsetHeight);
		setX(sbHeight);
		console.log(x);
	}, [document.body.offsetHeight]);
	return (
		<div>
			<Meta title="Blogs" />
			<div className="smallBlogs blogs">
				<h1
					style={{
						marginLeft: `${x / 50}px`,
					}}
					onClick={() => (location.href = "projects")}
					className="recentBlogsHeader center "
				>
					{+lang ? "Nedávné zprávy" : "Recent blogs"}
				</h1>
				{shortBlogs.map((e, i) => {
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
