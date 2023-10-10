import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Meta from "../components/Meta";

function Secret() {
    const [isVis, setIsVis] = useState(false)

    const [lang, setLang] = useState(false);
    useEffect(() => {
        setLang(localStorage.getItem("language") === "EN" ? false : true);

        const handleKeyPress = (event) => {
            if (event.key === 'b' || event.key === 'B') {
                setIsVis(true)
            }
        };
        document.addEventListener('keydown', handleKeyPress);
    }, []);

    return (
        <>
            <div className={isVis ? 'content' : 'no'}>
                <Link href={"https://addons.mozilla.org/en-US/firefox/addon/bitwarden-password-manager/"}>bitwarden</Link>
                <Link href={"https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/"}>ublock</Link>
                <Link href={"https://sspbrno.edupage.org/user/"}>edupage</Link>
                <Link href={"https://teams.microsoft.com/"}>teams</Link>
            </div>
            <div className="content notFound">
                <Meta title={+lang ? "Stránka nenalezena." : "Page not found."} />
                <h3 className="center">404</h3>
                <br />
                <h1 className="center">
                    {+lang
                        ? "Jaj! Stránka nenalezena."
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