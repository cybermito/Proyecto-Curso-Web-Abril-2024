//Genera número aleatorio
let randomNumber = Math.floor(Math.random() * 100) + 1;
// 0.99 * 100 = 99 Math.random() (Genera entre 0.00 y 0.99)

//Guarda la referencia a cada párrafo de información
const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

//Guardan referencia a la entrada de texto y al botón "enviar"
const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

//Variable para los intentos
//La segunda guarda la referencia al botón reset
let guessCount = 1;
let resetButton;
guessField.focus();

//Función para comprobar el número a adivinar
function checkGuess(){
    // Guarda el valor ingresado en el campo número y se asegura que es un número
    //con Number()
    let userGuess = Number(guessField.value);

    // Comprueba si el jugador está en el primer intento
    if (guessCount === 1){
        guesses.textContent = "Intentos anteriores: ";
    }
    guesses.textContent += userGuess + " ";

    /* Este bloque condicional comprueba: 
        1. Si el número insertado ha sido adivinado.
        Si es así, lanza el mensaje de felicitación con un fondo verde.
        2. Si no, Comprueba si el número de intentos es 10
        Si es así, lanza el mensaje fin del juego
        3. si no, lanza el mensaje numero no adivinado con fondo rojo.
        Comprueba si el número es mayor o menor que el que hay que adivinar
        Lanzando los mensajes correspondientes.
    */
    if (userGuess === randomNumber) {
        lastResult.textContent = "¡Felicidades! ¡Lo adivinaste!";
        lastResult.style.backgroundColor = "green";
        lowOrHi.textContent = "";
        setGameOver();
    } else if (guessCount === 10){
        lastResult.textContent = "¡Fin del Juego!"; //End the Game
        setGameOver();
    } else {
        lastResult.textContent = "¡Incorrecto!";
        lastResult.style.backgroundColor = "red";
        if (userGuess < randomNumber) {
            lowOrHi.textContent = "¡El número es muy bajo!";

        } else if (userGuess > randomNumber) {
            lowOrHi.textContent = "¡El número es muy grande!";
        }
    }

    // Preparan las variables para el siguiente intento.
    //Vaciando el valor del campo número
    //y aplicando el foco a este.    
    guessCount++;
    guessField.value = "";
    guessField.focus();

}

//Agregamos un evento escucha al botón guessSubmit
guessSubmit.addEventListener("click", checkGuess);

//Función finalizar juego.
function setGameOver() {
    guessField.disabled = true; //Deshabilita el campo de texto
    guessSubmit.disabled = true; //Deshabilita el botón de enviar.
    //Crea un botón para resetea el juego y lo agrega al html
    resetButton = document.createElement("button"); 
    resetButton.textContent = "Iniciar nuevo juego";
    document.body.append(resetButton);
    //Generamos un evento escucha para cuando pulsemos el botón reset
     resetButton.addEventListener("click", resetGame);
}

//Función que resetea el juego a los valores iniciales.
function resetGame(){
    guessCount = 1;

    const resetParas = document.querySelectorAll(".resultParas p");
    for(let i = 0; i < resetParas.length; i++){
        resetParas[i].textContent = "";
    }

    resetButton.parentNode.removeChild(resetButton);

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = "";
    guessField.focus();

    lastResult.style.backgroundColor = "white";

    randomNumber = Math.floor(Math.random() * 100) + 1;
}