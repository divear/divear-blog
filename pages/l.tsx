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



                    <hr />
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
