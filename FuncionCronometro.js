let timer;
let segundosmas = 0;
let ejecutando = false;

// Variables para guardar los IDs de los botones
const display = document.getElementById('Mostrar');
const startButton = document.getElementById('Iniciar');
const stopButton = document.getElementById('Detener');
const resetButton = document.getElementById('Reiniciar');

// Funcion para iniciar el incremento del tiempo
function iniciarT() {
    if (!ejecutando) {
        ejecutando = true;
        timer = setInterval(actualizarT, 1000);
        startButton.disabled = true;
        stopButton.disabled = false;
    }
}

// Funcion Poner pausa al cronometro
function detenerT() {
    if (ejecutando) {
        ejecutando = false;
        clearInterval(timer);
        startButton.disabled = false;
        stopButton.disabled = true;
    }
}

// Funcion para reiniciarlo a 00:00:00
function reiniciarT() {
    detenerT();
    segundosmas = 0;
    mostrarT(0);
}

// Funcion llamada desde IniciarTiempo para incrementar en 1 por cada segundo
function actualizarT() {
    segundosmas++;
    mostrarT(segundosmas);
}

// Funcion para mostrar el cronometro en pantalla en formato 00:00:00
function mostrarT(TotalSegundos) {
    const horas = Math.floor(TotalSegundos / 3600);
    const minutos = Math.floor((TotalSegundos % 3600) / 60);
    const segundos = TotalSegundos % 60;
    display.textContent = `${formatoceros(horas)}:${formatoceros(minutos)}:${formatoceros(segundos)}`;
}

// Funcion para agregar 0 en caso el numero sea menor a 9 para mantener formato 00:00:00
function formatoceros(number) {
    return number < 10 ? `0${number}` : number;
}

// Capturar el evento del click
startButton.addEventListener('click', iniciarT);
stopButton.addEventListener('click', detenerT);
resetButton.addEventListener('click', reiniciarT);

// Desabilitar boton si ya esta detenido
stopButton.disabled = true;
mostrarT(0);
