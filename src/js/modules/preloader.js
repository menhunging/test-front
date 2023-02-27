import scrollPage from "./scroll";

function init() {
	let preloader = $(".preloader");
	let preloaderImg = $(".preloader__img");

	$(window).on("load", function () {
		preloaderImg.addClass("load");
		setTimeout(function () {			
			$('.site').addClass('load');
			preloader.addClass('load').remove();
		}, 2000);
	});
}

export default {
	init,
};
