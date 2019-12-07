import {getFilmCardTemplate} from "./components/film.js";
import {getMenuTemplate} from "./components/menu.js";
import {getPopUpTemplate} from "./components/pop-up.js";
import {getProfileStatusTemplate} from "./components/profile-status.js";
import {getShowMoreBtnTemplate} from "./components/show-button.js";

const FILMS_COUNT = 5;

const render = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

const $siteHeader = document.querySelector(`.header`);
const $siteMain = document.querySelector(`.main`);

render($siteHeader, getProfileStatusTemplate());
render($siteMain, getMenuTemplate(), `afterbegin`);

const $filmsContainer = $siteMain.querySelector(`.films-list__container`);

new Array(FILMS_COUNT)
.fill(``)
.forEach(() => {
  render($filmsContainer, getFilmCardTemplate());
});

render($siteMain, getShowMoreBtnTemplate());

const $footer = document.querySelector(`.footer`);
render($footer, getPopUpTemplate(), `afterend`);
