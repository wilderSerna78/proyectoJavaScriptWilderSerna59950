// Identificacion al titulo de la barra  de navegación.
const main = document.getElementsByTagName("main");

let navbar = document.getElementById("navbarOne").innerText;

let cardsToModify = document.getElementById("cards");
let cards = document.createElement("div")
cards.innerHTML = "Esto es una divición creada dinamicamente"
// console.log(cardsToModify);
cardsToModify.append(cards);
let inputName = document.createElement("input");
let inputCost = document.createElement("input");

// cardsToModify.remove();
// main[0].remove();

cardsToModify.appendChild(inputName);
cardsToModify.appendChild(inputCost);
inputName.id = "nameProduct";
inputCost.id = "costProduct";



