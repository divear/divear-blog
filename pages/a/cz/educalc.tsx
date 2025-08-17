import React from "react";
import Image from "next/image";

function Game() {
  return (
    <div className="content">
      <title>EduCalc</title>
      <h1>EduCalc - EduPage Calculator</h1>
      <p>
        Chtít is vypočítat známku - &quot;Co by mi vycházelo, kdybych dostal za
        1?&quot; je velice častá potřeba žáků, obzvlášt na konci roku. Přesně
        kvůli této potřebě jsem naprogramoval kalkulačku průměrů z Vašich
        EduPage známek.
      </p>
      <h1>
        Program můžete stáhnout z Github releasů, nebo zkompilovat s Cargem:
        <a
          href="https://github.com/divear/EduCalc"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          EduCalc
        </a>
      </h1>
      <p>
        Instrukce k instalaci jsou v{" "}
        <a
          target="_blank"
          href="https://github.com/divear/EduCalc/blob/master/README.md"
          rel="noreferrer"
        >
          README
        </a>
      </p>
      <Image
        width={400}
        height={300}
        src="https://firebasestorage.googleapis.com/v0/b/personalsite-f2369.appspot.com/o/img%2Feducalc1.png?alt=media"
        alt=""
        style={{
          maxWidth: "100%",
          height: "auto"
        }} />
      <Image
        width={400}
        height={300}
        src="https://firebasestorage.googleapis.com/v0/b/personalsite-f2369.appspot.com/o/img%2Feducalc2.png?alt=media"
        alt=""
        style={{
          maxWidth: "100%",
          height: "auto"
        }} />
      <Image
        width={400}
        height={300}
        src="https://firebasestorage.googleapis.com/v0/b/personalsite-f2369.appspot.com/o/img%2Feducalc3.png?alt=media"
        alt=""
        style={{
          maxWidth: "100%",
          height: "auto"
        }} />
    </div>
  );
}

export default Game;
