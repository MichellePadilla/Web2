let inventario =[];
function mostrarMenu(){
    return parseInt(prompt(
    `Opciones disponibles
        1.-Agregar producto
        2.-Mostrar todos los productos
        3.-Buscar producto por nombre
        4.-Salir 
        Elementelige una opcion`
    ))
}
function agregarProducto(){
    let nombre = prompt("Ingresa el nombre del producto:");
    let cantidad = prompt("Ingresa la cantidad del producto:");
    let precio= prompt("Ingresa el precio");

    if(cantidad > 0 && precio > 0){
        let producto={
            nombre: nombre,
            cantidad: cantidad,
            precio: precio
        };
        inventario
    }
}

function mostrarproducto(){
    if(inventario.length=== 0){
        alert("Inventario vacio");
    }else{
        let mensaje = "Productos del inventario";
        for(let i = 0; i< inventario.length; i++){
            mensaje+=`Producto: ${i+1}`+
                    `Nombre: ${inventario[i].nombre}\n`+
                    `Precio: ${inventario[i].precio}\n`+
                    `Cantidad: ${inventario[i].cantidad}\n`+
                    "----------------------------------";
        }
        alert(mensaje);
    }
}


function buscarproducto(){
    let productoBuscado= prompt("busca producto");
    i


}