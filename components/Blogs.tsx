import React, { useEffect, useState } from "react";
import blogs from "../pages/blogs.json";
import Image from "next/image";

function Blogs() {
	const [lang, setLang] = useState(false);
	const shortBlogs = [blogs[+lang][0], blogs[+lang][1]];
	const [x, setX] = useState(0);

	useEffect(() => {
		setLang(localStorage.getItem("language") === "EN" ? false : true);
		onscroll = () => {
			window.innerWidth < 830 ? setX(scrollY / 2 - 500) : setX(scrollY);
		};
	}, []);
	return (
		<div>
			<div className="smallBlogs blogs">
				<h1
					style={{
						marginLeft: `${x / 3}px`,
					}}
					onClick={() => (location.href = "blogs")}
					className="recentBlogsHeader center "
				>
					{+lang ? "Nedávné zprávy" : "Recent blogs"}
				</h1>
				{shortBlogs.map((e, i) => {
					return (
						<div className="smallBlog" key={i}>
							<div className="smallBlogDesc">
								<Image
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
