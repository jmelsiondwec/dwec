//Declaració de variables
let nif = ""; //Per a recollir i guardar el nif.
let resto = ""; //Per a guardar el resultat del càlcul del mòdul nif%23
//Array con las letras del nif
let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
let lletraNIF = ""; //Lletra obtinguda des de l'algorisme
let esCorrecte = false; //Booleà per controlar el bucle while
let continuar = true; //Booleà per controlar si volem continuar o no
let resposta = "";

while (continuar) {
    while (!esCorrecte) {

            //Anem a pensar que tot sortirà bé
            esCorrecte = true;

            //Capturem el número de nif introduit per l'usuari
            nif = prompt("Introdueix el teu número de NIF, sense la lletra, per favor.");

            if(isNaN(nif)) {
                //Si la cadena introduida no és un número, mostrarem un missatge advertint-ho
                console.log("Introdueixi un valor numèric entre 0 i 99999999");

                //El bucle continuarà
                esCorrecte = false;
            }
            else {
                //Passem la cadena a número
                nif = parseInt(nif);

                //Si el número no respecta els límits, mostrem un missatge advertint-ho
                if(nif < 0 || nif > 99999999) {
                    console.log("Introdueixi un valor correcte: entre 0 i 99999999");
                    
                    //El bucle continuarà
                        esCorrecte = false;
                }
            }
    }

    //Calculem el mòdul de la divisió entre nif i 23
    resto = nif%23;

    //Aquest resto ens dona la posició del array a consultar
    lletraNIF = letras[resto];
    console.log(nif + lletraNIF);

    resposta = prompt("Continuar? (s/n)");

    continuar = resposta.toLowerCase() == "s" ? true : false;
    esCorrecte = false;
}