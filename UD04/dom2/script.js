const input = document.querySelector('input');
const parrafo = document.querySelector('p');
const boton = document.querySelector('button');
const color = document.querySelector('#color');
const hola ="10";
function colores() {
    document.querySelector('.ejemplo').style.backgroundColor = "red";
    document.querySelector('p').innerHTML = "rojo";
}

boton.addEventListener('click', () => {
    parrafo.innerHTML = eval(input.value);
});

color.addEventListener('click', () => {
    colores();

    const nuevoParrafo = document.createElement('p');
    const contenidoNuevoParrafo = document.createTextNode("Soy un párrafo nuevo de trinca.");

/*     nuevoParrafo.appendChild(contenidoNuevoParrafo);

    document.body.appendChild(nuevoParrafo);

    const prova = document.getElementById('prova'); */

    const nuevoNuevoParrafo = document.createElement('p');
    nuevoNuevoParrafo.appendChild(contenidoNuevoParrafo);
    prova.appendChild(nuevoNuevoParrafo);

    let parrafos = document.querySelectorAll('p');

    document.body.removeChild(parrafos[1]);
});



