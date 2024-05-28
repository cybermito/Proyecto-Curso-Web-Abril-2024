/* 
    Lógica de programación para el juego Piedra, Papel, Tijera

    Valores a tener en cuenta:
    Piedra = 1
    Papel = 2
    Tijera = 3

    Opciones a comprobar posibles

    1. Cuando empatamos
    2. Piedra gana Tijera
    3. Tijera gana Papel
    3. Papel gana Piedra

    Pasos: 
    1. Creamos un número aleatorio que será la selección del sistema.
    2. Seleccionamos nuestra opción
    3. Comprobamos quien ha ganado
    4. ¿Volver a jugar?

*/

//Declaramos la variables necesarias
let jugador = 0;
let ganadas = 0;
let perdidas = 0;
const PIEDRA = "piedra";
const PAPEL = "papel";
const TIJERA = "tijera";
let serie = [PIEDRA, PAPEL, TIJERA];
const seleccionComputadora = document.querySelector("#seleccion-computer");
const seleccionJugador = document.querySelector("#seleccion-jugador");
const verSeleccion = document.querySelector('.info');
verSeleccion.style.display = 'none';
const ganadorJugador = document.querySelector('.jugador');
const ganadorComputer = document.querySelector('.computer');

//Declaramos y activamos la escucha de la selección del jugador
const piedra = document.querySelector("#piedra");
piedra.addEventListener('click', () => { 
    jugador = PIEDRA;
    mostrarSeleccion(jugador);
});

const papel = document.querySelector("#papel");
papel.addEventListener('click', () => {
    jugador = PAPEL;
    mostrarSeleccion(jugador);
});

const tijera = document.querySelector("#tijera");
tijera.addEventListener('click', () => {
    jugador = TIJERA;
    mostrarSeleccion(jugador);
})

//Generador número aleatorio para la selección de la jugada de la computadora
function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) +1);
}

function eleccion(jugada){
    let resultado = '';

    if (jugada === PIEDRA){
        resultado = './img/piedra.png';
    } else if (jugada === PAPEL){
        resultado = './img/papel.png';
    } else if (jugada === TIJERA){
        resultado = './img/tijeras.png';
    }
    return resultado;
}

function mostrarSeleccion(jugador){
    verSeleccion.style.display = 'block';
    selectComputer = serie[aleatorio(1, 3) - 1];
    seleccionComputadora.src = eleccion(selectComputer);
    seleccionJugador.src = eleccion(jugador);
    console.log("Jugador seleccionó: " + jugador);
    console.log("Computer seleccionó: " + selectComputer);
   jugada(jugador, selectComputer);
}

function verGanador(){
    
}
//Algoritmo para saber quién gano la jugada
//Primeramente comprobamos si hay empate, después si gana el jugador
//y por último si no se da ninguna de las opciones anteriores, pierde el jugador y gana la máquina.
function jugada(jugador, computer){
    if (jugador === computer){
        console.log("Empate")
    } else if ((jugador === PIEDRA && computer === TIJERA) || (jugador === PAPEL && computer === PIEDRA) || (jugador === TIJERA && computer === PAPEL)){
        console.log("Ganaste");
    } else {
        console.log("Perdiste");
    }
}
