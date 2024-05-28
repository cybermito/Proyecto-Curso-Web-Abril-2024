const name = "Antonio";

function crearSaludo(name){
return `Hola, mi nombre es ${name}`;
}

const saludo = crearSaludo(name);

console.log("Comienza la ejecución");

setTimeout(function () {
    console.log(saludo);
}, 5000);

console.log("Finaliza la ejecución");