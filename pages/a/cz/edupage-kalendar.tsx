import React from "react";
import Meta from "../../../components/Meta";

function Sewer() {
    return (
        <div className="content">
            <Meta title="Edupage v Kalendáři" />

            <article>
                <h1>Jak si přidat Edupage rozvrh do Kalendáře</h1>
                <p>Taky nenávidíte otvírat vždy Edupage, když chcete pouze vědet ve které učebně vůbec sakra jste?
                    Pokud si váš kalendář prostě synchonizujete s vaším Edupage rozvrhem, budete vědět váš aktuální rozvrh i offline.</p>
                <h2>1. Získejte svůj Webcal odkaz</h2>
                <div className="imgNavod">
                    <p>1a. Jděte do nastavení svého profilu</p>
                    <img src="https://firebasestorage.googleapis.com/v0/b/personalsite-f2369.appspot.com/o/img%2Fnavod1.png?alt=media" alt="" />
                    <img src="https://firebasestorage.googleapis.com/v0/b/personalsite-f2369.appspot.com/o/img%2Fnavod2.png?alt=media" alt="" />
                    <br />
                    <p>1b. Rozklikněte <i>Nastavení kalendáře</i></p>
                    <img src="https://firebasestorage.googleapis.com/v0/b/personalsite-f2369.appspot.com/o/img%2Fnavod3.png?alt=media" alt="" />
                    <br />
                    <p>1c. Klikněte <i>Aktivovat Webcal</i></p>
                    <img src="https://firebasestorage.googleapis.com/v0/b/personalsite-f2369.appspot.com/o/img%2Fnavod4.png?alt=media" alt="" />
                    <br />
                    <p>1d. Zkopírujte svůj Webcal odkaz</p>
                    <img src="https://firebasestorage.googleapis.com/v0/b/personalsite-f2369.appspot.com/o/img%2Fnavod5.png?alt=media" alt="" />
                </div>
                <h2>2. Vložte odkaz do svého oblíbeného kalednářového programu</h2>
                <h3>Google Kalendář</h3>
                <ol>
                    <li>Jděte do nastavení</li>
                    <li>Jděte do kolonky Přidat kalendář</li>
                    <li>Jděte do kolonky Z adresy URL</li>
                    <li>Vložte odkaz a klikněte Přidat kalendář</li>
                </ol>
                <p>Pokud používáte jiný kalendář postup bude podobný</p>
            </article>
        </div>
    );
}

export default Sewer;
