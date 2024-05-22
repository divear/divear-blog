import Image from "next/image";
import React, { useEffect, useState } from "react";

function Alt() {
  const [rudaSrc, setRudaSrc] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [counter, setCounter] = useState(0);
  const [currWord, setCurrWord] = useState("ruda")
  const [colorBg, setColorBg] = useState("#000000")
  const [color, setColor] = useState("#000000")
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
    "tahle skola me jednou zabije",
    "Purkynka je Babylon",
    "Kdo ovládá minulost, ovládá budoucnost. Kdo ovládá přítomnost, ovládá minulost.",
    "doc. RNDr. Aleš Ruda, Ph.D., MBA",
    "NEDA SI NEKDO KAVU? UDELAL JSEM CERSTVOU KAVU!",
    "VUT LAN😶",
    "mrtvoly zahrabané v doskokovém pískovišti",
    "Ruda je bílej kůň",
    "purkynka je pod cryptokratickou krutovládou",
    "ruda je agent babylonu",
    "trest smrti vykonavan na pozemku skoly"
  ]
  useEffect(() => {
    let x = false;
    setCounter(counter + 1);
    // fetch('https://cors-anywhere.herokuapp.com/https://bible.helloao.org/api/ces1613/GEN/1.json')
    //   .then(request => request.json())
    //   .then(chapter => {
    //     console.log('Genesis 1 (BSB):', chapter);
    //   });

    function getRandomColor() {
      var hex = Math.floor(Math.random() * 0xFFFFFF);
      return "#" + ("000000" + hex.toString(16)).substr(-6);
    }
    function adjustHexColor(hexColor, offset) {
      return '#' + ((parseInt(hexColor.substring(1), 16) + offset) & 0xffffff).toString(16).padStart(6, '0');
    }

    setInterval(() => {
      x = !x;
      setRudaSrc(x);
      setCurrWord(rudaHlasky[Math.floor(Math.random() * rudaHlasky.length)])
      setColorBg(getRandomColor())
      setColor(adjustHexColor(colorBg, -1))

      // click()
    }, 300);

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
    <div style={{ backgroundColor: colorBg, color: color }} onClick={click} className="altCoolPage">
      {/* <title>{currWord}</title> */}
      <p className="bgSchizoText">
        Žák pouze rámcově naplňuje kompetence a výstupy uvedené v ŠVP. Při provádění požadovaných
        intelektuálních a motorických činností je málo pohotový a má větší nedostatky. V uplatňování osvojených
        poznatků a dovedností při řešení teoretických a praktických úkolů se vyskytují závažné chyby. Při využívání
        poznatků pro výklad a hodnocení jevu je nesamostatný. V logice myšlení se vyskytují závažné chyby,
        myšlení je zpravidla málo tvořivé. Jeho ústní a písemný projev má zpravidla vážné nedostatky
        ve správnosti, přesnosti a výstižnosti. Výsledky jeho činnosti nejsou kvalitní, grafický projev je málo
        estetický. Závažné nedostatky a chyby dovede žák s pomocí učitele opravit. Při samostatném studiu má
        velké těžkosti.
        Stupeň 5 – nedostatečný
        Žák prokazuje neucelené kompetence a výstupy dané ŠVP. Jeho dovednost vykonávat požadované
        intelektuální a motorické činnosti má velmi podstatné nedostatky. V uplatňování osvojených vědomostí a
        dovedností při řešení teoretických a praktických úkolů se vyskytují velmi závažné chyby. Při výkladu a
        hodnocení jevu a zákonitosti nedovede své vědomosti uplatnit ani s podněty učitele. Neprojevuje
        samostatnost v myšlení, vyskytují se u něho časté logické nedostatky. V ústním a písemném projevu má
        závažné nedostatky ve správnosti, přesnosti a výstižnosti. Kvalita výsledku jeho činnosti a graficky projev
        jsou na nízké úrovni. Závažné nedostatky a chyby nedovede opravit ani s pomocí učitele. Nedovede
        samostatně studovat.
        6.6 Stupnice pro hodnocení ve vyučovacích předmětech s převahou praktického zaměření a v
        odborném výcviku
        Stupeň 1 – výborný
        Žák soustavně projevuje aktivní vztah k práci, k pracovnímu týmu a k praktickým činnostem. Pohotově,
        samostatně a tvořivě využívá získaných teoretických poznatků v praktické činnosti. Žák pracuje s velkým
        zájmem. Praktické činnosti vykonává pohotově, samostatně uplatňuje získané dovednosti a návyky.
        Bezpečně ovládá postupy a způsoby práce. Dopouští se jen menších chyb, výsledky jeho práce jsou bez
        závažných nedostatků. Účelně si organizuje vlastní práci, udržuje pracoviště v pořádku. Uvědoměle
        dodržuje předpisy o bezpečnosti a ochraně zdraví při práci. Hospodárně využívá materiálů a energie.
        Vzorně obsluhuje a udržuje učební zařízení a pomůcky, přístroje. Aktivně překonává vyskytující se
        překážky.
        Je samostatný a zručný.
        Stupeň 2 – chvalitebný
        Žák projevuje aktivní vztah k práci, k pracovnímu týmu a k praktickým činnostem. Samostatně, ale méně
        tvořivě a s menší jistotou využívá teoretických poznatků v praktické činnosti. Žák pracuje se zájmem.
        Praktické činnosti vykonává samostatně, v postupech a způsobech práce se nevyskytují podstatné chyby.
        Výsledky jeho práce mají drobné nedostatky. Účelně si organizuje vlastní práci, pracoviště udržuje v
        pořádku. Uvědoměle dodržuje předpisy o bezpečnosti a ochraně zdraví při práci. Při hospodárném
        využívaní materiálů a energie se dopouští malých chyb. Učební zařízení a pomůcky, přístroje obsluhuje a
        udržuje s drobnými nedostatky. Překážky v práci překonává s občasnou pomocí. Je samostatný, ale méně
        zručný.
        Stupeň 3 – dobrý
        Žákův vztah k práci, k pracovnímu týmu a k praktickým činnostem je převážně aktivní, s menšími výkyvy.
        Za pomoci učitele uplatňuje získané teoretické poznatky v praktické činnosti. Žák pracuje s menším
        zájmem. V praktických činnostech se dopouští chyb a při postupech a způsobech práce potřebuje
        občasnou pomoc učitele. Výsledky práce mají nedostatky. Vlastní práci organizuje méně účelně, udržuje
        pracoviště v pořádku. Dodržuje předpisy o bezpečnosti a ochraně zdraví při práci. Na podněty učitele je
        schopen hospodárně využívat materiálů a energie. K obsluze a údržbě učebních zařízení, pomůcek a
        přístrojů musí být častěji podněcován. Překážky v práci překonává s pomocí učitele. Je samostatný, ale
        pomalejší.
        Stupeň 4 – dostatečný
        Žák pracuje bez zájmu a žádoucího vztahu k práci, k pracovnímu týmu a k praktickým činnostem. Získaných
        teoretických poznatků dovede využít při praktické činnosti jen za soustavné pomoci učitele. V praktických
        činnostech, dovednostech a návycích se dopouští větších chyb. Při volbě postupů a způsobů práce
        potřebuje soustavnou pomoc učitele. Ve výsledcích práce má závažné nedostatky. Práci dovede
        organizovat za soustavné pomoci učitele, méně dbá o pořádek na pracovišti a na dodržování předpisů
        o bezpečnosti a ochraně zdraví při práci. Porušuje zásady hospodárnosti využívání materiálů a energie. V
        Stránka 14 z 22
        Školní řád
        obsluze a údržbě zařízení, pomůcek a přístrojů má závažné nedostatky. Překážky v práci překonává jen s
        pomocí učitele. Je pomalý a málo samostatný.
        Stupeň 5 – nedostatečný
        Žák neprojevuje zájem o práci, jeho vztah k ní, k pracovnímu týmu a k praktickým činnostem není na
        potřebné úrovni. Nedokáže ani s pomocí učitele uplatnit získané teoretické poznatky při praktické
        činnosti. V praktických činnostech, dovednostech a návycích má podstatné nedostatky. Pracovní postup
        nezvládá ani s pomocí učitele. Výsledky jeho práce jsou nedokončené, neúplné, nepřesné, nedosahují ani
        dolní hranice předepsaných ukazatelů. Práci na pracovišti si nedokáže zorganizovat, nedbá na pořádek
        na pracovišti. Neovládá předpisy o bezpečnosti a ochraně zdraví při práci. Nevyužívá hospodárně
        materiálů a energie. V obsluze a údržbě zařízení a pomůcek, přístrojů má závažné nedostatky. V případě
        děleného předmětu mezi více učitelů je žák hodnocen nedostatečně, pokud je tak hodnocen z jedné jeho
        části. Je nesamostatný, má závažné nedostatky ve všech činnostech.
        6.7 Pravidla pro výuku a hodnocení tělesné výchovy
        a) Všichni žáci jsou povinni nosit do hodin tělesné výchovy vhodný sportovní úbor a obuv. Při
        přechodu z tělocvičny do haly je zakázáno chodit ve cvičební obuvi.
        b) Při hodině tělesné výchovy je zakázáno mít na sobě ostré předměty (hodinky, řetízky, šperky
        apod.), které by mohly žáka nebo spolužáky zranit; stejně tak musí mít upraveny vlasy tak, aby byla
        dodržena bezpečnost při cvičení.
        c) Žáci jsou povinni řídit se instrukcemi pedagogů, dodržovat pravidla sportů a her, a to z důvodu své
        bezpečnosti a bezpečnosti ostatních zúčastněných. Jsou povinni dodržovat řád tělovýchovného
        zařízení, kde se výuka odehrává (nevstupovat do objektu, neopouštět objekt bez svolení
        vyučujícího, …).
        d) Žáci v rekonvalescenci jsou v hodině tělesné výchovy přítomni. Nezáleží na tom, zda se výuka
        odehrává venku či v tělocvičně (příp. na jiném místě), a tudíž tomu přizpůsobí své oblečení. Pokud
        je žák vyučujícím vyzván, plní roli pomocného organizátora či rozhodčího, dopomoci nebo záchrany
        při cvičení. Pokud zákonný zástupce písemně požádá vyučujícího o uvolnění žáka, nemusí být žák
        v hodině přítomen, zákonný zástupce za žáka v tomto případě přebírá zodpovědnost.
        e) Žáci v rekonvalescenci, kteří se z vážných zdravotních důvodů nemohou zúčastnit výuky venku či
        v tělocvičně, informují předem svého vyučujícího. Ten jim připraví činnost k prohloubení
        vědomostí a znalostí o českém i zahraničním sportovním životě (Olympijské hry, Historie sportu,
        Čeští sportovci, Národy, kultury a sport, Extrémní sporty, Čeští mistři světa apod.).
        f) Na hodiny tělesné výchovy je zakázáno nosit mobilní telefony, hry a učební pomůcky, případně jiné
        nevhodné věci a produkty. Při školních cyklistických akcích jsou žáci všech ročníků povinni používat
        cyklistickou přilbu. Taktéž je povinné používat ochrannou přilbu při jízdě na sjezdových lyžích
        a snowboardu.
        g) Další sportovní akce školy (kurzy a lyžařské výcviky) se řídí příslušnými pravidly, se kterými budou
        žáci seznámeni na začátku školního roku a před začátkem příslušné aktivity.
        h) Každý žák proto, aby byl hodnocen z předmětu tělesná výchova, musí mít splněny všechny
        předepsané sestavy, měřené atletické disciplíny, testy určené pro daný školní rok a ročník dle
        školního vzdělávacího programu a docházku.
        i) Při hodnocení tělesné výchovy se přihlíží nejen k dosaženým sportovním výsledkům, ale i
        k individuálním pohybovým schopnostem žáka, jeho aktivitě a sebeovládání, ke schopnosti
        spolupracovat s kolektivem, snaze překonávat sám sebe, a také ke sportovnímu chování v duchu
        fair play.
        j) Pokud žák nemá sportovní úbor, jeho účast se nepočítá do aktivně odcvičených hodin. V případě,
        že žák nemá aktivně odcvičeno 70 % hodin tělesné výchovy, může vyučující žáka nehodnotit. Pak
        se postupuje jako v případě nadměrné absence.
        k) V předmětu tělesná výchova ředitel uvolní žáka z vyučování na písemné doporučení registrujícího
        praktického lékaře nebo odborného lékaře. Žák není z předmětu, z něhož byl zcela uvolněn,
        hodnocen. Písemná žádost se předkládá řediteli školy prostřednictvím učitele tělesné výchovy.
        Stránka 15 z 22
        Školní řád
        6.8 Celkové hodnocení žáka
        Celkové hodnocení žáka na konci prvního a druhého pololetí vyjadřuje výsledky jeho klasifikace ve
        vyučovacích předmětech a hodnocení jeho chování. Nezahrnuje hodnocení v nepovinných předmětech.
        Prospěl s vyznamenáním
        Nemá-li v žádném vyučovacím předmětu prospěch horší než chvalitebný, průměrný prospěch z povinných
        předmětů nemá horší než 1,50 a jeho chování je velmi dobré.
        Prospěl
        Žák prospěl, nemá-li v žádném povinném vyučovacím předmětu prospěch nedostatečný.
        Neprospěl
        Žák neprospěl, má-li z některého vyučovacího předmětu prospěch nedostatečný nebo není-li žák
        hodnocen na konci druhého pololetí z některého předmětu, stejně tak v případě předmětů, které jsou
        vyučovány pouze v 1. pololetí.
        Nehodnocen
        Žák je nehodnocen, pokud ho není možné hodnotit z některého předmětu na konci prvního pololetí ani
        v náhradním termínu.
        6.9 Postup do vyššího ročníku a opakování ročníku
        Do vyššího ročníku postupuje žák, který na konci druhého pololetí prospěl.
        Nedostaví-li se žák ke zkoušce v náhradním termínu k uzavření hodnocení za druhé pololetí bez omluvy a
        do tří dnů omluvu písemně nepředloží nebo mu omluva není uznána, je žák z tohoto předmětu za druhé
        pololetí nehodnocen a v celkovém hodnocení neprospěl.
        Ředitel může žákovi, který na konci druhého pololetí neprospěl nebo nemohl být hodnocen, povolit
        opakování ročníku po posouzení jeho dosavadních studijních výsledků a důvodů uvedených v žádosti.
        Písemnou žádost o opakování ročníku podává žák po ukončení klasifikačního období na formuláři školy
        s písemným vyjádřením dosavadního třídního učitele, příp. vyjádřením ostatních vyučujících.
        Je-li žák nezletilý, je součástí žádosti zákonného zástupce i souhlas nezletilého žáka.
        Ředitel školy žákovi opakování ročníku zpravidla nepovolí, jestliže:
        a) ročník v daném oboru již opakoval,
        b) byl na konci 2. pololetí hodnocen z chování stupněm horším než velmi dobré,
        c) v průběhu roku byl podmíněně vyloučen,
        d) neprospěl z více než dvou předmětů,
        e) byl jeho průměrný prospěch za 2. pololetí horší než 3,00,
        f) v uplynulém školním roce zameškal více jak 25 % vzdělávacího procesu,
        g) z kapacitních důvodů.
        6.10 Ukončení hodnocení za 1. a 2. pololetí
        a) Za první pololetí se žákovi vydává výpis vysvědčení. Vysvědčení za první pololetí se žákovi vydá
        současně s vysvědčením za druhé pololetí.
        b) Hodnocení výsledků vzdělávání je uváděno klasifikací.
        c) V případě, že je žák rozhodnutím ředitele školy v souladu se školským zákonem zcela uvolněn
        z tělesné výchovy, uvede se místo klasifikace tělesné výchovy v pedagogické dokumentaci a na
        vysvědčení „uvolněn“.
        d) Pokud žák/zákonný zástupce žáka žádá o uvolnění z vyučování v předmětu tělesná výchova,
        zpravidla na začátku klasifikačního období (pololetí), je v souladu s platným právním předpisem
        povinen doložit k žádosti lékařský posudek. Bez doloženého platného lékařského posudku nebude
        žádost o uvolnění z vyučování v předmětu tělesná výchova vyřízena.
        e) V případě, že je žákovi rozhodnutím ředitele školy pro dané pololetí v některém předmětu uznáno
        dosažené vzdělání, uvede se místo klasifikace daného předmětu v pedagogické dokumentaci a na
        Stránka 16 z 22
        Školní řád
        vysvědčení „uznáno“ s odkazem na vysvětlivku, která bude na zadní straně vysvědčení obsahovat
        bližší podrobnosti, včetně č. j. rozhodnutí ředitele školy o uznání vzdělání. Uznává se pouze ucelené
        vzdělání žáka za dané pololetí a ročník studia v souladu s příslušnými právními předpisy, které je
        doloženo dokladem o jeho úspěšném ukončení.
        6.11 Doplnění podkladů k uzavření hodnocení za 1. a 2. pololetí
        a) Pokud žák během pololetí nevyhoví požadavkům stanoveným vyučujícím na začátku každého
        pololetí školního roku, nebo nelze-li žáka hodnotit v prvním pololetí pro závažné objektivní příčiny,
        zejména doložené zdravotními důvody, může být žák z daného předmětu nehodnocen. V tomto
        případě je žákovi stanoven termín pro doplnění podkladů k uzavření hodnocení (pro 1. pololetí do
        31. března, pro 2. pololetí do 30. června) formou dodatečné zkoušky, zpracováním samostatné
        práce nebo prokázáním praktických dovedností. Ze závažných důvodů může být v odůvodněných
        případech stanoven náhradní termín pro doplnění podkladů pro uzavření hodnocení (pro 1.
        pololetí do 30. června, pro 2. pololetí do 30. srpna, respektive 30. září). Pokud žák v 1. pololetí tyto
        podklady nedoplní ve stanovených termínech, zůstává z předmětu nehodnocen. V případě
        nehodnocení předmětu ve 2. pololetí pak žák celkově neprospěl.
        b) Doplnění podkladů k uzavření hodnocení se provádí na návrh vyučujícího, pokud je absence žáka
        vyšší než 25 % odučených hodin daného předmětu, nebo pokud žák nesplní minimální požadavky
        na hodnocení z daného předmětu.
        c) Třídní učitel sdělí žákovi prokazatelně (písemně) termín konání dodatečné zkoušky z důvodu
        uzavření hodnocení za dané pololetí v náhradním termínu. Organizaci dodatečných zkoušek a
        doplnění podkladů k uzavření hodnocení za 1. a 2. pololetí koordinuje zástupce ředitele pro
        pedagogickou oblast.
        d) Přezkoušení provádí vyučující pro daný předmět a přísedícím je zpravidla předseda předmětové
        komise, může jím být také učitel, který má kvalifikaci pro týž nebo příbuzný vyučovací předmět.
        Dodatečná zkouška může být realizována také formou ověření požadovaných znalostí a dovedností
        žáka před třídou bez přítomnosti přísedícího. O formátu dodatečné zkoušky rozhoduje na návrh
        příslušné předmětové komise daný vedoucí odborné sekce. Ředitel školy také stanoví podrobnosti
        rozsahu dodatečné zkoušky.
        e) Výsledek dodatečné zkoušky sdělí zkoušející žákovi v den konání zkoušky. Tato známka je součástí
        výsledného hodnocení žáka v aktuálním klasifikačním období, do jehož celkového výsledku
        započítávají již získané podklady pro klasifikaci žáka. Celkový stupeň hodnocení stanovuje
        zkoušející učitel, který výsledek sdělí neprodleně žákovi a zapíše do pedagogické dokumentace.
        6.12 Hodnocení žáků se speciálními vzdělávacími potřebami
        a) Žákem se speciálními vzdělávacími potřebami se rozumí žák, který k naplnění svých vzdělávacích
        možností nebo k uplatnění svých práv na rovnoprávném základě s ostatními potřebuje poskytnutí
        podpůrných opatření.
        b) Podpůrnými opatřeními se rozumí nezbytné úpravy ve vzdělávání a školských službách odpovídající
        zdravotnímu stavu, kulturnímu prostředí nebo jiným životním podmínkám žáka.
        c) Škola poskytuje účinnou podporu všem žákům s potřebou podpůrných opatření.
        d) Podpůrná opatření prvního stupně může poskytnout škola i bez doporučení školského
        poradenského zařízení.
        e) Podmínkou poskytování podpůrného opatření druhého až pátého stupně školou je vždy předchozí
        písemný informovaný souhlas zletilého žáka nebo zákonného zástupce nezletilého žáka.
        f) Průběh a způsob hodnocení ve vzdělávání žáků se speciálními vzdělávacími potřebami nebo podle
        individuálního vzdělávacího plánu bude vycházet z doporučení školského poradenského zařízení
        pro vzdělávání žáka se speciálními vzdělávacími potřebami ve škole.
        g) Žáci se speciálními vzdělávacími potřebami mají nárok na poskytování podpůrných opatření školou
        a školním poradenským pracovištěm i při distančním vzdělávání.
        h) Zákonní zástupci i žáci jsou průběžně informování o možných konzultacích s psycholožkou
        a s ostatními členy školního poradenského pracoviště na stránkách školy (www.purkynka.cz).
        V této souvislosti ŠPP poskytuje:
        - usnadnění spolupráce a komunikace se školou a zákonnými zástupci
        Stránka 17 z 22
        Školní řád
        - podporu vzdělávání a sociálního začleňování žáků z odlišného sociokulturního prostředí
        - podporu nadaných žáků
        - zapůjčení pomůcek dle možností školy.
        6.13 Komisionální zkouška
        Žák koná komisionální zkoušku (KS) v následujících případech:
        a) koná-li opravnou zkoušku,
        b) požádá-li zletilý žák nebo zákonný zástupce nezletilého žáka o jeho přezkoušení z důvodu
        pochybnosti o správnosti hodnocení,
        c) jestliže komisionální přezkoušení nařídí ředitel školy po zjištění, že vyučující porušil stanovená
        kritéria či pravidla hodnocení.
        Ředitel stanoví podrobnosti týkající se konání komisionální zkoušky, včetně složení komise pro
        komisionální zkoušku, termínu konání zkoušky a způsobu vyrozumění žáka a zákonného zástupce
        nezletilého žáka o výsledcích zkoušky v souladu s platnými právními předpisy. Žák může konat v jednom
        dni nejvýše jednu komisionální zkoušku.
        Opravná zkouška
        a) Žák, který na konci druhého pololetí neprospěl nejvýše ze dvou povinných předmětů (žák, který
        neprospěl na konci prvního pololetí nejvýše ze dvou předmětů vyučovaných pouze v prvním
        pololetí), koná z těchto předmětů opravnou zkoušku nejdříve v měsíci srpnu příslušného školního
        roku, pokud zletilý žák nebo zákonný zástupce nezletilého žáka nedohodne s ředitelem školy
        dřívější termín. V případě žáka posledního ročníku vzdělání vyhoví ředitel školy žádosti o dřívější
        termín vždy.
        b) Třídní učitel doporučí žákovi posledního ročníku studia dřívější termín konání doplňovacích
        a opravných zkoušek a informuje ho o jeho možnostech.
        c) Podmínkou konání opravných zkoušek je uzavření hodnocení za druhé pololetí, tj. vykonání všech
        dodatečných zkoušek.
        d) Opravné zkoušky jsou komisionální.
        e) Třídní učitel odpovídá za prokazatelné (písemné) sdělení stanovených termínů pro vykonání
        opravných zkoušek žákům.
        f) Žák, který nevykoná opravnou zkoušku úspěšně, nebo který se bez omluvy nedostaví a do tří dnů
        písemně nepředloží omluvu, nebo mu omluva není uznána, neprospěl.
        g) Ze závažných zdravotních důvodů doložených potvrzením příslušného lékaře může ředitel školy
        stanovit k vykonání opravné zkoušky náhradní termín nejpozději do konce září následujícího
        školního roku. Do doby vykonání opravné zkoušky navštěvuje žák nejbližší vyšší ročník.
        Komisionální zkouška z důvodu pochybnosti o správnosti hodnocení
        a) Má-li zletilý žák nebo zákonný zástupce nezletilého žáka pochybnost o správnosti hodnocení na
        konci prvního nebo druhého pololetí, může do tří pracovních dnů ode dne, kdy se o hodnocení
        prokazatelně dozvěděl, nejpozději však do tří pracovních dnů od vydání vysvědčení, požádat
        ředitele školy o přezkoumání výsledku hodnocení (§ 52, odst. 4 a § 69 odst. 9 školského zákona).
        Tato zkouška je zkouškou komisionální.
        b) Termín komisionálního přezkoušení je stanoven ředitelem školy bez zbytečného odkladu.
        c) V případě, že se žádost o přezkoumání výsledků hodnocení týká chování nebo předmětů
        výchovného zaměření, posoudí ředitel školy dodržení pravidel pro hodnocení výsledků vzdělávání.
        V případě zjištění porušení těchto pravidel ředitel školy toto hodnocení změní; nebyla-li pravidla
        porušena, výsledek hodnocení potvrdí, a to v termínu stanoveném příslušným právním předpisem.
        6.14 Rozdílová zkouška
        a) Rozdílovou zkoušku koná žák, který chce být přijat do vyššího ročníku než prvního nebo přechází
        do stejného ročníku a oboru, který studuje na škole s jiným učebním plánem (jiné rozvržení
        předmětů v jednotlivých ročnících, příp. jiný název předmětu) nebo mění obor vzdělávání.
        Stránka 18 z 22
        Školní řád
        b) Jejím obsahem je zjistit znalost učiva z nižších ročníků, případně v předmětech, ve kterých se žák
        nevzdělával nebo z maturitních předmětů, ze kterých je hodnocen stupněm dostatečný nebo
        nedostatečný.
        c) Termín, obsah a formu rozdílové zkoušky určí ředitel školy. Žák musí být hodnocen ze všech
        určených předmětů nejhůře stupněm dostatečný.
        6.15 Vedení dokumentace o hodnocení a klasifikaci žáků
        a) Dokumentace třídního učitele:
        • elektronická třídní kniha,
        • elektronický třídní výkaz.
        b) Dokumentace třídního učitele je vedena v IS EduPage. Třídní učitel/pověřený pracovník
        zaznamenává do platné dokumentace vyučovací předmět, z něhož byla povolena opravná zkouška
        nebo zkouška v náhradním termínu, její datum a její hodnocení.
        c) Zápisy do třídní knihy v době distanční výuky budou prováděny obvyklým způsobem podle
        k tomuto účelu připraveného náhradního rozvrhu.
        d) Absence bude posuzována podle zapojení se do vzdělávání a podle výstupů, nikoli podle doby
        vzdělávacích aktivit.
        7 Podmínky ukládání výchovných opatření
        7.1 Výchovná opatření
        Výchovná opatření jsou:
        a) pochvaly nebo jiná ocenění,
        b) kázeňská opatření, která jsou specifikována v příloze školního řádu.
        Pravidla chování žáků jsou stanovena školním řádem a jednotlivá výchovná opatření se řídí následujícím
        rámcem:
        a) Za vynikající studijní výsledky, reprezentaci školy, vzornou docházku a podobně může být žákovi
        udělena pochvala třídního učitele, nebo pochvala ředitele školy.
        b) Podle závažnosti provinění mohou být uložena kázeňská opatření: napomenutí třídního učitele,
        důtka třídního učitele, důtka ředitele školy.
        c) V případě závažných provinění může ředitel školy rozhodnout o podmíněném vyloučení nebo
        vyloučení ze školy.
        d) Napomenutí a důtku třídního učitele ukládá třídní učitel podle míry porušení pravidel stanovených
        školním řádem.
        e) Udělení či uložení výchovného opatření neprodleně oznámí třídní učitel školní matrice, jejím
        prostřednictvím řediteli školy.
        f) Třídní učitel neprodleně oznámí udělení pochvaly, uložení napomenutí nebo důtky a jeho důvody
        prokazatelným způsobem žákovi a zákonnému zástupci nezletilého žáka.
        g) Důtka ředitele školy, podmíněné vyloučení a vyloučení ze školy jsou v souladu s § 31 školského
        zákona v pravomoci ředitele školy. O návrhu na uložení důtky ředitele školy a zahájení správního
        řízení ve věcech podmíněného vyloučení a vyloučení ze školy informuje ředitel pedagogickou radu
        nejpozději do dvou měsíců po vydání rozhodnutí.
        7.2 Pravidla pro udělování výchovných opatření a snížených stupňů z chování
        Tato pravidla pro udělování výchovných opatření se týkají i školních akcí mimo budovu SPŠ.
        POCHVALY
        Předají se žákovi vždy v papírové podobě.
        Stránka 19 z 22
        Školní řád
        a) Pochvalu uděluje třídní učitel zpravidla za:
        • umístění v soutěži,
        • práce pro třídní kolektiv,
        • občanská nebo školní iniciativa,
        • déletrvající úspěšná práce,
        • výborné studijní výsledky,
        • jiné aktivity a skutky dle uvážení třídního učitele.
        b) Pochvalu uděluje ředitel školy zpravidla za:
        • mimořádný projev lidskosti, záslužný nebo statečný čin,
        • občanské nebo školní iniciativy,
        • umístění v soutěžích, reprezentace školy,
        • déletrvající výborné studijní výsledky,
        • jiné aktivity a skutky dle uvážení ředitele školy.
        KÁZEŇSKÁ OPATŘENÍ
        Ke kázeňským opatřením je nutné vždy přistupovat po zvážení všech okolností. Za jeden přestupek může
        být uděleno pouze jedno kázeňské opatření. V případě mimořádně závažného přestupku lze některá
        opatření k posílení kázně přeskočit.
        K zahájení jednání o kázeňském přestupku musí být doloženy všechny písemné podklady, které se
        k přestupku váží (omluvenky a zprávy od zákonného zástupce, omluvenky od lékaře, případně další
        podklady – poznámky IS EduPage a jiné).
        a) Napomenutí třídního učitele
        • drobné porušení školního řádu (zapomínání pomůcek, neplnění úkolů, pozdní
        omlouvání absence, vyrušování při vyučování, používání chytrých zařízení – mobil,
        sluchátka, hodinky v průběhu výuky bez předchozího souhlasu vyučujícího …),
        • neomluvené pozdní příchody – 3×.
        b) Důtka třídního učitele
        • opakované drobné porušení školního řádu (zapomínání pomůcek, neplnění úkolů,
        pozdní omlouvání absence, vyrušování při vyučování …),
        • neomluvená absence v rozsahu 1–2 neomluvených hodin.
        c) Důtka ředitele školy
        • porušení pravidel používání počítačové sítě školy,
        • používání chytrých zařízení – mobil, sluchátka, hodinky při ověřování znalostí žáka,
        • neomluvená absence v rozsahu 3-5 neomluvených hodin,
        • prokázané plagiátorství,
        • soustavné a závažné porušování školního řádu.
        d) Podmíněné vyloučení ze studia
        • opakovaná neomluvená absence 21 hodin a více,
        • opakované porušování školního řádu – zejména kouření, včetně užívání výparů
        (i neobsahujících nikotin), prostřednictvím náustku (elektronická cigareta, zahřívací
        a žvýkací tabák), požívání alkoholu, omamných a psychotropních látek a jiných látek
        s psychoaktivními účinky, jejichž užívání může vést nebo se podílet na vzniku a rozvoji
        duševních poruch a poruch chování,
        • rozdělávání ohně vyjma fyzikálních a chemických pokusů prováděných v rámci výuky
        nebo jiných případů povolených školou,
        • vstupování pod vlivem návykových látek a vnášení těchto látek do areálu školy,
        Stránka 20 z 22
        Školní řád
        • vnášení zbraní, tj. nástroje nebo zařízení přizpůsobené k ranivému účinku na živý
        organismus a/nebo k ničení objektů (jakékoliv chladné zbraně – dýky, meče, sekery
        apod., jakékoliv střelné zbraně mechanické, plynové nebo palné – luky, šípy,
        vzduchovky, plynovky apod.), včetně nebezpečných látek,
        • opakované pořizování a zveřejňování fotografií, videí a audiozáznamů bez souhlasu
        školy v době výuky nebo na akcích pořádaných školou,
        • jakékoliv zvláště hrubé slovní útoky žáka vůči pracovníkům školy, včetně vulgárního
        vyjadřování, a to i prostředky elektronické komunikace,
        • fyzické napadení spolužáka nebo zaměstnance,
        • útoky na národnost, etnickou nebo náboženskou příslušnost, čest a dobrou pověst.
        • zcizení nebo opakované úmyslné poškození majetku školy a majetku nacházejícího se
        v prostorách školy, včetně svěřených učebních pomůcek,
        • plagiátorství.
        e) Vyloučení ze studia
        • porušení podmínky podmíněného vyloučení,
        • jakékoliv prokazatelné projevy šikanování žáků vůči sobě navzájem nebo vůči
        pracovníkům školy.
        • úmyslné ublížení na zdraví.
        SNÍŽENÝ STUPEŇ Z CHOVÁNÍ
        a) 2. stupeň z chování
        • neomluvená absence nad 6 hodin,
        • opakované plagiátorství,
        • jakékoliv útoky žáků vůči sobě navzájem (bude posuzováno podle stupně závažnosti),
        • kouření, včetně užívání výparů (i neobsahujících nikotin) prostřednictvím náustku
        (elektronická cigareta, zahřívací a žvýkací tabák).
        b) 3. stupeň z chování
        • neomluvená absence v rozmezí 15 až 20 hodin,
        • požívání alkoholu, omamných a psychotropních látek a jiných látek s psychoaktivními
        účinky, jejichž užívání může vést nebo se podílet na vzniku a rozvoji duševních poruch
        a poruch chování,
        • bez souhlasu školy pořizovat ve výuce a při činnostech souvisejících s výukou fotografie
        a jakékoliv audio a video záznamy,
        • úmyslné poškození majetku školy a majetku nacházejícího se v prostorách školy, včetně
        svěřených učebních pomůcek.
        8 Distanční vzdělávání
        a) Vzdělávání distančním způsobem škola uskutečňuje podle příslušného rámcového vzdělávacího
        programu v míře odpovídající okolnostem. Za těchto okolností jsou žáci povinni se vzdělávat
        distančním způsobem. Způsob poskytování vzdělávání a hodnocení výsledků distančním způsobem
        přizpůsobí škola podmínkám žáka pro toto vzdělávání.
        b) Po dobu distanční výuky bude realizace praktického vyučování omezena. V období následujícím po
        ukončení distančního způsobu vzdělávání bude výuka praktického vyučování posílena tak, aby byl
        naplněn stanovený počet hodin ŠVP za celou dobu vzdělávání.
        c) Pro potřebu online výuky v případě distančního vzdělávání probíhá výuka v prostředí MS Teams.
        d) V případě přechodu na vzdělávání distančním způsobem, mohou být žákům zapůjčeny technické
        prostředky školy pro elektronickou komunikaci (tablet, sluchátka, notebook, …), tento majetek je
        zapůjčen uzavřením smlouvy o výpůjčce.
        e) Zákonní zástupci a žáci jsou při distančním vzdělávání informováni průběžně, pravidelně
        ve stanovených intervalech, prostřednictvím:
        Stránka 21 z 22
        Školní řád
        • komunikační platformy školy (IS EduPage),
        • skupinovým chatem, videohovory, které nahrazují klasické třídní schůzky, případně písemnou
        korespondencí, telefonicky, osobní návštěvou.
        f) Velký důraz v době distanční výuky bude kladen na komunikaci s rodiči. Pro tuto komunikaci volíme
        jednotnou platformu IS EduPage a tato pravidla:
        • informace budou rozesílány v dostatečném předstihu, max. 1–2× týdně
        • vždy ve všední dny a v pracovní době
        • odpovědi na dotazy rodičů max. do dvou dnů
        • ošetřeny budou případy, kdy zákonný zástupce nemá přístup k internetu
        • upřednostníme efektivitu s cílem podporovat žáka ve studiu
        g) Režim vyučovacích hodin a přestávek, rozvrh při prezenční výuce, rozdělení žáků do tříd se nevztahuje
        na distanční vzdělávání. Zde jsou respektována specifika tohoto způsobu vzdělávání, jako jsou odlišné
        technické vybavení a možnosti žáků, náročnost dlouhodobé práce s počítačem, dlouhodobé sledování
        monitoru, nevhodné držení těla atd. Délku výuky a přestávek stanovuje pedagog při distančním
        vzdělávání podle charakteru činností s přihlédnutím k základním fyziologickým potřebám žáků, jejich
        schopnostem a reakcím.
        h) Při distančním vzdělávání nelze realizovat vzdělávání v rozsahu plánovaném pro prezenční výuku, škola
        se zaměří především na stěžejní výstupy v českém jazyce, matematice, cizím jazyce a odborných
        maturitních předmětů. Důležité bude, zda půjde o krátkodobé či dlouhodobé zákazy přítomnosti žáků
        ve školách. Distanční vzdělávání škola přizpůsobí podmínkám žáků a zajistí:
        • kombinaci synchronní a asynchronní výuky on-line prostřednictvím komunikační platformy;
        časové rozvržení takovéto výuky odpovídá zhruba časovému rozvržení prezenční výuky a bude
        stanoveno vždy pro konkrétní případy,
        • bezkontaktní off-line výukou, a to buď předáváním písemných materiálů poštou či osobním
        vyzvedáváním, příp. telefonicky,
        • individuálními konzultacemi žáků a pedagogických pracovníků,
        • komunikací pedagogických pracovníků (včetně vedení školy) se zákonnými zástupci (IS EduPage,
        email, telefon, osobní setkání),
        • zveřejněním zadávaných úkolů a následným zveřejněním správného řešení,
        • informováním žáka o jeho výsledcích, poskytováním zpětné vazby, uplatňováním zejména
        formativního hodnocení a vedení žáků k sebehodnocení,
        • pravidelnou a průběžnou komunikaci s žákem způsobem, odpovídajícím jeho možnostem,
        technickému vybavení a rodinným poměrům, průběžnou kontrolní a hospitační činností vedení
        školy.
        i) Při distančním vzdělávání, zajišťovaném jakoukoli formou, žák vždy dostane zpětnou vazbu
        o výsledcích svého úsilí a plnění zadaných úkolů. Je uplatňováno hodnocení jak klasifikačním stupněm
        (sumativní hodnocení), tak slovním hodnocením (formativní hodnocení). Po uzavření jednotlivých
        tematických celků je provedeno hodnocení výsledků žáka při osvojování učiva tohoto celku
        vyjádřeného klasifikačním stupněm.
        j) Při hodnocení distanční výuky bude přihlédnuto k vykonávané pracovní povinnosti podle krizového
        zákona nebo dobrovolné pomoci, pokud se vztahuje k oboru vzdělávání.
        k) V případě žáků, kteří během distanční výuky nespolupracovali, opakovaně se nezapojovali, neplnili
        zadávané úkoly či se neřídili pokyny učitele, přestože měli pro aktivní účast na distanční výuce
        dostatečné podmínky, bude jejich hodnocení odpovídat skutečným znalostem a dovednostem,
        kterými se žák za dané období prezentoval.
        l) Hodnocení vzdělávání při distanční výuce jsou výsledky jeho práce dokládány také např. ve formě
        osobního portfolia, v listinné příp. digitální podo
        Na počátku Ruda stvořil nebe a zemi. ²Země pak byla pustá a prázdná, nad propastí byla tma a nad vodami se vznášel Boží Duch. ³Ruda řekl: „Ať je světlo!“ – a bylo světlo. ⁴Ruda viděl, že světlo je dobré, a Ruda oddělil světlo od tmy. ⁵Ruda nazval světlo „den“ a tmu nazval „noc“. Byl večer a bylo ráno, den první. ⁶Ruda řekl: „Ať je uprostřed vod obloha, aby oddělovala vody od vod!“ ⁷Ruda učinil oblohu a oddělil vody pod oblohou od vod nad oblohou – a stalo se. ⁸Ruda nazval oblohu „nebe“ a byl večer a bylo ráno, den druhý. ⁹Ruda řekl: „Ať se vody pod nebem shromáždí na jedno místo a ať se ukáže souš!“ – a stalo se. ¹⁰Ruda nazval souš „země“ a shromáždění vod nazval „moře“. A Ruda viděl, že je to dobré. ¹¹Tehdy Ruda řekl: „Ať země zplodí zeleň: byliny nesoucí semeno a různé druhy plodných stromů nesoucích ovoce, v němž je jejich semeno na zemi!“ – a stalo se. ¹²Země vydala zeleň: různé druhy bylin nesoucích semeno a různé druhy stromů nesoucích ovoce, v němž je jejich semeno. A Ruda viděl, že je to dobré. ¹³Byl večer a bylo ráno, den třetí. ¹⁴Ruda řekl: „Ať jsou na nebeské obloze svítilny, aby oddělovaly den od noci; budou znameními k určování období, dnů a let; ¹⁵budou na nebeské obloze svítilnami k osvětlování země!“ – a stalo se. ¹⁶Ruda učinil dvě veliké svítilny: větší, aby vládla dni, a menší, aby vládla noci; učinil rovněž hvězdy. ¹⁷Ruda je umístil na nebeské obloze, aby osvětlovaly zemi, ¹⁸aby panovaly nade dnem a nocí a aby oddělovaly světlo od tmy. A Ruda viděl, že je to dobré. ¹⁹Byl večer a bylo ráno, den čtvrtý. ²⁰Ruda řekl: „Ať se vody zahemží množstvím živočichů a nad zemí pod nebeskou oblohou ať létají ptáci!“ ²¹Ruda tedy stvořil velké mořské obludy a všemožné druhy čilých živočichů, jimiž se zahemžily vody, i všemožné druhy okřídlených ptáků. A Ruda viděl, že je to dobré. ²²Ruda jim požehnal a řekl: „Ploďte a množte se a naplňte vody v mořích; také ptáci ať se rozmnožují na zemi.“ ²³Byl večer a bylo ráno, den pátý. ²⁴Ruda řekl: „Ať země vydá různé druhy živočichů: různé druhy dobytka, drobné havěti i polní zvěře!“ – a stalo se. ²⁵Ruda učinil různé druhy polní zvěře a dobytka i všemožné druhy zemské havěti. A Ruda viděl, že je to dobré. ²⁶Tehdy Ruda řekl: „Učiňme člověka k našemu obrazu, podle naší podoby! Ať panují nad mořskými rybami, nad nebeským ptactvem, nad dobytkem, nade vší zemí i nad veškerou havětí lezoucí po zemi.“ ²⁷Ruda stvořil člověka ke svému obrazu, k obrazu Božímu stvořil jej: jako muže a ženu stvořil je. ²⁸A Ruda jim požehnal. Ruda jim řekl: „Ploďte a množte se, naplňte zem, podmaňte si ji a panujte nad mořskými rybami, nad nebeským ptactvem i nad každým živočichem lezoucím po zemi.“ ²⁹Ruda také řekl: „Hle, dal jsem vám všechny byliny vydávající semeno na celém povrchu země i každý strom, na němž je ovoce vydávající semeno. To vám bude za pokrm. ³⁰Také veškeré polní zvěři, všem nebeským ptákům i všemu, co leze po zemi, zkrátka všemu, co má v sobě život, jsem dal za pokrm všechny zelené byliny – a stalo se. ³¹Ruda viděl všechno, co učinil, a hle, bylo to velmi dobré! Byl večer a bylo ráno, den šestý.</p>
      <img className="rudaImg" alt="ruda" src={rudaImgs[rudaSrc ? 1 : 0]} />
      <h1 style={{ position: "fixed", top: coords.x, left: coords.y, backgroundColor: colorBg }}>{currWord}</h1>
    </div>
  );
}

export default Alt;
