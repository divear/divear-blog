import { useEffect } from "react";
export function useImageClick() {
	useEffect(() => {
		const handleClick = (event) => {
			const imgModal = document.createElement("div");
			let parent = event.target.parentElement;
			while (parent) {
				if (parent.classList.contains("content")) {
					imgModal.innerHTML = `<img src=${event.target.src} class="imgModal" />`;
					document.body.appendChild(imgModal);

					//check for click and make it disappear
					imgModal.addEventListener("click", () => {
						imgModal.classList.add("no");
					});
				}
				break;
			}
			parent = parent.parentElement;
		};

		const images = document.getElementsByTagName("img");
		for (let i = 0; i < images.length; i++) {
			images[i].addEventListener("click", handleClick);
		}

		return () => {
			for (let i = 0; i < images.length; i++) {
				images[i].removeEventListener("click", handleClick);
			}
		};
	}, []);
}
