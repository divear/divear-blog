import React from "react";
import pfp from "./imgs/pfp.png";
import Image from "next/image";

function Nav() {
	return (
		<div>
			<h1>
				<Image width={50} height={50} src={pfp} alt="i" />
				divear
			</h1>
		</div>
	);
}

export default Nav;
