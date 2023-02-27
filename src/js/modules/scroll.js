import header from "../components/header";
import LocomotiveScroll from "locomotive-scroll";

const locoScroll = new LocomotiveScroll({
	el: document.querySelector(".smooth-scroll"),
	smooth: true,
	smartphone: {
		smooth: true,
	},
	tablet: {
		smooth: true,
	},
	smoothMobile: 1,
	multiplier: 1.0,
});

function init() {
	locoScroll.update();

	$(".header").on("click.anchor", ".js-to-anchor", (e) => {
		e.preventDefault();
		e.stopPropagation();
		$(".js-to-anchor").removeClass("isActive");
		$(e.currentTarget).addClass("isActive");

		let id = $(e.currentTarget).attr("href");
		let speed = 500;
		let offset = -$(".header").outerHeight(true) - 80;

		if ($(".header").hasClass("is-menu-opened")) {
			header.closeMenu().then(() => {
				$(".js-burger").removeClass("is-active");
				locoScroll.start();
				locoScroll.scrollTo(id, { offset, duration: speed });
			});
		} else {
			locoScroll.scrollTo(id, { offset, duration: speed });
		}
	});

	$(".button-up").on("click", () => {
		locoScroll.scrollTo(0);
	});

	locoScroll.on("scroll", (args) => {
		if (typeof args.currentElements["site"] === "object") {
			let progress = args.currentElements["site"].progress;
			let percent = Math.round(progress * 100 - 24) * 2;
			console.log(percent);

			if (percent <= 10) {
				$(".button-up").addClass("hidden");
			} else {
				$(".button-up").removeClass("hidden");
			}

			if (percent >= 90) {
				$(".button-up").addClass("finish");
			} else {
				$(".button-up").removeClass("finish");
			}
			$(".button-up__percent").text(percent + "%");
			// ouput log example: 0.34
			// gsap example : myGsapAnimation.progress(progress);
		}
	});

	// locoScroll.on("call", (func, state, event) => {
	// 	switch (func) {
	// 		case "about":
	// 			if (state === "enter") {
	// 			}
	// 			break;
	// 	}
	// });

	if ($(window).width() < 768) {
		$(".about__man").removeAttr("data-scroll");
	}
}

function destroy() {
	locoScroll.destroy();
}
function update() {
	locoScroll.update();
}

function start() {
	locoScroll.start();
}

function stop() {
	locoScroll.stop();
}

export default {
	init,
	update,
	start,
	stop,
	destroy,
};
