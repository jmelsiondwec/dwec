let numero = "";

function capturaNumero() {
    numero += this.value;
    console.log(numero);
}

//Generem els events click pels botons numèrics
//Tots ells cridaran a la mateixa funció.
document.getElementById("ceroId").addEventListener("click", capturaNumero, false);
document.getElementById("unoId").addEventListener("click", capturaNumero, false);
document.getElementById("dosId").addEventListener("click", capturaNumero, false);
document.getElementById("tresId").addEventListener("click", capturaNumero, false);
document.getElementById("quatreId").addEventListener("click", capturaNumero, false);
document.getElementById("cincId").addEventListener("click", capturaNumero, false);
document.getElementById("sisId").addEventListener("click", capturaNumero, false);
document.getElementById("setId").addEventListener("click", capturaNumero, false);
document.getElementById("vuitId").addEventListener("click", capturaNumero, false);
document.getElementById("nouId").addEventListener("click", capturaNumero, false);

//Generem l'event click pel botó "mostrar"
//Cridarà a la funció nifAmbLletra
document.getElementById("mostrar").addEventListener("click", nifAmbLletra, false);

function nifAmbLletra() {

    //Declaració de variables
    let nif = ""; //Per a recollir i guardar el nif
    let resto = ""; //Per a guardar el resultat del càlcul del mòdul nif%23
    //Array con las letras del nif
    let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
    let lletraNIF = ""; //Lletra obtinguda des de l'algorisme

    //Capturem l'element HTML per poder donar feedback a l'usuari
    feedBack = document.getElementById("feedback");

    nif = numero;

    if(isNaN(nif) || nif.trim() == "") {
        //Si la cadena introduida no és un número, mostrarem un missatge advertint-ho
        feedBack.innerHTML = "Introdueixi un valor numèric entre 0 i 99999999";
    }
    else {
        //Passem la cadena a número
        nif = parseInt(nif);

        //Si el número no respecta els límits, mostrem un missatge advertint-ho
        if(nif < 0 || nif > 99999999) {
            feedBack.innerHTML = "Introdueixi un valor correcte: entre 0 i 99999999";
        }
        else {
            //Calculem el mòdul de la divisió entre nif i 23
            resto = nif%23;

            //Aquest resto ens dona la posició del array a consultar
            lletraNIF = letras[resto];
            feedBack.innerHTML = nif + lletraNIF;
        }
    }

    numero = "";
}