'use strict';

const btn1 = document.querySelector('.btn');
const btn2 = document.querySelector('.btnPagina');
const btn3 = document.querySelector('.btnPagina2');

if (btn1) {
    btn1.addEventListener('click', function () {
        document.body.classList.toggle('light-theme');
        document.body.classList.toggle('dark-theme');

        const className = document.body.className;

        if (className == "light-theme") {
            this.textContent = "Oscuro";
        } else {
            this.textContent = "Claro"
        }

        console.log('Nombre de la clase actual: ' + className);

    });
}

if (btn2) {
    btn2.addEventListener('click', function () {
        window.location.href = 'devDesc.html';
    })
}

if (btn3) {
    btn3.addEventListener('click', function () {
        window.location.href = 'index.html';
    })
}

