// let formulario = document.querySelector('#registrationForm');

// formulario.addEventListener("submit", (e) => {
//     e.preventDefault();
//     let form = e.target;
//     console.log(form.children[0].value);
//     console.log(form.children[1].value);

//     document.getElementById('nombre').innerHTML = form.children[1].value;
//     document.getElementById('email').innerHTML = form.children[0].value;

// })

let formulario = document.querySelector('#registrationForm');
let nombre;
let edad;
let email;

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    let form = e.target;
    // console.log(form.children[0].value);
    // console.log(form.children[1].value);
    
    // Acceder a los valores por el ID del input
    let nombre = form.querySelector('#nombres').value;
    let email = form.querySelector('#email').value;

    console.log(nombre);
    console.log(email);

    // Mostrar los valores en elementos HTML con IDs 'nombre' y 'email'
    document.getElementById('nombre').innerHTML = nombre;
    document.getElementById('email').innerHTML = email;
    // document.getElementById('nombre').innerHTML = form.children[0].value;
    // document.getElementById('email').innerHTML = form.children[1].value;
});



