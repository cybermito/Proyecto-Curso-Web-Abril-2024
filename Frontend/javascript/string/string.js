// let button = document.querySelector("button");

// button.onclick = function() {
//     let name = prompt("¿Cuál es tu nombre?");
//     alert("Hola, " + name + ", bienvenid@");
// };

//Algunos métodos de los strings

let myString = "Esto es una cadena de texto";

//Saber la longitud de la cadena
console.log(myString.length);

//Extraer un caracter del String
console.log(myString[3]);

//Extraes el último carácter
console.log(myString[myString.length - 1]);

//Encontrar un subcadena dentro de otra cadena y extraerla
console.log(myString.indexOf("cadena"));
//Si no encuentra la cadena devuelve -1
console.log(myString.indexOf("hola"));

//extraer un conjunto de caracteres
console.log(myString.slice(0, 4));

//Convertir a mayúsculas y minúsculas

console.log(myString.toLowerCase());
console.log(myString.toUpperCase());


