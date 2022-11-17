//Elements HTML
let crear = document.getElementById("crear");
let mostrar = document.getElementById('mostrar');
let eliminar = document.getElementById('eliminar');
let miLocalStorage = document.getElementById("miLocalStorage");

//Funcions
//Crea les LocalStorage
function creaLocalStorage() {
    localStorage.setItem("usuario", "Joanet");
    localStorage.setItem("password", "1234");
}

//Mostra les LocalStorage
function mostrarLocalStorage() {
    //miLocalStorage.innerHTML = localStorage.getItem("usuario");
    for (let index = 0; index < localStorage.length; index++) {
        //const element = localStorage.key(index);
        const element = localStorage.getItem(localStorage.key(index));
        miLocalStorage.innerHTML += element;
    }
}

//Elimina LocalStorage
function eliminaLocalStorage() {
    localStorage.removeItem("usuario");
}

//Events
crear.addEventListener('click', creaLocalStorage, false);
mostrar.addEventListener('click', mostrarLocalStorage,false);
eliminar.addEventListener('click', eliminaLocalStorage, false);