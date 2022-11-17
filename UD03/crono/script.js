
//Declaración de variables
let elCrono;
let elReset;
let laMevaData = new Date();

//Capturem els elements HTML amb els quals treballarem
let display = document.getElementById('display');
let displayLap = document.getElementById('displayLap');
let start = document.getElementById('start');
let stop = document.getElementById('stop');
let reset = document.getElementById('reset');
let step = document.getElementById('step');
let numeroStep = 0;

//Iniciar el cronòmetre
resetear();

function crono() {
    
    let horas = laMevaData.getHours();
    let minutos = laMevaData.getMinutes();
    let segundos = laMevaData.getSeconds();

    segundos += 1;

    if(segundos == 60) {
        segundos = 0;
        minutos += 1;
        laMevaData.setMinutes(minutos);
    }

    if(horas < 10) {horas = '0' + horas;}
    if(minutos < 10) {minutos = '0' + minutos;}
    if(segundos < 10) {segundos = '0' + segundos;}

    laMevaData.setSeconds(segundos);
    
    display.innerHTML = horas + ':' +
                    minutos + ':' +
                    segundos;
    
}

function iniciar() {
    elCrono = setInterval(crono, 1000);
    start.disabled = true;
    stop.disabled = false;
    reset.disabled = true;
    step.disabled = false;
}

function parar() {
    clearInterval(elCrono);
    stop.disabled = true;
    start.disabled = false;
    start.innerHTML = 'Continuar';
    reset.disabled = false;
}

function preReset() {
    if(reset.innerHTML == 'Reset') {
        reset.innerHTML = "Anular Reset (3s)";
        elReset = setTimeout(resetear, 3000);
    }
    else{
        reset.innerHTML = "Reset";
        clearTimeout(elReset);
    }
}

function resetear() {
    laMevaData.setHours(0, 0, 0, 0);
    display.innerHTML = "00:00:00";
    displayLap.innerHTML = "";
    displayLap.hidden = true;
    start.disabled = false;
    start.innerHTML = 'Start';
    stop.disabled = true;
    reset.disabled = true;
}

function lap() {
    numeroStep++;
    displayLap.innerHTML =  " || step " + (numeroStep) + " -> " + display.innerHTML + " " + displayLap.innerHTML;
    displayLap.hidden = false;
}

//Events
start.addEventListener('click',
                        iniciar,
                        false);
stop.addEventListener('click',
                        parar,
                        false);
reset.addEventListener('click',
                        preReset,
                        false);
step.addEventListener('click',
                        lap,
                        false);