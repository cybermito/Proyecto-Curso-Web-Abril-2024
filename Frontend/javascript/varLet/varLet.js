let myName = "Antonio";

let myAge = 49;

function logName() {
    console.log(myName);
}

logName();

//nombrar variables.

//No usar caracteres especiales (ñ,@, ;, ...)

// No usar guiones bajos al inicio de una variable

//No usar números al inicio de una variable, genera error

//Para variables con dos o más palabras, por convención, se usa CamelCase

let miVariable;
let estaEsOtraVariable;
let mi_variable;

//Usar nombres intuitivos que describan la función de la variable.

let miNombre;
let miEdad;

//Distingue entre mayúsculas y minúsculas

let unaVariable;
let unavariable;

//Muy importante, no usar palabras reservadas del lenguaje de programación.

/*
    let for;
    let while;
    let function;
*/

//Tipos de variables

//Number --> guardar números 
myAge = 49;
let yearBrithday = 1974;
let decimales = 4.68;

//String --> Cadena de caracteres
myName = "Antonio";
let ciudad = "Granada";

//Boolean --> Valores verdadero/falso (true or false)

let isGame = true;
let isOpen = false;

//Array --> Arreglos o lista
let listaDeLaCompra = ["Leche", "fruta", "pan"];
//Cómo acceder a un elemento del Array
console.log(listaDeLaCompra[1]);

//Object --> Tipo objetos

let persona = {
    name: "Antonio",
    ciudad: "Granada",
    edad: 49
}

//Cómo acceder a un elemento de un objeto

console.log(persona.ciudad);

//Constantes

const PI = 3.1416;

//Operadores aritméticos

// + , -, *, /, %, **

//Operadores de incremento y decremento

// variable++, variable--

// Operador de asignación (=, +=, -=, *=, /=)

let variable = 10;
variable += 10;

//Operadores de comparación (===, !==, <, >, <=, >=)

