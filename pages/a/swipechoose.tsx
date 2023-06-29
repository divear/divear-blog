import React from "react";
import Meta from "../../components/Meta";
import Image from "next/image";
import swipechooseImg from "../../components/imgs/projects/swipechoose/swipechoose0.png";
import { useImageClick } from "./useImageClick";

function Swipechoose() {
	useImageClick();
	return (
		<div className="content swipechoose">
			<Meta title="Swipechoose" />
			<h1>Swipechoose: Do likes even matter?</h1>
			<p>
				In the world of social media, likes have become a ubiquitous
				part of our online experience. But let&#39;s be real, do they
				truly hold any meaningful value?
			</p>
			<Image
				width={450}
				height={250}
				className="floatRight"
				src={swipechooseImg}
				alt="Swipechoose img"
			/>
			<br />
			<p>
				Likes, those little numbers symbolizing approval, often leave us
				wondering about their true impact. Honestly, when was the last
				time you looked at a like count and felt any genuine emotional
				connection or gained valuable insights? Let&#39;s break free
				from the like button monotony and introduce a more interactive
				and entertaining system. Imagine a social media platform where
				users are presented with two images side by side and asked to
				choose which one they prefer. It&#39;s like a mini-game that
				adds an element of fun and engagement. Rather than mindlessly
				scrolling and liking everything, this approach encourages active
				participation and thoughtfulness. Let&#39;s move beyond the
				like-centric mentality and embrace a more playful user
				interaction. Conclusion: It&#39;s time to question the true
				significance of likes in our social media experience. By
				introducing a more interactive and entertaining approach, we can
				break free from the mundane and inject some fun into our online
				interactions. Let&#39;s remember that social media is about
				genuine connections and personal expression, and a little
				playfulness can go a long way. So, do likes really matter? Maybe
				it&#39;s time to find a better way to engage and enjoy the
				digital realm. <br />
			</p>
			<h1>
				You can find the site here:
				<a href="https://swipechoose.netlify.app/"> Swipechoose</a>
			</h1>
			<p>Rewritten by chatgpt</p>
		</div>
	);
}

export default Swipechoose;
