import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Meta from "../components/Meta";

function Secret() {
    const [isVis, setIsVis] = useState(false)

    const [lang, setLang] = useState(false);
    const links = [
        "https://materialy.cekuj.net/",
        "https://student.sspbrno.cz/~odehnal.lukas",
        "https://student.sspbrno.cz/",
        "https://student.sspbrno.cz/sftp/",
        "https://v2grw.notion.site/V2-GRW-Podm-nky-kurzu-116ca7c93892809d9bb4e3fa1518985b",
        "https://gitlab.com/-/ide/project/lukascobit/obsidian-git-sync/edit/master/-/"


          
    ]
    useEffect(() => {
        setLang(localStorage.getItem("language") === "EN" ? false : true);

        const handleKeyPress = (event: any) => {
            if (event.key === 'b' || event.key === 'B') {
                setIsVis(true)
            }
        };
        document.addEventListener('keydown', handleKeyPress);
    }, []);

    return (
        <>
            <div className={isVis ? 'content' : 'no'}>
                <ul>
                    <li><Link href={"https://addons.mozilla.org/en-US/firefox/addon/bitwarden-password-manager/"}>bitwarden - firefox</Link></li>
                    <li><Link href={"https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/"}>ublock - firefox</Link></li>
                    <li><Link href={"https://chromewebstore.google.com/detail/bitwarden-free-password-m/nngceckbapebfimnlniiiahkandclblb"}>bitwarden - chrome</Link></li>
                    <li><Link href={"https://chromewebstore.google.com/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm"}>ublock - chrome</Link></li>
                    <li><Link href={"https://divear.me/timer"}>timer</Link></li>
                    <li><Link href={"https://stravovani.sspbrno.cz/faces/login.jsp"}>iCanteen</Link></li>
                    <li><Link href={"https://sspbrno.edupage.org/user/"}>edupage </Link></li>
                    <li><Link href={"https://teams.microsoft.com/"}>teams </Link></li>
                    <li><Link href={"/aboutme#name"}>note</Link></li>



                    <h1><Link href={"https://sspbrno-my.sharepoint.com/:p:/r/personal/odehnal_lukas_purkynka_cz/_layouts/15/Doc.aspx?sourcedoc=%7BE7B761DB-854D-442C-8827-2C316AA39D6E%7D&file=CEJ%20ceska%20hudba%2090.%20let.pptx&action=edit&mobileredirect=true&DefaultItemOpen=1&wdOrigin=APPHOME-WEB.DIRECT%2CAPPHOME-WEB.JUMPBACKIN&wdPreviousSession=786160de-9ee3-4c1a-8aaa-39a2bf543270&wdPreviousSessionSrc=AppHomeWeb&ct=1734032207036"}>PREZENTACE CEJ</Link></h1>
                    <h1><Link href={"https://sspbrno-my.sharepoint.com/:p:/g/personal/odehnal_lukas_purkynka_cz/EbFcR1HtHLlHuv1bzayOJh4Bs6I5UkvfEwNBLku3-cHkZg?e=wsddz3"}>PREZENTACE ZPV</Link></h1>
                    <h1><Link href={"https://sspbrno-my.sharepoint.com/:p:/g/personal/odehnal_lukas_purkynka_cz/EVeMBeBUOyBJqN8milJptBMBY8y7ILgprK-z3g4zL-6fQQ?e=2oJQ3c"}>PREZENTACE EKO</Link></h1>

                    <br />
                    <div className="exactLinks">
                        {
                            links.map((e, i) => {
                                return (
                                    <li key={i}><Link href={e}>{e}</Link></li>
                                )
                            })
                        }
                    </div>
                </ul>

            </div>
            <div className="content notFound">
                <Meta title={+lang ? "Stránka nenalezena." : "Page not found."} />
                <h3 className="center">404</h3>
                <br />
                <h1 className="center">
                    {+lang
                        ? "Stránka nenalezena."
                        : "Oops! That page can’t be found."}
                </h1>
                <br />
                <button
                    onClick={() => (location.href = "/")}
                    className="center centerButton"
                >
                    {+lang ? "Zpět na hlavní stránku" : "Back to the main page"}
                </button>
            </div>
        </>
    )
}

export default Secret
