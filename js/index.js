// <!-- Script personalizado -->
const cuerpo = document.body;
const iconButton = document.getElementById("button-icon");
let modo = localStorage.getItem("Modo");

let formulario = document.querySelector('#formulario');
let nombre = document.getElementById('nombre');
let email = document.getElementById('email');

formulario.addEventListener("submit" , (e) => {
    e.preventDefault();
    let form = e.target;
    
    const nameStorage = form.children[0].value;
    const emailStorage = form.children[1].value;

    for (let i = 0; i < localStorage.length; i++) {
        let clave = localStorage.key(i);
        // let clave = localStorage.key(i);
        console.log("Clave: " + clave);
        console.log("Valor: " + localStorage.getItem(clave));
    }

    localStorage.setItem("nombre", nameStorage);
    localStorage.setItem("email", emailStorage);

    // sessionStorage.setItem("nombre", nameStorage);
    // sessionStorage.setItem("email", emailStorage);

    nombre.innerHTML = localStorage.getItem("nombre");
    email.innerHTML = localStorage.getItem("email");
})


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