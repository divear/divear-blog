import React from "react";
import blogs from "./blogs.json";
import Meta from "../components/Meta";
import Image from "next/image";
import { useTranslate, useTolgee } from "@tolgee/react";

function Blogs() {
  const { t } = useTranslate();
  const tolgee = useTolgee();

  // Get the real-time language code from Tolgee instance
  const tolgeeLang = tolgee.getLanguage();

  // Strict fallback validation: if Tolgee hasn't loaded or isn't 'cs', default to 'en'
  const currentLocale = tolgeeLang === "cs" ? "cs" : "en";

  // Safely grab the array. Even if the JSON file is malformed, fall back to an empty array so it never crashes
  const localBlogs = blogs[currentLocale] || blogs["en"] || [];

  return (
    <div className="content">
      <Meta title={t("blogs_meta_title", "Blogs")} />
      <h1 className="headerText center">
        {t("my_articles_header", "My articles")}
      </h1>
      <div className="blogs">
        {localBlogs.map((e, i) => {
          return (
            <div className="blog" key={i}>
              <div className="desc">
                <Image
                  onClick={() => (location.href = `/a/${e.link}`)}
                  className="showoffImage blogImg"
                  width={1920}
                  height={1080}
                  src={e.img}
                  alt="blogimage"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                  }}
                />
                <br />
                <a rel="noreferrer" href={`/a/${e.link}`} className="blogLink">
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
