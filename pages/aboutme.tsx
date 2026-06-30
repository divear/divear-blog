import React, { useState } from "react";

import github from "../components/imgs/socmedia/github.png";
import twitter from "../components/imgs/socmedia/twitter.png";
import youtube from "../components/imgs/socmedia/youtube.png";
import instagram from "../components/imgs/socmedia/insta.png";
import Image from "next/image";
import Meta from "../components/Meta";
import { app, getFirestore, addDoc, collection } from "../components/firebase";
import { useTranslate } from "@tolgee/react";
const db = getFirestore(app);

const socials = [
  [github, "https://github.com/divear", "divear"],
  [twitter, "https://twitter.com/divear0", "divear0"],
  [instagram, "https://www.instagram.com/lukas.ode/", "lukas.ode"],
  [
    youtube,
    "https://www.youtube.com/channel/UCwWXZqqwhdVq50W3vZ4aDSg",
    "divear",
  ],
];

function Aboutme() {
  const { t } = useTranslate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [err, setErr] = useState("");

  async function sendCont(e: any) {
    e.preventDefault();
    console.log(username, email, message);
    try {
      if (!username || !email || !message) {
        throw new Error("Missing fields");
      }

      const docRef = await addDoc(collection(db, email.replaceAll("/", "")), {
        email,
        username,
        message,
      });
      const messageToSend = `
      <b>${username}</b> - <i>${email}</i>
      ${message}
      `;

      const response = await fetch("/api/telegram", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: messageToSend.trim() }),
      });

      const result = await response.json();

      if (result.success) {
        console.log("Message sent successfully!");
      } else {
        console.log(`Error: ${result.error}`);
      }

      setSent(true);
      setErr("");
    } catch (e) {
      setErr(t("contact_err_mandatory", "All fields are mandatory"));
      console.error("Error adding document: ", e);
    }
  }

  return (
    <div className="content">
      <Meta title={t("about_me_title", "About me")} />
      <div className="aboutmeHeader headerText center">
        {t("about_me_title", "About me")}
      </div>
      <h1 className="headerText">{t("find_me_here", "Find me here")}</h1>
      <div className="socials">
        {socials.map((s, i) => {
          return (
            <button
              key={i}
              onClick={() => open(s[1].toString())}
              className="social"
            >
              <Image
                width={100}
                height={100}
                src={s[0]}
                alt="social media icon"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </button>
          );
        })}
      </div>
      <form onSubmit={(e) => sendCont(e)} className="contactme">
        <h1 className="center headerText">
          {t("contact_me_header", "Contact me")}
        </h1>
        <p className={err ? "error" : "no"}>{err}</p>
        <label htmlFor="name">{t("contact_label_name", "Name")}</label>
        <input
          className="contactInputs"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          type="text"
          id="name"
        />
        <label htmlFor="email">Email</label>
        <input
          className="contactInputs"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          id="email"
        />
        <label htmlFor="message">
          {t("contact_label_message", "Your message")}
        </label>
        <textarea
          className="contactInputs"
          name="message"
          id="message"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          cols={20}
          rows={5}
        />
        <button type="submit" className="sendButton">
          {t("contact_button_send", "Send")}
        </button>
      </form>
      <div
        onClick={() => setSent(false)}
        className={sent ? "successDiv" : "no"}
      >
        <h1>{t("contact_success_sent", "Successfully sent")}</h1>
      </div>
    </div>
  );
}

export default Aboutme;
