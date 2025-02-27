// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaNombresASortear = [];

//capturamos los nombres del input y los guardamos en un arreglo
function agregarAmigo(){
    let nombreIngresado = document.getElementById('amigo').value;
    if(nombreIngresado.trim()===""){
        alert("Por favor, inserta un nombre valido");
    }

    listaNombresASortear.push(nombreIngresado);
    mostrarNombres();
    nombreIngresado = "";
    
}

//mostramos los nombres en la etiqueta lista 
function mostrarNombres(){
    let listaNombres = document.getElementById('listaAmigos');
    listaNombres.innerHTML = ""
     
    for (let index = 0; index < listaNombresASortear.length; index++) {
        let elementoLista = document.createElement('li');
        elementoLista.textContent = listaNombresASortear[index];
        listaNombres.appendChild(elementoLista);
    }
    
}



