import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Meta from "../components/Meta";
import { app, getFirestore, addDoc, collection, getDocs } from "../components/firebase";
const db = getFirestore(app);

function Secret() {
    const [isVis, setIsVis] = useState(false)
    const [dbLinks, setDbLinks] = useState<any>([""])

    const [lang, setLang] = useState(false);
    const links = [
        "https://student.sspbrno.cz/~odehnal.lukas",
        "https://student.sspbrno.cz/",
        "https://student.sspbrno.cz/sftp/",


          
    ]
    useEffect(() => {
        setLang(localStorage.getItem("language") === "EN" ? false : true);
         (async function() {
            let linksDbTempList = []
            const querySnapshot = await getDocs(collection(db, "links"));
            setDbLinks(querySnapshot)
            console.log(querySnapshot)
            querySnapshot.forEach((doc) => {
              // doc.data() is never undefined for query doc snapshots
              console.log(doc.id, " => ", doc.data());
              linksDbTempList.push(doc.data())
            });
            console.log(linksDbTempList)
            setDbLinks(linksDbTempList)
    })(); 

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


                    <li>powershell Set-WinUserLanguageList -Force en-US,cs</li>


                    <hr />
                    <div className="exactLinks">
                        {
                            links.map((e, i) => {
                                return (<li key={i}><Link href={e} legacyBehavior>{e}</Link></li>);
                            })
                        }
                    </div>
                    <hr />
                    <div className='dbLinks'>
                        {
                            dbLinks.map((e, i:number) => {
                                console.log(e)
                                if(!e.url) return
                                return (<li key={i}><Link href={e.url} legacyBehavior>{e.name || e.url}</Link></li>);
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
    );
}

export default Secret
