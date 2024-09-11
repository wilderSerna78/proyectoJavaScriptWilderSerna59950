const cuerpo = document.body;

document.addEventListener("DOMContentLoaded", function() {
    const buttonDark = document.getElementById('toggle-button');
    buttonDark.className = 'button_grey';
    buttonDark.addEventListener("click", () => {
        cuerpo.classList.toggle('dark-mode');

    })
})