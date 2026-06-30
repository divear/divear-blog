import Link from "next/link";
import React, { useState } from "react";
import Meta from "../components/Meta";
import { useTranslate } from "@tolgee/react";

interface Circle {
  name: string;
  color: string;
}

function Secret() {
  const { t } = useTranslate();
  const [sent, setSent] = useState(false);

  const circles: Circle[] = [
    { name: "Main", color: "#0A647C" },
    { name: "Secondary", color: "#0D2E37" },
    { name: "Light blue", color: "#b3e6f3" }, // Removed stray semicolon
    { name: "Dark blue", color: "#01161c" },
    { name: "Background", color: "#022129" },
    { name: "Foreground", color: "#eafbf8" },
  ];

  function copy(color: string) {
    navigator.clipboard.writeText(color);
    setSent(false);
    setTimeout(() => setSent(true), 10); // small delay to force re-render
  }

  return (
    <>
      <Meta title="divear.me color scheme" />
      <div className="content notFound">
        <Meta title="color scheme" />
        <h1 className="center">divear.me color scheme</h1>
        <div className="circles">
          {circles.map((circle) => (
            <div
              onClick={() => copy(circle.color)}
              key={circle.name}
              className="circle-item"
            >
              <div
                className="circle"
                style={{ backgroundColor: circle.color }}
              ></div>
              <span className="circle-name">{circle.name}</span>
            </div>
          ))}
          <div
            onClick={() => setSent(false)}
            className={sent ? "successDiv" : "no"}
          >
            <h1>{t("clipboard_copied", "Copied")}</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Secret;
