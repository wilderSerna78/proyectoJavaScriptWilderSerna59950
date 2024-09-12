const cuerpo = document.body;
const iconButton = document.getElementById("button-icon");
const footer = document.getElementById("footer");
const parrafoFooter = document.createElement("parrafo");
const anioActual = new Date().getFullYear();

parrafoFooter.innerHTML = "webprogrammingms | " + anioActual+" &#169";
footer.appendChild(parrafoFooter);

// Función para cambiar entre modo oscuro y claro
document.addEventListener("DOMContentLoaded", function () {
    const buttonDark = document.getElementById("toggle-button");
  
    if (modo === 'dark-mode') {
      cuerpo.classList.add("dark-mode");
    }
  
    buttonDark.addEventListener("click", () => {
      cuerpo.classList.toggle("dark-mode");
      setLocalStorageModeDark()
      updateIconButton();
    });
  
    // Función para actualizar el icono del botón
    function updateIconButton() {
      if (cuerpo.classList.contains("dark-mode")) {
        iconButton.classList.remove("bi-moon-fill");
        iconButton.classList.add("bi-sun-fill");
      } else {
        iconButton.classList.remove("bi-sun-fill");
        iconButton.classList.add("bi-moon-fill");
        localStorage.removeItem("Modo");
      }
    }
  
    function setLocalStorageModeDark() {
      if (cuerpo.classList.contains("dark-mode")) {
        localStorage.setItem("Modo", "dark-mode");
      } else {
        localStorage.removeItem("Modo");
      }
    }
    updateIconButton();
  });