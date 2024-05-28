//Objetos en JS

// crear objeto

//const objeto = new Object(); //Ya no se usa, evitar este uso.

const objeto = {}; //Objeto vacío

const player = {
    name: "Luke",
    life: 99,
    power: 10,
    'Otra propiedad': "propiedad rara"
}

//Acceder a las propiedades del objeto

//Notación por punto (preferida)
console.log(player.name); //muestra Luke
console.log(player.life); //muestra la vida

//Notación por corchetes
console.log(player["name"]);
console.log(player["power"]);
console.log(player["Otra propiedad"]);
