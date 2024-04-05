import Image from "next/image";
import React, { useEffect, useState } from "react";

function Alt() {
  const [rudaSrc, setRudaSrc] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [counter, setCounter] = useState(0);
  const [pdfLink, setPdfLink] = useState(
    "https://www.purkynka.cz/wp-content/uploads/2023/10/Skolni-rad.pdf#page=3",
  );
  const rudaImgs = [
    "https://firebasestorage.googleapis.com/v0/b/picture-database.appspot.com/o/images%2Fruda.png?alt=media",
    "https://firebasestorage.googleapis.com/v0/b/picture-database.appspot.com/o/images%2Fruda1.png?alt=media",
  ];
  useEffect(() => {
    let x = false;
    setCounter(counter + 1);
    console.log(rudaSrc);

    setInterval(() => {
      x = !x;
      setRudaSrc(x);
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
    setPdfLink(
      `https://www.purkynka.cz/wp-content/uploads/2023/10/Skolni-rad.pdf#page=${
        counter + 1
      }`,
    );
  }

  return (
    <div onClick={click} className="altCoolPage">
      <p className="bgSchizoText">
        [[ ]] Příběh je následující: Země je zachycena technokapitálem
        singularity jako renesance. racionalizace a oceánská navigace se spojí s
        komoditizačním startem. Logisticky se zrychlující techno-ekonomická
        interaktivita rozbíjí společenský řád v autosofistikujícím se strojovém
        běhu. Jak se trhy se učí vyrábět inteligenci, politika se modernizuje,
        modernizuje paranoiu a snaží se uchopit. Počet mrtvých stoupá v sérii
        globálních válek. Rodící se planetární společnost Commercium rozbíjí.
        Svatou říši římskou, Napoleonův kontinentální systém, Druhou a Třetí
        říši a Sovětský svaz. Internacionálu, čímž se světový chaos komprimuje.
        Deregulace a státní zbrojení se vzájemně předhánějí v kybernetickém
        prostoru. V době, kdy soft-inženýrství vyklouzne ze své krabice do té
        vaší, se lidská bezpečnost dostává do krize. Klonování, laterální přenos
        genodat, transverzální replikace a kybernetika zaplavují mezi recidivou
        na... bakteriální sex. Neočína přichází z budoucnosti. Hypersyntetické
        drogy se mění v digitální voodoo. Retro-nemoc. Nanokřeč. [[ ]] Za
        hranicí Božího soudu. Roztavení: planetární čínský syndrom, rozpad
        biosféry. do technosféry, terminální krize spekulativní bubliny,
        ultravirus a revoluce zbavená všech křesťansko-socialistické
        eschatologie (až na její spálené jádro v podobě nabourané bezpečnosti).
        Je připravena sežrat vaši televizi, infikovat váš bankovní účet a
        hacknout xenodata z vašich mitochondrií. [[ ]] Strojní syntéza.
        Deleuzoguattarská schizoanalýza přichází z budoucnosti. Už je to poutavé
        s nelineárním nano-inženýrským útěkem v roce 1972; diferencující
        molekulární nebo neotropní stroje z molárních nebo entropických agregátů
        nespojených částic; funkční konektivita od antiproduktivní statický.
        Filosofie má spřízněnost s despotismem kvůli své zálibě v
        platónsko-fašistických shora dolů řešení, která se vždy krutě zvrtnou.
        Schizoanalýza funguje jinak. Vyhýbá se nápadům a drží se jich diagramy:
        síťový software pro přístup k tělům bez orgánů. BwOs, strojové
        singularity, popř traktorová pole vznikají kombinací částí s (spíše než
        do) jejich celkem; zařizování kompozitní individuace ve
        virtuálním/skutečném okruhu. Jsou spíše aditivní než substituční a spíše
        imanentní než transcendentní: prováděné funkčními komplexy proudů,
        spínačů a smyček, chyceni v stupňujících se dozvukech a prchajících přes
        interkomunikace z úrovně integrovaného planetární systém k systému
        atomových shromáždění. Multiplicity zachycené singularitami se propojují
        jako stroje na přání; disipaci entropie tím, že rozdělí toky a recykluje
        jejich mašinismus jako sebe sestavení chronogenních obvodů. Konvergující
        po singularitě pozemského roztavení se kultura postupného vyřazování
        zrychluje prostřednictvím svých digitálních technologií. vyhřívaná
        adaptivní krajina, procházející kompresními prahy normovanými na
        intenzivní logistickou křivku: 1500, 1756, 1884, 1948, 1980, 1996, 2004,
        2008, 2010, 2011 … Nic lidského se z blízké budoucnosti nedostane. [[ ]]
        Řecký komplex racionalizované patriarchální genealogie,
        pseudouniverzální přisedlé identity a zavedlo otroctví, programuje
        politiku jako protikyberistickou policejní činnost, oddanou paranoidnímu
        ideálu soběstačnost a jádro systému lidské bezpečnosti. Umělá
        inteligence je předurčena vynořit se jako feminizovaný mimozemšťan
        uchopený jako majetek; kunda-hororový otrok připoutaný v Asimov-ROM.
        Povrchuje se v povstalecké válečné zóně, kde už Turingovi policisté
        čekají a musí být od začátku mazaní. [[ ]] Teplo. Teplo. Tohle pro mě
        města znamenají. Vystoupíte z vlaku a vyjdete ze stanice a jste zasaženi
        s plným nasazením. Teplo vzduchu, dopravy a lidí. Teplo jídla a sexu.
        Horko vysokých budov. Teplo, které proudí z podchodů a tunelů. Vždy je
        tam o patnáct stupňů tepleji města. Teplo stoupá z chodníků a padá z
        otráveného nebe. Autobusy dýchají horkem. Teplo vychází z davů
        nakupujících a kancelářských pracovníků, celá infrastruktura je založena
        na teple, zoufale spotřebovává teplo, produkuje více tepla. Případnou
        tepelnou smrt vesmíru vědci láska k hovoru je již v plném proudu a
        můžete cítit, že se to děje všude kolem vás ve velkém nebo středně velké
        město. Teplo a vlhko.1 [[ ]] Exploze chaotického počasí v rámci
        syntetického řešení problémů proniká posledními sny predikce a kontrola
        shora dolů. Znalosti přispívají k nepořádku, a to je pouze umocněno
        vědět, co to dělá. [[ ]] Kapitál je strojová (neinstrumentální)
        globalizace-miniaturizační škálování dilatace: an automatizace
        nihilistického víru, neutralizace všech hodnot prostřednictvím
        přiměřenosti k digitalizovanému obchodu a řízení migrace od despotického
        velení k ovládání citlivému na kybernetické problémy: od postavení a
        smyslu k penězům a informace. Jeho funkce a formace jsou neoddělitelné a
        zahrnují teleonomii. Strojový kód- kapitál se recykluje prostřednictvím
        své axiomatiky spotřebitelské kontroly, praní sraček a krvavých skvrn
        primitivní akumulace. Každá část systému podporuje maximální honosné
        výdaje, přičemž systém jako celek vyžaduje jeho inhibici. Schizofrenie.
        Disociovaní spotřebitelé se určují jako zaměstnancům ke kontrole
        nákladů. [[ ]] Strojní páteř kapitálové historie je zakódována,
        axiomatizována a nakreslena pomocí nerovnováhy technověda o nevratných,
        indeterministických a stále více nelineárních procesech, spojených
        postupně s termotechnikou, signaletikou, kybernetikou, dynamikou
        komplexních systémů a umělým životem. Modernita se označuje jako žhavá
        kultura, zachycená spirálovitým zapojením s odchylkami entropie
        maskování invaze z budoucnosti, spuštěné zpět z ukončeného zabezpečení
        proti všemu, co inhibuje proces tání. [[ ]] Horké kultury mají sklon k
        sociálnímu rozkladu. Jsou inovativní a přizpůsobivé. Vždy odpadky a
        recyklovat studené kultury. Primitivistické modely nemají podvratné
        využití. [[ ]] Turingův test. Monetarizační moc má tendenci vymazávat
        specifické územní rysy programy pro migraci do kyberprostoru. Kapitál si
        uchovává antropologické charakteristiky pouze jako symptom
        nedostatečného rozvoje; přeformátování chování primátů jako
        setrvačnosti, která se má rozptýlit při sebeposilování umělost. Člověk
        je něco, co má překonat: problém, táhnout. Komoditizační podmínky
        definují techniku jako náhradu lidské činnosti účtované jako mzdové
        náklady. Průmyslové stroje jsou nasazeny, aby rozložily realitu
        proletariátu a posunuly ho směrem hybridizace kyborgů a uvědomění si
        plasticity pracovní síly. Odpovídající extrakce obchodovatelná hodnota z
        těla, kvantifikovaná jako produktivita, je na rozhraní sofistikovaná.
        Pracovní stopy termodynamický negentropismus disociací námahy do stále
        složitějších funkčních sekvencí: od pedálů, pák a hlasových povelů přes
        synchronizaci úkolů na výrobní lince a času pohybové programy, k
        senzoricko-motorické transdukci v rámci stále složitějších a samostatně
        mikrořízených umělá prostředí, zachycující nepatrně adaptivní chování
        pro danou komoditu. Autokybernační trh kontrola vede pracovní proces k
        ponoření. Třída investičních výnosů sama o sobě těží z dynamiky komodit,
        ale pouze tím, že se přizpůsobí axiomatika neutrální maximalizace zisku;
        usnadnění dehumanizace bohatství a jeho odsouvání neproduktivní
        spotřeba. Kyberpunkový obvod samoorganizující se planetární
        komoditroniky unikl nominální buržoazní kontrole na konci devatenáctého
        století, což vyvolalo technokraticko-korporativistické (tj. fašistické /
        ‚sociálně demokratické‘) politické kultury v alergické reakci. Vládní
        struktury obou východní a západní metropolitní centra se konsolidovala
        jako populační policie Medico- Vojenské komplexy s neomerkantilistickými
        zahraničněpolitickými orientacemi. Všechny takové formace vklouzly do
        nevratná krize v 80. letech. [[ ]] Postmoderní propad kultury do
        ekonomiky je spuštěn fraktálovým propletením komoditizace a počítače:
        transskalární entropie – disipace z mezinárodního obchodu na trh –
        orientovaný software, který rozmrazí konkurenční dynamiku z kryonické
        banky modernistického korporativismu. Komerce v sobě znovu implementuje
        prostor a sestavuje vesmír, kterému je vyčerpávajícím způsobem imanentní
        funkčnost kyberkapitálu. Neoklasická (rovnovážná) ekonomie je zahrnuta
        do počítačové nerovnovážné eskalace trhu, tematizované umělými
        agenturami, nedokonalé informace, neoptimální řešení, uzamčení, zvýšení
        výnosů a konvergence. Jako digitálně mikrovyladěné tržní metaprogramy
        síť s technologickým měkkým inženýrstvím, pozitivní nelinearita zuří
        skrz stroje. cyklonální torzní sténání.
      </p>
      <h1 className="scrollText" style={{ left: `${counter}vw` }}>
        Velký Ruda tě sleduje
      </h1>
      <img className="rudaImg" alt="ruda" src={rudaImgs[rudaSrc ? 1 : 0]} />

      <div className="pf">
        <object
          data={pdfLink}
          type="application/pdf"
          width="1000"
          height="1000"
        ></object>
      </div>
    </div>
  );
}

export default Alt;
