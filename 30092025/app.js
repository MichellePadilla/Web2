// Clase para representar una tarea
class Tarea {
    constructor(nombre) {
        this.nombre = nombre;
        this.completado = false;
    }
}

// Arreglo para almacenar las tareas
let tareas = [];

// Función para mostrar el menú de opciones
function mostrarMenu() {
    return parseInt(prompt(`
Bienvenido a tu gestor de tareas
Selecciona una opción:
1️⃣ Agregar tarea
2️⃣ Ver todas las tareas
3️⃣ Completar tarea
4️⃣ Salir
5️⃣ Eliminar tarea
6️⃣ Eliminar tareas completadas
Elige una opción:
`));
}

// Función para agregar una tarea
function agregarTarea() {
    let nombre = prompt("Introduce el nombre de la tarea:");
    if (nombre) {
        tareas.push(new Tarea(nombre));
        alert("La tarea se agregó de manera exitosa");
    } else {
        alert("El nombre de la tarea no puede estar vacío");
    }
}

// Función para ver todas las tareas
function verTareas() {
    if (tareas.length === 0) {
        alert("No hay tareas en la lista");
        return;
    }
    const mensaje = tareas
        .map((t, i) => `${i + 1}.- ${t.nombre} [${t.completado ? "Completada" : "Pendiente"}]`)
        .join("\n");
    alert("Lista de tareas:\n" + mensaje);
}

// Función para marcar una tarea como completada
function tareaCompleta() {
    const pendientes = tareas.filter(t => !t.completado);
    if (pendientes.length === 0) {
        alert("No hay tareas pendientes");
        return;
    }
    const mensaje = pendientes
        .map((t, i) => `${i + 1}.- ${t.nombre}`)
        .join("\n");
    let seleccion = parseInt(prompt("Elige la tarea que quieres completar:\n" + mensaje));
    if (seleccion > 0 && seleccion <= pendientes.length) {
        const tarea = pendientes[seleccion - 1];
        tarea.completado = true;
        alert(`La tarea "${tarea.nombre}" fue marcada como completada`);
    } else {
        alert("Número ingresado no corresponde a una tarea");
    }
}

// Función para eliminar una tarea específica
function eliminarTarea() {
    if (tareas.length === 0) {
        alert("No hay tareas para eliminar");
        return;
    }
    const mensaje = tareas
        .map((t, i) => `${i + 1}.- ${t.nombre} [${t.completado ? "Completada" : "Pendiente"}]`)
        .join("\n");
    let eliminar = parseInt(prompt("Elige la tarea que deseas eliminar:\n" + mensaje));
    if (eliminar > 0 && eliminar <= tareas.length) {
        let nombreEliminada = tareas.splice(eliminar - 1, 1)[0];
        alert(`La tarea "${nombreEliminada.nombre}" fue eliminada`);
    } else {
        alert("Número ingresado no corresponde a una tarea");
    }
}

// Función para eliminar todas las tareas completadas
function eliminarTareasCompletadas() {
    if (tareas.length === 0) {
        alert("No hay tareas en la lista");
        return;
    }
    let tareasPendientes = tareas.filter(t => !t.completado);
    let eliminadas = tareas.length - tareasPendientes.length;
    if (eliminadas > 0) {
        tareas = tareasPendientes;
        alert(`Se eliminaron ${eliminadas} tarea(s) completada(s)`);
    } else {
        alert("No hay tareas completadas para eliminar");
    }
}

// Función principal que inicia el programa
function iniciarPrograma() {
    let opcion;
    do {
        opcion = mostrarMenu();
        switch (opcion) {
            case 1:
                agregarTarea();
                break;
            case 2:
                verTareas();
                break;
            case 3:
                tareaCompleta();
                break;
            case 4:
                alert("Saliendo del programa");
                break;
            case 5:
                eliminarTarea();
                break;
            case 6:
                eliminarTareasCompletadas();
                break;
            default:
                alert("Opción inválida, intenta de nuevo");
        }
    } while (opcion !== 4);
}

// Iniciar el programa
iniciarPrograma();
