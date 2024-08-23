const navbar = document.getElementById("navbarOne");
console.log(navbar);

const button = document.querySelector('#selector');
const buttonTwo = document.querySelector('#selector2');
// const button = document.getElementById("#selector");

button.addEventListener("click", () => {
    console.log("Se selecciono producto 1");
})

buttonTwo.onclick = () => {
    console.log("Se selecciono producto 2");
}