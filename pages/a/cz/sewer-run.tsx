import React from "react";
import Meta from "../../../components/Meta";

function Sewer() {
  return (
    <div className="content">
      <Meta title="Sewer run" description="Příběh Sewer runu" />
      <img
        className="floatRight smallImg"
        src="https://img.itch.zone/aW1hZ2UvOTExOTUyLzUxNTU5MjMucG5n/original/xCH97m.png"
        alt="sewer run screenshot"
      />

      <article style={{ maxWidth: "100%", height: "70vh" }}>
        <h1 className="pfpTitle">Jak jsem získal svou profilovku</h1>
        <p>
          Hra vytvořena v lednu 2021 &quot;sewer run&quot;, moje první reálná
          hra. Ikonickou hlavní postavu jsem si po pár měsicích dal jako
          profilovku. Popravdě ta hra není zas tak špatná.
          <br />
          <a
            rel="noreferrer"
            target="_blank"
            href="https://lukas-getout.itch.io/sewer-run"
          >
            Hru můžeš hrát tady
          </a>
        </p>
      </article>
    </div>
  );
}

export default Sewer;
