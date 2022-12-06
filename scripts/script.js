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
];

const projectCardsDisplayed = document.querySelector(".projects__container");
const projectCardTemplate = document.querySelector("#card").content;

function getProjectElement(data) {
  let cardElement = projectCardTemplate.querySelector(".card").cloneNode(true);

  cardElement.querySelector(".projects__link").textContent = data["title"];
  cardElement.querySelector(".projects__link").href = data["link"];
  cardElement.querySelector(".card-image").src = data["src"];
  cardElement.querySelector(".card-image").alt = data["alt"];
  cardElement.querySelector(".card-text").textContent = data["text"];

  return cardElement;
}

function appendProjectCards() {
  for (card of projectCards) {
    let data = ["title", "link", "src", "alt", "text"];

    data["title"] = card.title;
    data["link"] = card.link;
    data["src"] = card.src;
    data["alt"] = card.alt;
    data["text"] = card.text;

    let newCard = getProjectElement(data);

    projectCardsDisplayed.append(newCard);
  }
}

appendProjectCards();
