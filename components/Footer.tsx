import React from "react";
import Image from "next/image";
import foot from "./imgs/footerImg.png";
import github from "../components/imgs/socmedia/github.png";
import twitter from "../components/imgs/socmedia/twitter.png";
import youtube from "../components/imgs/socmedia/youtube.png";
import instagram from "../components/imgs/socmedia/insta.png";
import fiverr from "../components/imgs/socmedia/fiverr.png";

function Footer() {
	const socials = [
		[github, "https://github.com/divear", "divear"],
		[twitter, "https://twitter.com/divear0", "divear0"],
		[instagram, "http://instagram.com/_u/lukas.ode/", "lukas.ode"],
		[
			youtube,
			"https://www.youtube.com/channel/UCwWXZqqwhdVq50W3vZ4aDSg",
			"divear",
		],
		[fiverr, "https://www.fiverr.com/lukasodehnal", "lukasodehnal"],
	];
  
	return (
		<div>
			<Image
				alt="footerImg"
				draggable={false}
				className="footerImg"
				src={foot}
			/>
			<div className="footerPar">
				<div
					onClick={() =>
						open("https://lukas-getout.itch.io/sewer-run")
					}
					className="player"
				>
					{" "}
				</div>
				<div className="smallSocials">
					{socials.map((s, i) => {
						return (
							<button
								key={i}
								onClick={() => open(s[1].toString())}
								className="smallSocial"
								title={s[2].toString()}
							>
								<Image
									alt={`image number ${i}`}
									width={50}
									height={50}
									src={s[0]}
								></Image>
							</button>
						);
					})}
				</div>
				<div className="blackboxNav">
					<p className="blogDesc copyEndName">©Lukáš Odehnal 2022-2024</p>
				</div>
				<div className="blackboxNavBottom"/>
			</div>
		</div>
	);
}
export default Footer;
