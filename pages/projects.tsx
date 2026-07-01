import React, { useState, useEffect } from "react";
import Image from "next/image";
import morava from "../components/imgs/projects/morava/morava0.png";
import morava1 from "../components/imgs/projects/morava/morava1.png";
import morava2 from "../components/imgs/projects/morava/morava2.png";
import drby from "../components/imgs/projects/drby/drby0.png";
import drby1 from "../components/imgs/projects/drby/drby1.png";
import drby2 from "../components/imgs/projects/drby/drby2.png";
import malo from "../components/imgs/projects/malo/malo0.png";
import malo1 from "../components/imgs/projects/malo/malo1.png";
import malo2 from "../components/imgs/projects/malo/malo2.png";
import chalky from "../components/imgs/projects/chalky/chalky0.png";
import chalky1 from "../components/imgs/projects/chalky/chalky1.png";
import chalky2 from "../components/imgs/projects/chalky/chalky2.png";
import postine from "../components/imgs/projects/postine/postine0.png";
import postine1 from "../components/imgs/projects/postine/postine1.png";
import postine2 from "../components/imgs/projects/postine/postine2.png";
import swipechoose0 from "../components/imgs/projects/swipechoose/swipechoose0.png";
import swipechoose1 from "../components/imgs/projects/swipechoose/swipechoose1.png";
import swipechoose2 from "../components/imgs/projects/swipechoose/swipechoose2.png";
import projects from "./projects.json";
import Meta from "../components/Meta";
import { useTranslate, useTolgee } from "@tolgee/react";

const imgs = [
  [swipechoose0, swipechoose1, swipechoose2],
  [morava, morava1, morava2],
  [malo, malo1, malo2],
  [chalky, chalky1, chalky2],
  [drby, drby1, drby2],
  [postine, postine1, postine2],
];

function Projects() {
  const { t } = useTranslate();
  const tolgee = useTolgee();

  const isCzech = tolgee.getLanguage() === "cs";
  const langIndex = isCzech ? 1 : 0;

  const [imgIndex, setImgIndex] = useState(0);
  const [isPhone, setIsPhone] = useState(false);

  // Auto-scrolling slider timing loop
  useEffect(() => {
    const interval = setInterval(() => {
      setImgIndex((prev) => (prev === 2 ? 0 : prev + 1));
    }, 9000);

    setIsPhone(window.innerWidth < 830);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bigProjects content">
      <h1 className="center headerText">
        {t(
          "projects_header",
          "Interesting things I've created over the years...",
        )}
      </h1>
      {projects[langIndex].map((e, i) => {
        return (
          <div key={i} className="bigProject">
            <Meta title="My projects" />
            <button
              onClick={() => setImgIndex((prev) => (prev !== 0 ? prev - 1 : 2))}
              className="scrolls scrollLeft"
            >
              &lt;
            </button>
            <Image
              onClick={() => window.open(e.link, "_blank")}
              className="showoffBigImage"
              width={isPhone ? 1440 : 960}
              height={isPhone ? 810 : 540}
              src={imgs[i][imgIndex]}
              alt={`showoff image ${i}`}
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
            <button
              onClick={() => setImgIndex((prev) => (prev !== 2 ? prev + 1 : 0))}
              className="scrolls scrollRight"
            >
              &gt;
            </button>
            <div
              onClick={() => window.open(e.link, "_blank")}
              className="desc projectDesc"
            >
              <h3 className="projectLink">{e.name}</h3>
              <p>{e.desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Projects;
