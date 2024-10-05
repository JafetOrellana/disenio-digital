/*Ejercicio 3: Uso de async y await para Manejar Promesas
Descripción:
Reescribe el ejercicio anterior Utilizando async y await en lugar de .then() y .catch()
para manejar la promesa devuelta por consultarBaseDeDatos().
Instrucciones:
1. Cree una función ejecutarConsulta() declarada con async.
2. Dentro de la función, Utilice await para llamar a consultarBaseDeDatos().
3. Maneja la resolución y el recHagao de la promesa Utilizando try...catch.
4. Llama a ejecutarConsulta() para ejecutar el código.*/

function consultarBaseDeDatos() {
    return new Promise((resolve, reject) => {
        let randomNumber = Math.floor(Math.random() * 10) + 1;        
        setTimeout(() => {
            if (randomNumber % 2 === 0) {
                resolve('Consulta exitosa');
            } else {
                reject('Error en la consulta');
            }
        }, 3000)
    }) 
}

async function ejecutarConsulta() {
    try {
        const result = await consultarBaseDeDatos();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

ejecutarConsulta();