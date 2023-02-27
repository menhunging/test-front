import "./vendor";
import "./helpers";
import "./components/social";
import { ieFix } from "./vendor/ie-fix";
import { vhFix } from "./vendor/vh-fix";
import { actualYear } from "./modules/actualYear";
import header from "./components/header";
import scrollPage from "./modules/scroll";
import preloader from "./modules/preloader";
import lazyLoading from "./modules/lazyLoading";
// import scrollToAnchor from './modules/scrollToAnchor';

ieFix();
vhFix();
actualYear();
// scrollToAnchor.init();

header.init();
lazyLoading.init();
scrollPage.init();
// preloader.init();
