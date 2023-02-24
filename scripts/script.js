import { aboutCards, projectCards, usefulCards } from "./constants.js";

// Selectors
const projectSelector = document.querySelector(".projects");
const usefulSelector = document.querySelector(".usefulFiles");

// Templates
const aboutCardTemplate = document.querySelector("#aboutCard").content;
const projectCardTemplate = document.querySelector("#projectCard").content;
const usefulCardTemplate = document.querySelector("#usefulCard").content;

// Containers
const aboutCardsDisplayed = document.querySelector(".content");
const projectCardsDisplayed = projectSelector.querySelector(
  ".sections__container"
);
const usefulCardsDisplayed = usefulSelector.querySelector(
  ".sections__container"
);

// getCard functions
const getAbout = function getAboutElement(data) {
  const aboutElement = aboutCardTemplate.querySelector(".card").cloneNode(true);

  aboutElement.querySelector(".card__title").textContent = data["title"];
  aboutElement.querySelector(".card__image").src = data["src"];
  aboutElement.querySelector(".card__image").alt = data["alt"];
  aboutElement.querySelector(".card__text").textContent = data["text"];

  return aboutElement;
};

const getProject = function getProjectElement(data) {
  const cardElement = projectCardTemplate
    .querySelector(".card")
    .cloneNode(true);

  cardElement.querySelector(".projects__link").textContent = data["title"];
  cardElement.querySelector(".projects__link").href = data["link"];
  cardElement.querySelector(".card__image").src = data["src"];
  cardElement.querySelector(".card__image").alt = data["alt"];
  cardElement.querySelector(".card__text").textContent = data["text"];

  return cardElement;
};

const getUseful = function getUsefulElement(data) {
  const usefulElement = usefulCardTemplate
    .querySelector(".card")
    .cloneNode(true);

  usefulElement.querySelector(".usefulFiles__link").textContent = data["title"];
  usefulElement.querySelector(".usefulFiles__link").href = data["link"];
  usefulElement.querySelector(".card__image").src = data["src"];
  usefulElement.querySelector(".card__image").alt = data["alt"];
  usefulElement.querySelector(".card__text").textContent = data["text"];

  return usefulElement;
};

// Append Cards
function appendCards(cards, func, container) {
  cards.forEach((card) => {
    const newCard = func(card);

    container.append(newCard);
  });
}

// Script
appendCards(aboutCards, getAbout, aboutCardsDisplayed);
appendCards(projectCards, getProject, projectCardsDisplayed);
appendCards(usefulCards, getUseful, usefulCardsDisplayed);
