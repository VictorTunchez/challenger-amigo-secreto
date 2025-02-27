// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaNombresASortear = [];

//capturamos los nombres del input y los guardamos en un arreglo
function agregarAmigo(){
    let nombreIngresado = document.getElementById('amigo').value;
    listaNombresASortear.push(nombreIngresado);
    mostrarNombres();
}

//mostramos los nombres en la etiqueta lista 
//falta resolver el problema de mostrar todos los nombres cada que se actualiza
//solo se actualiza mostrando el ultimo, no funciono tampoco con el for
function mostrarNombres(){
    let ultimoIngresado = listaNombresASortear.length-1;
    let nombres = document.getElementById('listaAmigos');
    nombres.innerHTML = listaNombresASortear[ultimoIngresado]; 
    console.log(listaNombresASortear[ultimoIngresado]);
  
}



