/**
 * Diseñar un arreglo en donde se puedan agregar y almacenar nombres
 * Arrego y despues estructura
 * nombres.forEach
 * ForEach: Funcion flecha
 */

//arreglo vacio
let nombre =[];

//Funcion para agregar un nombre al arreglo
function agregarNombre(){
    let nombre= prompt("Ingresa el nombre");
    if(nombre){
        nombres.push(nombre);
        alert(`El nombre es ${nombre}. agregado exitosamente`);
    }else{
        alert(`El nombre esta vacio :(())`);
    }
}

function mostrarNombre(){

    if(nombres.lenght===0){
        alert(`No hay nombres almacenados`);
    }else{
        let mensaje = "Nombres almacenados: \n";
        nombres.forEach(());
    }
}

// function mostrarNombre(){
//     if(nombres.lenght===0){
//         alert(`No hay nombres almacenados`);
//     }else{
//         for(){
            
//         }
//     }
// }













//funcion flecha
function mostrarNombres(){

    if (mostrarNombres.length === 0){
        alert(´No hay nombres almacenados´)
    }else{
        let mensaje= "Nombres almacenados: \n";

        nombre.forEach((nombre, index)=>{
            mensaje += ´${index+1}. ${nombre}\n´;
        });
        alert(mensaje);
    }
}