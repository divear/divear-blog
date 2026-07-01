import React from "react";
import Image from "next/image";

function Game() {
  return (
    <div className="content">
      <title>EduCalc</title>
      <h1>EduCalc - EduPage Calculator</h1>
      <p>
        Wanting to calculate your final grade is a feature every online
        schooling system should have. My high school&apos;s old system had it,
        and I don&apos;t see a reason EduPage shouldn&apos;t have it too. I have
        decided to write a script in Rust to do exactly that.
      </p>
      <h1>
        You can download it from the Github release or compile with Cargo:
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
        The instructions to install are in the{" "}
        <a
          target="_blank"
          href="https://github.com/divear/EduCalc/blob/master/README.md"
          rel="noreferrer"
        >
          README
        </a>
      </p>
      <p>
        The Windows releasly has reportedly some issues, so if you are on
        Windows, I recommend compiling it yourself. The Linux release should
        work fine.
      </p>
      <Image
        width={400}
        height={300}
        src="https://firebasestorage.googleapis.com/v0/b/personalsite-f2369.appspot.com/o/img%2Feducalc1.png?alt=media"
        alt=""
        style={{
          maxWidth: "100%",
          height: "auto",
        }}
      />
      <Image
        width={400}
        height={300}
        src="https://firebasestorage.googleapis.com/v0/b/personalsite-f2369.appspot.com/o/img%2Feducalc2.png?alt=media"
        alt=""
        style={{
          maxWidth: "100%",
          height: "auto",
        }}
      />
      <Image
        width={400}
        height={300}
        src="https://firebasestorage.googleapis.com/v0/b/personalsite-f2369.appspot.com/o/img%2Feducalc3.png?alt=media"
        alt=""
        style={{
          maxWidth: "100%",
          height: "auto",
        }}
      />
    </div>
  );
}

export default Game;
