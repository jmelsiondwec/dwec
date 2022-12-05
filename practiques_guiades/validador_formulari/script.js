const form = document.getElementById('form');
const nomusuari = document.getElementById('nomusuari');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//Funcions
function mostraError(input, missatge) {
    const formcontrol = input.parentElement;
    formcontrol.className = 'form-control error';
    //const label = formcontrol.querySelector('label');
    const small = formcontrol.querySelector('small');
    //small.innerText = label.innerText + ' ' + missatge;
    small.innerText = missatge;
}

function mostraCorrecte(input) {
    const formcontrol = input.parentElement;
    formcontrol.className = 'form-control correcto';
}

function prenNomInput(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function esEmailValid(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLocaleLowerCase()); //true, false
}

function esObligatori(inputArray) {

    inputArray.forEach(function(input) {
        if(input.value.trim() === '') {
            let missatge = `${prenNomInput(input)} és obligatori`;
            //mostraError(input, 'és obligatori');
            mostraError(input, missatge);
            prenNomInput(input);
        }
        else {
            mostraCorrecte(input);
        }
    });
}

function comprovaLongitud(input, min, max) {
    if(input.value.length < min) {
        let missatge = `${prenNomInput(input)} ha de tenir almenys ${min} caràcters`;
        mostraError(input, missatge);
    } else if(input.value.length > max) {
        let missatge = `${prenNomInput(input)} ha de tenir menys de ${max} caràcters`;
        mostraError(input, missatge);
    } else {
        mostraCorrecte(input);
    }
}


/* function esObligatori(input) {
    if(input.value.trim() === '') {
        mostraError(input, 'és obligatori')
    }
} */

//Event Listeners
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    esObligatori([nomusuari, email, password, password2]);

    comprovaLongitud(nomusuari, 3, 15);
    comprovaLongitud(password, 6, 25);

});
