import React, { useState, useEffect } from "react";
import Image from "next/image";
import morava from "./imgs/projects/morava/morava0.png";
import morava1 from "./imgs/projects/morava/morava1.png";
import morava2 from "./imgs/projects/morava/morava2.png";
import swipechoose0 from "../components/imgs/projects/swipechoose/swipechoose0.png";
import swipechoose1 from "../components/imgs/projects/swipechoose/swipechoose1.png";
import swipechoose2 from "../components/imgs/projects/swipechoose/swipechoose2.png";
import projects from "../pages/projects.json";
import { useTranslate, useTolgee } from "@tolgee/react";

const imgs = [
  [swipechoose0, swipechoose1, swipechoose2],
  [morava, morava1, morava2],
];

function Projects() {
  const { t } = useTranslate();
  const tolgee = useTolgee();
  const [imgIndex, setImgIndex] = useState(0);

  // Get real-time language code from your active Tolgee engine instance
  const tolgeeLang = tolgee.getLanguage();

  // Map the string language code back to matching index keys safely (0 = EN, 1 = CS)
  const arrayIndex = tolgeeLang === "cs" ? 1 : 0;

  // Safely pull matching projects list array or fallback to index 0 safely
  const localProjects = projects[arrayIndex] || projects[0] || [];
  const shortProjects = localProjects
    ? [localProjects[0], localProjects[1]]
    : [];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (imgIndex === 2) {
        setImgIndex(0);
        return;
      }
      setImgIndex(imgIndex + 1);
    }, 8000);
    return () => clearTimeout(timer);
  }, [imgIndex]);

  return (
    <div className="content">
      <div className="projects">
        <h1
          onClick={() => (window.location.href = "projects")}
          className="recentBlogsHeader center headerText"
        >
          {t("my_projects_header", "My projects")}
          <br />
        </h1>
        {shortProjects.map((e: any, i: number) => {
          if (!e) return null;
          return (
            <div key={i} className="project" onClick={() => open(e.link)}>
              <Image
                className="showoffImage"
                width={480}
                height={270}
                src={imgs[i]?.[imgIndex] || swipechoose0}
                alt="showoffImage"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
              <br />
              <div className="smallProjectDesc">
                <a
                  rel="noreferrer"
                  className="blogLink"
                  href={e.link}
                  target="_blank"
                  onClick={(event) => event.stopPropagation()}
                >
                  {e.name}
                </a>
                <p>{e.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
      <br />
    </div>
  );
}

export default Projects;
