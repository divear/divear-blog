import React from "react";
import Image from "next/image";
import foot from "./imgs/footerImg.png";

function Footer() {
	return (
		<div>
			<Image draggable={false} className="footerImg" src={foot} />
			<div className="footerPar">
				<div
					onClick={() =>
						open("https://lukas-getout.itch.io/sewer-run")
					}
					className="player"
				>
					{" "}
				</div>
				<div className="blackboxNav">
					<h3>©divear 2022</h3>
				</div>
			</div>
		</div>
	);
}

export default Footer;
