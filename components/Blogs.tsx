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
			window.innerWidth < 830 ? setX(x) : setX(scrollY);
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
					{+lang ? "Nedávné články" : "Recent articles"}
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
                                    style={{
                                        maxWidth: "100%",
                                        height: "auto"
                                    }} />
								<br />
								<a href={`/a/${e.link}`} className="blogLink">
									{e.name}
								</a>
								<p>{e.desc}</p>
							</div>
                        </div>
                    );
				})}
			</div>
        </div>
    );
}

export default Blogs;
