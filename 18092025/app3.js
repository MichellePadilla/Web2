var productos = [
    { nombre: 'camisa', precio: 300 },
    { nombre: 'pantalon', precio: 500 },
    { nombre: 'zapatos', precio: 400 },
    { nombre: 'sombrero', precio: 200 }
];

var carrito = [];

function mostrarMenu() {
    var menu = "Seleccione una opción:\n";
    for (var i = 0; i < productos.length; i++) {
        menu += (i + 1) + ". Agregar " + productos[i].nombre + " - $" + productos[i].precio + "\n";
    }
    menu += (productos.length + 1) + ". Ver Carrito y Total\n";
    menu += (productos.length + 2) + ". Eliminar producto del Carrito\n";
    menu += (productos.length + 3) + ". Salir\n";
    return menu;
}

function agregarAlCarrito(index) {
    carrito.push(productos[index]);
    alert('Producto "' + productos[index].nombre + '" agregado al carrito.');
}

function mostrarCarritoYTotal() {
    if (carrito.length === 0) {
        alert("El carrito está vacío.");
    } else {
        var mensajeCarrito = "Carrito de compras:\n";
        var total = 0;
        for (var i = 0; i < carrito.length; i++) {
            mensajeCarrito += (i + 1) + ". " + carrito[i].nombre + " - $" + carrito[i].precio + "\n";
            total += carrito[i].precio;
        }
        mensajeCarrito += "\nTotal: $" + total;
        alert(mensajeCarrito);
    }
}

function eliminarProductoCarrito() {
    if (carrito.length === 0) {
        alert("El carrito está vacío, no hay productos para eliminar.");
        return;
    }

    var mensaje = "Seleccione el número del producto que desea eliminar:\n";
    for (var i = 0; i < carrito.length; i++) {
        mensaje += (i + 1) + ". " + carrito[i].nombre + " - $" + carrito[i].precio + "\n";
    }

    var opcionEliminar = prompt(mensaje);
    opcionEliminar = Number(opcionEliminar);

    if (isNaN(opcionEliminar) || opcionEliminar < 1 || opcionEliminar > carrito.length) {
        alert("Opción no válida. No se eliminó ningún producto.");
    } else {
        var eliminado = carrito.splice(opcionEliminar - 1, 1)[0];
        alert('Producto "' + eliminado.nombre + '" eliminado del carrito.');
    }
}

var opcion;
do {
    opcion = prompt(mostrarMenu());
    opcion = Number(opcion);

    if (isNaN(opcion) || opcion < 1 || opcion > productos.length + 3) {
        alert("Opción no válida, por favor intenta de nuevo.");
    } else if (opcion >= 1 && opcion <= productos.length) {
        agregarAlCarrito(opcion - 1);
    } else if (opcion === productos.length + 1) {
        mostrarCarritoYTotal();
    } else if (opcion === productos.length + 2) {
        eliminarProductoCarrito();
    }
} while (opcion !== productos.length + 3);

alert("Gracias por visitar la tienda.");
