import Image from "next/image";
import React, { useEffect, useState } from "react";

function Alt() {
  const [rudaSrc, setRudaSrc] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [counter, setCounter] = useState(0);
  const [currWord, setCurrWord] = useState("ruda")
  const [pdfLink, setPdfLink] = useState(
    "https://www.purkynka.cz/wp-content/uploads/2023/10/Skolni-rad.pdf#page=3",
  );
  const rudaImgs = [
    "https://firebasestorage.googleapis.com/v0/b/picture-database.appspot.com/o/images%2Fruda.png?alt=media",
    "https://firebasestorage.googleapis.com/v0/b/picture-database.appspot.com/o/images%2Fruda1.png?alt=media",
    "https://cdn.discordapp.com/attachments/909721095328890930/1234417024348721233/gamer.png?ex=663c8570&is=663b33f0&hm=4003427e2b7551aaece1a226f94a64ba5a12cef5b03de3a23194f4e2af2cfd6b&",
    "https://media.discordapp.net/attachments/718141591583195237/1200115128939577404/kamarat.gif?ex=663c510f&is=663aff8f&hm=4b8d5918a99356bbcdb60d46e8a330fcadcc1cae431e98d74de689014e95638e&"
  ];
  const rudaHlasky = [
    "BUDEŠ jíst sóju a BUDEŠ sťastný",
    "Svoboda je otroctví.",
    "Válka je mír.",
    "Nevědomost je síla",
    "Velký Ruda tě sleduje",
    "Centrum informačních technologií Jihomoravského kraje",
    "mrdka v potrubi",
    "židi ve zdech",
    "ruda je antikrist",
    "nenavidim antikrista",
    "Na počátku Ruda stvořil nebe a zemi. Země pak byla pustá a prázdná, nad propastí byla tma a nad vodami se vznášel Rudův Duch. ",
    "estrogen v kávě",
    "100% real kafe v automatech",
    "holkoklučičí škola",
    "edupage incident",
    "dotace na sóju",
    "indianske pohrebiste pod skolou",
    "kantyna monopol",
    "tahle skola me jednou zabije"
  ]
  useEffect(() => {
    let x = false;
    setCounter(counter + 1);
    console.log(rudaSrc);

    setInterval(() => {
      x = !x;
      setRudaSrc(x);
      console.log(coords)
      setCurrWord(rudaHlasky[Math.floor(Math.random() * rudaHlasky.length)])
      console.log(rudaHlasky)

      // click()
    }, 1000);

    const handleWindowMouseMove = (event) => {
      setCoords({
        x: event.clientX,
        y: event.clientY,
      });
    };
    window.addEventListener("mousemove", handleWindowMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleWindowMouseMove);
    };
  }, []);

  function click() {
    if (counter >= 22) {
      setCounter(0);
      return;
    }
    setCounter(counter + 1);
  }

  return (
    <div onClick={click} className="altCoolPage">
      <p className="bgSchizoText">"Na počátku Ruda stvořil nebe a zemi. ²Země pak byla pustá a prázdná, nad propastí byla tma a nad vodami se vznášel Boží Duch. ³Ruda řekl: „Ať je světlo!“ – a bylo světlo. ⁴Ruda viděl, že světlo je dobré, a Ruda oddělil světlo od tmy. ⁵Ruda nazval světlo „den“ a tmu nazval „noc“. Byl večer a bylo ráno, den první. ⁶Ruda řekl: „Ať je uprostřed vod obloha, aby oddělovala vody od vod!“ ⁷Ruda učinil oblohu a oddělil vody pod oblohou od vod nad oblohou – a stalo se. ⁸Ruda nazval oblohu „nebe“ a byl večer a bylo ráno, den druhý. ⁹Ruda řekl: „Ať se vody pod nebem shromáždí na jedno místo a ať se ukáže souš!“ – a stalo se. ¹⁰Ruda nazval souš „země“ a shromáždění vod nazval „moře“. A Ruda viděl, že je to dobré. ¹¹Tehdy Ruda řekl: „Ať země zplodí zeleň: byliny nesoucí semeno a různé druhy plodných stromů nesoucích ovoce, v němž je jejich semeno na zemi!“ – a stalo se. ¹²Země vydala zeleň: různé druhy bylin nesoucích semeno a různé druhy stromů nesoucích ovoce, v němž je jejich semeno. A Ruda viděl, že je to dobré. ¹³Byl večer a bylo ráno, den třetí. ¹⁴Ruda řekl: „Ať jsou na nebeské obloze svítilny, aby oddělovaly den od noci; budou znameními k určování období, dnů a let; ¹⁵budou na nebeské obloze svítilnami k osvětlování země!“ – a stalo se. ¹⁶Ruda učinil dvě veliké svítilny: větší, aby vládla dni, a menší, aby vládla noci; učinil rovněž hvězdy. ¹⁷Ruda je umístil na nebeské obloze, aby osvětlovaly zemi, ¹⁸aby panovaly nade dnem a nocí a aby oddělovaly světlo od tmy. A Ruda viděl, že je to dobré. ¹⁹Byl večer a bylo ráno, den čtvrtý. ²⁰Ruda řekl: „Ať se vody zahemží množstvím živočichů a nad zemí pod nebeskou oblohou ať létají ptáci!“ ²¹Ruda tedy stvořil velké mořské obludy a všemožné druhy čilých živočichů, jimiž se zahemžily vody, i všemožné druhy okřídlených ptáků. A Ruda viděl, že je to dobré. ²²Ruda jim požehnal a řekl: „Ploďte a množte se a naplňte vody v mořích; také ptáci ať se rozmnožují na zemi.“ ²³Byl večer a bylo ráno, den pátý. ²⁴Ruda řekl: „Ať země vydá různé druhy živočichů: různé druhy dobytka, drobné havěti i polní zvěře!“ – a stalo se. ²⁵Ruda učinil různé druhy polní zvěře a dobytka i všemožné druhy zemské havěti. A Ruda viděl, že je to dobré. ²⁶Tehdy Ruda řekl: „Učiňme člověka k našemu obrazu, podle naší podoby! Ať panují nad mořskými rybami, nad nebeským ptactvem, nad dobytkem, nade vší zemí i nad veškerou havětí lezoucí po zemi.“ ²⁷Ruda stvořil člověka ke svému obrazu, k obrazu Božímu stvořil jej: jako muže a ženu stvořil je. ²⁸A Ruda jim požehnal. Ruda jim řekl: „Ploďte a množte se, naplňte zem, podmaňte si ji a panujte nad mořskými rybami, nad nebeským ptactvem i nad každým živočichem lezoucím po zemi.“ ²⁹Ruda také řekl: „Hle, dal jsem vám všechny byliny vydávající semeno na celém povrchu země i každý strom, na němž je ovoce vydávající semeno. To vám bude za pokrm. ³⁰Také veškeré polní zvěři, všem nebeským ptákům i všemu, co leze po zemi, zkrátka všemu, co má v sobě život, jsem dal za pokrm všechny zelené byliny“ – a stalo se. ³¹Ruda viděl všechno, co učinil, a hle, bylo to velmi dobré! Byl večer a bylo ráno, den šestý."</p>
      <img className="rudaImg" alt="ruda" src={rudaImgs[rudaSrc ? 1 : 0]} />
      <h1 style={{ position: "fixed", top: coords.x, left: coords.y }}>{currWord}</h1>

    </div>
  );
}

export default Alt;
