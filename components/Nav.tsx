import React, { useEffect, useState } from "react";
import pfp from "./imgs/pfp.svg";
import burger from "./imgs/burgermenu.png";
import Image from "next/image";
import Link from "next/link";
import Loading from "./Loading";
import { useTranslate, useTolgee } from "@tolgee/react";
import { useRouter } from "next/router";

function Nav() {
  const { t } = useTranslate();
  const tolgee = useTolgee();
  const router = useRouter();

  const currentLanguage = tolgee.getLanguage();
  const isCzech = currentLanguage === "cs";

  const [modal, setModal] = useState(false);
  const [tree, setTree] = useState(false);
  const [isPhone, setIsPhone] = useState(false);

  useEffect(() => {
    setIsPhone(window.innerWidth < 830);

    // 1. Check for a previously saved user setting
    const savedLanguage = localStorage.getItem("language");

    if (savedLanguage === "cs" || savedLanguage === "en") {
      tolgee.changeLanguage(savedLanguage);
    } else {
      // 2. Fallback to location/browser settings if no manual choice exists
      const browserLang = window.navigator.language.split("-")[0]; // E.g., 'cs-CZ' -> 'cs'
      const targetLocale =
        browserLang === "cs" || browserLang === "sk" ? "cs" : "en";

      tolgee.changeLanguage(targetLocale);
      localStorage.setItem("language", targetLocale);
    }
  }, []);

  function show() {
    setModal(!modal);
  }

  function toggleLanguage(targetLocale: "en" | "cs") {
    setModal(false);
    setTree(false);

    // Save the explicit user preference to localStorage
    localStorage.setItem("language", targetLocale);

    // Update the global vocabulary stream in real-time
    tolgee.changeLanguage(targetLocale);

    // Handle paths for specific individual article pages (/a/...)
    if (window.location.pathname.startsWith("/a/")) {
      const currentPath = window.location.pathname;

      if (targetLocale === "cs" && !currentPath.startsWith("/a/cz/")) {
        window.location.href = currentPath.replace("/a/", "/a/cz/");
      } else if (targetLocale === "en" && currentPath.startsWith("/a/cz/")) {
        window.location.href = currentPath.replace("/a/cz/", "/a/");
      }
    }
  }

  return (
    <div className="nav">
      <Loading />
      <h1 className="logoText" onClick={() => (window.location.href = "/")}>
        <Image width={50} height={50} src={pfp} alt="i" />
        Lukáš Odehnal
      </h1>
      <h1 onClick={show} className={isPhone ? "no" : "language"}>
        {!isCzech ? "🇬🇧" : "🇨🇿"}
      </h1>
      <div className={isPhone ? "no" : "redirs"}>
        <Link href="/blogs" legacyBehavior>
          {t("nav_blog", "Blog")}
        </Link>
        <Link href="/aboutme" legacyBehavior>
          {t("nav_about_me", "About me")}
        </Link>
      </div>
      <div className={modal && !isPhone ? "langModal" : "no"}>
        <h2 onClick={() => toggleLanguage("cs")}>🇨🇿 Česky</h2>
        <br />
        <h2 onClick={() => toggleLanguage("en")}>🇬🇧 English</h2>
      </div>
      <div
        onClick={() => setTree(!tree)}
        className={isPhone ? "burgerMenu" : "no"}
      >
        <Image
          alt="burgerMenu"
          src={burger}
          width={50}
          height={50}
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        />
      </div>
      <div
        onClick={() => setTree(false)}
        className={tree ? "blackOverlay" : "no"}
      />
      <div onClick={() => setTree(false)} className={tree ? "tree" : "no"}>
        <div className="treeLangModal">
          <h2 onClick={() => toggleLanguage("cs")}>🇨🇿 Česky</h2>
          <h2 onClick={() => toggleLanguage("en")}>🇬🇧 English</h2>
        </div>
        <br />
        <Link href="/blogs" legacyBehavior>
          {t("nav_blogs_plural", "Blogs")}
        </Link>
        <br />
        <Link href="/aboutme" legacyBehavior>
          {t("nav_about_me", "About me")}
        </Link>
        <br />
      </div>
    </div>
  );
}

export default Nav;
