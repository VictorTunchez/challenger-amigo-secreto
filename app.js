let listaNombresASortear = [];

//capturamos los nombres del input y los guardamos en un arreglo
function agregarAmigo(){
    let nombreIngresado = document.getElementById('amigo').value.toLocaleLowerCase();
    if(nombreIngresado.trim()===""){
        alert("Por favor, inserta un nombre valido");
    }else if(listaNombresASortear.includes(nombreIngresado)){
        alert("Por favor, inserta un nombre que no este en la lista");
    }else{
    listaNombresASortear.push(nombreIngresado);
    mostrarNombres();
    nombreIngresado = "";
    }
    limpiarEntrada();
}

//funcion extra para limpiar la entrada
function limpiarEntrada(){
    let entradaNombres = document.getElementById('amigo');
    entradaNombres.value="";
}

//mostramos los nombres en la etiqueta lista 
function mostrarNombres(){
    let listaNombres = document.getElementById('listaAmigos');
    listaNombres.innerHTML = "";
    for (let index = 0; index < listaNombresASortear.length; index++) {
        let elementoLista = document.createElement('li');
        elementoLista.textContent = listaNombresASortear[index];
        listaNombres.appendChild(elementoLista);
    }
   
}


// con el metodo random hacemos un sorteo para elegir el indice de uno de los nombres de la lista
function sortearAmigo(){
    let posicionAmigoSecreto = Math.floor(Math.random()*(listaNombresASortear.length-1));
    let listaNombres = document.getElementById('listaAmigos');
    listaNombres.innerHTML = " ";
    let nombreSecreto = document.getElementById('resultado');
    nombreSecreto.innerHTML = "El amigo secreto es ";
    for (let index = 0; index < listaNombresASortear.length; index++) {
        if(listaNombresASortear[index]==listaNombresASortear[posicionAmigoSecreto]){
            let elementoLista = document.createElement('li');
            elementoLista.textContent = listaNombresASortear[index];
            nombreSecreto.appendChild(elementoLista);
            break;
        }
        
    }


}



