import React, { useEffect, useState } from "react";
import blogs from "./blogs.json";
import Meta from "../components/Meta";
import Image from "next/image";

function Blogs() {
	const [lang, setLang] = useState(false);

	useEffect(() => {
		setLang(localStorage.getItem("language") === "EN" ? false : true);
	}, []);
	return (
        <div className="content">
            <Meta title={+lang ? "Články" : "Blogs"} />
            <h1 className="headerText center">
				{+lang ? "Moje články" : "My articles"}
			</h1>
            <div className="blogs">
				{blogs[+lang].map((e, i) => {
					return (
                        <div className="blog" key={i}>
                            <div className="desc">
								<Image
                                    onClick={() =>
										(location.href = `/a/${e.link}`)
									}
                                    className="showoffImage blogImg"
                                    width={1920}
                                    height={1080}
                                    src={e.img}
                                    alt="blogimage"
                                    style={{
                                        maxWidth: "100%",
                                        height: "auto"
                                    }} />
								<br />
								<a
									rel="noreferrer"
									href={`/a/${e.link}`}
									className="blogLink"
								>
									{e.name}
								</a>
								<p className="blogDesc">{e.desc}</p>
							</div>
                        </div>
                    );
				})}
			</div>
        </div>
    );
}

export default Blogs;
