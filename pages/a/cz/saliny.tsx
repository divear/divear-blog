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
        <p>
          Již nežijeme ve světě, kde obsah který sledujeme má nějakou hodnotu,
          ptát se na význam nečeho takového je chybné už z následujících důvodů:
        </p>
        <ol>
          <li>
            Smrt autora, když oddělíte autora od jeho díla, můžete si odvést
            nové a kreativná závěry a nejste sužování tím, co "autor opravdu
            myslel"
          </li>
          <li>
            Samotný koncept hodnocení spojů hromadné dopravy je absurdní a
            jelikož jsou 3 ze zmínených "šalin" vlastně autobusy, poukazuje je
            to na nebrněnské turisty do Brna, kteří si myslí, že tímto pojmem
            nazývame všechny prostředky hromadné dopravy.
          </li>
          <li>Když jsem to v 9. třídě dělal přišlo mi to vtipný.</li>
        </ol>
        <h2 className="headerText">Jak?</h2>
        <p>
          Na edit videí používám <a href="https://www.gimp.org/">Gimp </a>a{" "}
          <a href="https://kdenlive.org/en/">Kdenlive</a>. Při tvorbě videa
          nebyly použity žádné psychotropní, ani jiné návykové látky.
        </p>
      </article>
    </div>
  );
}

export default Saliny;
