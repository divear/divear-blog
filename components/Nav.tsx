import React, { useEffect, useState } from "react";
import pfp from "./imgs/pfp.svg";
import burger from "./imgs/burgermenu.png";
import Image from "next/image";
import Link from "next/link";
import Loading from "./Loading";
import { useTranslate, useTolgee } from "@tolgee/react";

function Nav() {
  const { t } = useTranslate();
  const tolgee = useTolgee();

  // Read current active language directly from the Tolgee instance context
  const currentLanguage = tolgee.getLanguage();
  const isCzech = currentLanguage === "cs";

  const [modal, setModal] = useState(false);
  const [tree, setTree] = useState(false);
  const [isPhone, setIsPhone] = useState(false);

  useEffect(() => {
    setIsPhone(window.innerWidth < 830);
  }, []);

  function show() {
    setModal(!modal);
  }

  function toggleLanguage(targetLocale: "en" | "cs") {
    setModal(false);
    setTree(false);

    // Updates the global vocabulary stream in real-time with no route changes or page refreshes
    tolgee.changeLanguage(targetLocale);
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
