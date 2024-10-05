/*Ejercicio 5: Gestión de Tareas Pendientes
Descripción:
Desarrolla una pequeña aplicación que gestione una lista de tareas. Cada tarea tiene
una descripción y un estado de completado. Implementa funcionalidades para
agregar tareas, marcarlas como completadas y listar las tareas pendientes y
completadas.
Instrucciones:
1. Cree un array tareas para almacenar las tareas.
2. Define funciones para:
o Agregar una tarea: Agrega un objeto al array con descripcion y
completada (inicialmente false).
o Marcar una tarea como completada: Cambia el estado de
completada a true para una tarea específica.
o Listar tareas pendientes: Muestra las tareas que no están
completadas.
o Listar tareas completadas: Muestra las tareas que están
completadas.
3. Agrega algunas tareas Utilizando la función de agregar.
4. Marca algunas tareas como completadas.
5. Lista las tareas pendientes y completadas.
Ejemplo de uso de funciones:
// Agregar tareas
agregarTarea("Comprar leche");
agregarTarea("Llamar al médico");
agregarTarea("Estudiar JavaScript");
// Marcar tareas como completadas
marcarTareaComoCompletada("Comprar leche");
// Listar tareas
listarTareasPendientes();
listarTareasCompletadas();*/

let tareas = [];

const agregarTarea = (tarea) => {
   tareas.push({descripcion: tarea, completada: false})
}

const marcarTareaComoCompletada = (tarea) => {

   let posicion = tareas.findIndex(t => t.descripcion === tarea);
   
   if (posicion >= 0) {
        tareas[posicion].completada = true;     
   }
   else{
    console.log("Esa tarea no se encuentra en el registro de tareas");
    
   }
}

const listarTareasPendientes = () => {
    tareas.forEach(element => {
        if (!element.completada) {
            console.log(element);
            
        }
    });
}

const listarTareasCompletadas = () => {
    tareas.forEach(element => {
        if (element.completada) {
            console.log(element);
            
        }
    });
}

// Agregar tareas
agregarTarea("Comprar leche");
agregarTarea("Llamar al médico");
agregarTarea("Estudiar JavaScript");
agregarTarea("Hacer ejercicio");
agregarTarea("Leer un libro");
agregarTarea("Limpiar la casa");
agregarTarea("Enviar correos");
agregarTarea("Revisar tareas escolares");
agregarTarea("Pagar las cuentas");
agregarTarea("Preparar la presentación para el trabajo");

// Marcar tareas como completadas
marcarTareaComoCompletada("Hacer ejercicio");
marcarTareaComoCompletada("Leer un libro");
marcarTareaComoCompletada("Limpiar la casa");
marcarTareaComoCompletada("Enviar correos");
marcarTareaComoCompletada("Revisar tareas escolares");
// Listar tareas

//Tareas pendientes
console.log('Tareas pendientes');

listarTareasPendientes();

//Tareas completadas
console.log('Tareas completadas');
listarTareasCompletadas();