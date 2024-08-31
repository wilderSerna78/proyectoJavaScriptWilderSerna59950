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