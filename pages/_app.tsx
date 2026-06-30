import "../styles/globals.css";
import "../styles/alt.css";
import type { AppProps } from "next/app";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Script from "next/script";
import { getAnalytics, app, logEvent } from "../components/firebase.js";
import { useRouter } from "next/router";
import { useEffect } from "react";
import * as gtag from "../lib/gtag";

// Tolgee imports
import { TolgeeProvider, DevTools, FormatSimple, Tolgee } from "@tolgee/react";
// Fixed paths pointing to your messages folder
import enLocale from "../messages/en.json";
import csLocale from "../messages/cs.json";

// Initialize Tolgee instance with .init() appended at the end
const tolgee = Tolgee()
  .use(FormatSimple())
  .use(DevTools())
  .updateDefaults({
    apiKey: process.env.NEXT_PUBLIC_TOLGEE_API_KEY,
    apiUrl: process.env.NEXT_PUBLIC_TOLGEE_API_URL,
    staticData: {
      en: enLocale,
      cs: csLocale,
    },
  })
  .init({
    defaultLanguage: "en",
    availableLanguages: ["en", "cs"],
  });

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const analytics = getAnalytics(app);
    logEvent(analytics, "opened");
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    router.events.on("hashChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
      router.events.off("hashChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <TolgeeProvider
      tolgee={tolgee}
      fallback="Loading..."
      forceLanguage={router.locale}
    >
      <Script
        async={true}
        strategy="beforeInteractive"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3177879883146014"
      />
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
            page_path: window.location.pathname,
            });
        `,
        }}
      />
      <Nav />
      <Component {...pageProps} className="content" />
      <Footer />
    </TolgeeProvider>
  );
}

export default MyApp;
