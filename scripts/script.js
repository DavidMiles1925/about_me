let aboutCards = [
  {
    title: "Outdoors",
    src: "./images/Tents.jpg",
    alt: "Oudoors",
    text: `I love to spend time in the great outdoors! Whether it's camping,
    hiking, canoeing, or just enjoying the scenery you can count me in!`,
  },
  {
    title: "Family",
    src: "./images/Family.jpg",
    alt: "Family",
    text: `Spending time with my family is one of my favorite things to do. My
    wonderful wife is named Allison. We have a nine year old son named
    Ben, and a four year old daughter named Amelia.`,
  },
  {
    title: "Friends",
    src: "./images/Friends.jpg",
    alt: "Friends",
    text: `I am lucky to have such wonderful friends in my life. I love to
    surround myself with positive and supportive people. We are always up
    for a stimulating challenge.`,
  },
  {
    title: "Career",
    src: "./images/Computer.jpg",
    alt: "Career",
    text: `A rewarding career in software engineering is something I look forward
    to! I have been successful in my previous careers of retail management
    and exercise instruction. I hope to bring the same passion with me to
    software engineering!`,
  },
];

let projectCards = [
  {
    title: "Library",
    link: "https://davidmiles1925.github.io/se_project_library/",
    src: "./images/inside_the_library.png",
    alt: "Library",
    text: `My first project was an introduction to HTML and CSS. I was tasked
    with creating a website for a fictitious library called the
    "Practicum Library". This is where I practiced the basic building
    blocks of web development. Click the link to visit the page.`,
  },
  {
    title: "Coffee Shop",
    link: "https://davidmiles1925.github.io/se_project_coffeeshop/",
    src: "./images/inside_coffee_shop.png",
    alt: "Coffee Shop",
    text: `My second project expanded on my HTML and CSS skills. I created
    a web page for a coffee shop called the "Practicum Coffee Shop". Some skills
    included were flat BEM, embedding media content, creating a form, and adding
    animations. Click the link to visit the page.`,
  },
  {
    title: "Profile",
    link: "https://davidmiles1925.github.io/se_project_aroundtheus/",
    src: "./images/profile.png",
    alt: "Profile",
    text: `My next project was implemented in several phases. The design was presented
    to me via Figma to simulate a real-world specification sheet. I was introduced
    to responsive web design using tools such as grid layout and media queries.
    This was also my first opportunity to work with JavaScript. My script included
    variables, arrays, functions, loops, and event listeners. Click the link to visit the page.`,
  },
  {
    title: "GitHub",
    link: "https://github.com/DavidMiles1925",
    src: "./images/github.png",
    alt: "GitHub",
    text: `Check out my code repositories to see the magic happening behind the scenes. I use
    GitHub as my platform of choice for code sharing and publication. I use Gitbash on the regular,
    and I am very familiar with the console.`,
  },
];

let usefulCards = [
  {
    title: "Work Wages for UPS",
    link: "./downloads/Hours_Worked_New.xlms",
    src: "./images/work_wage.png",
    alt: "WorkWage",
    text: `This file was created for myself and my team members to be able to quickly calculate our wages
    for the week. UPS pays overtime after 5 hours of work in a day. They pay overtime for the 6th day of
    the week worked, and double time for the 7th. Click the link to download the file.`,
  },
];

const projectSelector = document.querySelector(".projects");
const usefulSelector = document.querySelector(".usefulFiles");

const aboutCardsDisplayed = document.querySelector(".content");
const aboutCardTemplate = document.querySelector("#aboutCard").content;

const projectCardsDisplayed = projectSelector.querySelector(
  ".sections__container"
);
const projectCardTemplate = document.querySelector("#projectCard").content;

const usefulCardsDisplayed = usefulSelector.querySelector(
  ".sections__container"
);
const usefulCardTemplate = document.querySelector("#usefulCard").content;

function getAboutElement(data) {
  let aboutElement = aboutCardTemplate.querySelector(".card").cloneNode(true);

  aboutElement.querySelector(".card__title").textContent = data["title"];
  aboutElement.querySelector(".card__image").src = data["src"];
  aboutElement.querySelector(".card__image").alt = data["alt"];
  aboutElement.querySelector(".card__text").textContent = data["text"];

  return aboutElement;
}

function appendAboutCards() {
  for (card of aboutCards) {
    let newCard = getAboutElement(card);

    aboutCardsDisplayed.append(newCard);
  }
}

function getProjectElement(data) {
  let cardElement = projectCardTemplate.querySelector(".card").cloneNode(true);

  cardElement.querySelector(".projects__link").textContent = data["title"];
  cardElement.querySelector(".projects__link").href = data["link"];
  cardElement.querySelector(".card__image").src = data["src"];
  cardElement.querySelector(".card__image").alt = data["alt"];
  cardElement.querySelector(".card__text").textContent = data["text"];

  return cardElement;
}

function appendProjectCards() {
  for (card of projectCards) {
    let newCard = getProjectElement(card);

    projectCardsDisplayed.append(newCard);
  }
}

function getUsefulElement(data) {
  let usefulElement = usefulCardTemplate.querySelector(".card").cloneNode(true);

  usefulElement.querySelector(".usefulFiles__link").textContent = data["title"];
  usefulElement.querySelector(".usefulFiles__link").href = data["link"];
  usefulElement.querySelector(".card__image").src = data["src"];
  usefulElement.querySelector(".card__image").alt = data["alt"];
  usefulElement.querySelector(".card__text").textContent = data["text"];

  return usefulElement;
}

function appendUsefulCards() {
  for (card of usefulCards) {
    let newCard = getUsefulElement(card);

    usefulCardsDisplayed.append(newCard);
  }
}

appendAboutCards();
appendProjectCards();
appendUsefulCards();
