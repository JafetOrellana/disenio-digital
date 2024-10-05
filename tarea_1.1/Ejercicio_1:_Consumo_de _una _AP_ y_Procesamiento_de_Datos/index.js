/*Ejercicio 1: Consumo de una API y Procesamiento de Datos
Descripción:
Utilice fetch para obtener una lista de usuarios desde la API pública de
JSONPlaceholder. Luego, procese los datos para extraer y mostrar en la consola los
nombres y correos electrónicos de los usuarios.
Instrucciones:
1. Haga una petición GET a https://jsonplaceholder.typicode.com/users
Utilizando fetch.
2. Convierte la respuesta en formato JSON.
3. Utilice un ciclo (for o forEach) para iterar sobre los usuarios.
4. Por cada usuario, muestra en la consola su nombre y correo electrónico.
5. Maneja posibles errores Utilizando .catch() o un bloque try...catch si usa
async/await.
Ejemplo de salida:
Nombre: Leanne Graham, Email: Sincere@april.biz
Nombre: Ervin Howell, Email: Shanna@melissa.tv*/

async function getUsers() {
    try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');   
    if (!response.ok) {
        throw new Error('Error en la respuesta de la red');
    } 
    const users = await response.json();

    users.forEach(({ name, email }) => {
        console.log(`Nombre: ${name}, Email: ${email}`);
    });

        }
    catch (error) {
        console.log('Ha ocurrido un error con la petición', error);
        
    }

}

getUsers();