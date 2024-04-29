//Crea un elemento párrafo cada vez que hacemos click en el botón
//Lo agrega al final del documento.

function crearParrafo() {
    let para = document.createElement("p");
    para.textContent = "Has pulsado el botón";
    document.body.appendChild(para);
}

/* Recorre el documento en busca de los botones que hay */
const buttons = document.querySelectorAll("button");
console.log("Hay " + buttons.length + " botones en el documento");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", crearParrafo);
}

// Comentario de una sola línea 

/*
    Esto es un bloque
    de comentario.

*/