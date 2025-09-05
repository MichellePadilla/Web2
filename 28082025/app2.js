
//let clave = prompt("Ingresa clave");
//if(clave == 123456){
    //clave=> true
  //  console.log("Detección de virus");
//}
//console.log("sigue participando");


//que te pida cual es tu numero si es igual o mayor a 10

// let numero = parseInt(prompt("ingresa numero:"));
// if(numero=>10){
//     console.log("Dentro del rango");
// }else{
//     console.log("te saliste");
// }

// //3 numeror comprar cual es el mayor, cual es el menor y si son iguales

let n1 = parseFloat(prompt("Ingresa primer numero"));
let n2 = parseFloat(prompt("Ingresa segundo numero"));
let n3 = parseFloat(prompt("Ingresa tercero numero"));
 

if (n1 == n2 && n1 == n3) {
  console.log("Son iguales");

}else{
  if (n1 > n2 && n1 > n3) {
    if (n2 > n3) {
        console.log(n1, n2, n3);
    } else {
        console.log(n1, n3, n2);
    }
} else if (n2 > n1 && n2 > n3) {
    if (n1 > n3) {
        console.log(n2, n1, n3);
    } else {
        console.log(n2, n3, n1);
    }
} else {
    if (n1 > n2) {
        console.log(n3, n1, n2);
    } else {
        console.log(n3, n2, n1);
    }
  }
}


