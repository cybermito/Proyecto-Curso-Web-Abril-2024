//Desestructuración de objetos

const user = {
    name: "Manz",
    role: "streamer",
    life: 90
} 

//Desectructuración , convertir en variables. 
//const {name, role, life} = user;

console.log(name);
console.log(role, life);

//reestructuración de objetos

console.log({name, role, life});

//Cambio de nombre de una propiedad

//const {name, role: type, life} = user;
//console.log({name, type, life});

//poner valor por defecto a una variable que no existe o tiene valor undefine
//const {name, role = "normal user", life = 100} = user;
console.log({name, role, life});
