import React, { useEffect, useState } from "react";
import blogs from "../pages/blogs.json";
import Image from "next/image";
import { T, useTranslate, useTolgee } from "@tolgee/react";

function Blogs() {
  const { t } = useTranslate();
  const tolgee = useTolgee();
  const [x, setX] = useState(0);

  // Grab the real-time active language string ('en' or 'cs')
  const tolgeeLang = tolgee.getLanguage();

  // Strict validation to ensure we fallback to 'en' if Tolgee is resolving state
  const currentLocale = tolgeeLang === "cs" ? "cs" : "en";

  // Use the string property lookup for your updated JSON structure
  const localBlogs = (blogs as any)[currentLocale] || blogs["en"] || [];
  const shortBlogs = [localBlogs[0], localBlogs[1]];

  useEffect(() => {
    const handleScroll = () => {
      window.innerWidth < 830 ? setX(x) : setX(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [x]);

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
          <T keyName="recent_articles_header">Recent articles</T>
        </h1>
        {shortBlogs.map((e, i) => {
          if (!e) return null; // Safe guard check
          return (
            <div className="smallBlog" key={i}>
              <div className="smallBlogDesc">
                <Image
                  onClick={() => (location.href = `/a/${e.link}`)}
                  className="showoffImage"
                  width={480}
                  height={270}
                  src={e.img}
                  alt="blog image"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                  }}
                />
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
