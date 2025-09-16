/*let estado = true;

if (estado){
    let estado = false;

}
console.log(estado);
var estado = true;

if (estado) {
    var estado = false;
}
console.log(estado);

for (let i = 0; i<10; i++){
    console.log(i)
}

let i = "michelle"
console.log(i);

const miarray = [];
miarray [0] = ["michelle y denise"];
    console.log(miarray);

const frutas = ["Platano"];
//frutas.push("sandia"); al final
frutas.unshift("mango");
frutas.push("fresa", "piña", "kiwi", "melón");
console.log (frutas);

//for in indices 
//for of los elementos 


    for (let fruta of frutas ){
        console.log(fruta)
    }

//shift elimina el primero
//por el primero 
console.log("------------elimina-------------")
frutas.pop();
frutas.shift();

    for (let fruta of frutas ){
        console.log(fruta)
    }*/

//inicia el programa en agregar una fruta al carrito y se inserte al carrito y se imprima la lista de frutas al dar ñ prompt, while y si no quiero se sale del while y despues para imprimir el prompt con el for of 

let carritodefrutas = [];
let continuar = true;

while (continuar) {
  let fruta = prompt("Agrega  una fruta para el carrito:");

  carritodefrutas.push(fruta);

  let respuesta = prompt("¿Quieres agregar otra fruta? (si/no)");

  if (respuesta.toLowerCase() === "no") {
    continuar = false;
  }
}

console.log("Las frutas en tu carrito son:");
for (let fruta of carritodefrutas) {
  console.log("uste compro", fruta);
}
