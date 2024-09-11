const footer = document.getElementById("footer");
const parrafoFooter = document.createElement("parrafo");
const anioActual = new Date().getFullYear();

parrafoFooter.innerHTML = "webprogrammingms | " + anioActual+" &#169";
footer.appendChild(parrafoFooter);