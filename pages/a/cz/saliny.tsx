import React from "react";
import Meta from "../../../components/Meta";

function Saliny() {
  return (
    <div className="content">
      <Meta title={"Šaliny"} />
      <h1>Top nejlepší šaliny v Brně</h1>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/u9nUzKx49Vg"
        title="Top nejlepší šaliny v Brně"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
      <article>
        <h2 className="headerText">Proč?</h2>
        <p>Svět před vznikem tohoto videa byl jiné místo.</p>
        <h2 className="headerText">Jak?</h2>
        <p>
          Na edit videí používám <a href="https://www.gimp.org/">Gimp </a>a{" "}
          <a href="https://kdenlive.org/en/">Kdenlive</a>. Při tvorbě videa
          nebyly použity žádné psychotropní, ani jiné návykové látky.
        </p>
        <h2 className="headerText">Proč jsou 3 z nich autobusy?</h2>
        <p>Pojmy jsou subjektivní a moje trpělivost není nekonečná.</p>
      </article>
    </div>
  );
}

export default Saliny;
