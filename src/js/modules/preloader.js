let preloader = $(".preloader");
let preloaderImg = $(".preloader__img");
let scripts = document.scripts;
let scriptsCount = scripts.length;
let scriptsTotalCount = 0;
let scriptsLoadedCount = 0;

for (let i = 0; i < scriptsCount; i++) {
	if (scripts[i].src) {
		scriptsTotalCount++;
		scripts[i].onload = scriptLoaded;
		scripts[i].onerror = scriptLoaded
	}
}

function scriptLoaded() {
	scriptsLoadedCount++;
	let percentTransform = ((scriptsLoadedCount * 100) / scriptsTotalCount).toFixed();
	preloaderImg.css('transform',`translate(${percentTransform}vw, -${percentTransform}vh)`)
}

function init() {
	$(window).on("load", function () {
		preloaderImg.addClass("load");
		setTimeout(function () {
			preloader.addClass("load");
		}, 2000);
	});
}

export default {
	init,
};
