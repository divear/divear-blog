import React from "react";
import Image from "next/image";
import foot from "./imgs/footerImg.png";
import github from "./imgs/socmedia/github.png";
import twitter from "./imgs/socmedia/twitter.png";
import youtube from "./imgs/socmedia/youtube.png";

function Footer() {
	const socials = [
		[github, "https://github.com/divear", "divear"],
		[twitter, "https://twitter.com/divear0", "divear0"],
		[
			youtube,
			"https://www.youtube.com/channel/UCwWXZqqwhdVq50W3vZ4aDSg",
			"divear",
		],
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
								onClick={() => open(s[1].toString(), "_blank")}
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
					<p className="blogDesc copyEndName">©Lukáš Odehnal 2022-2023</p>
				</div>
			</div>
		</div>
	);
}
export default Footer;
