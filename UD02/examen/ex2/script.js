//Declaració de variables
const personatge = "John Nieve"; //Cadena clau
let captura = ""; //Captura del prompt
let esCorrecte = false; //Booleà per controlar el bucle while
let indice = -1; //Posició de la cadena en el text

while(!esCorrecte) {

    captura = prompt("Introdueix el nom i el cognom el personatge, per favor.");

    indice = captura.toLowerCase().indexOf("john");

    if(indice != -1) {
        //Si ha trobat el nom, cerquem el cognom
        indice = -1;
        indice = captura.toLowerCase().indexOf("nieve");

        if(indice != -1) {
            //Si ha trobat el cognom, donem la benvinguda
            document.write("<b>Benvingut a la web!</b>");
            esCorrecte = true;            
        }
        else {
            //Té el nom, però no el cognom: missatge pertinent
            console.log("Et falta el cognom");
        }
    } else {
        indice = captura.toLowerCase().indexOf("nieve");

        if(indice != -1) {
            //Té el cognom, però no el nom: missatge pertinent
            console.log("Et falta el nom");
        }
        else {
            //No té ni nom ni cognom, ho advertim:
            console.log("ERROR: intenta-ho de nou.")
        }
    }
}
