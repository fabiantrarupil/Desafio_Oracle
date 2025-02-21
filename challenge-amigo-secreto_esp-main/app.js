// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Creación de ArrayList con los nombres a ingresar
let amigos = [];

//Función Agregar Amigos
function agregarAmigo() {
    //Obtener el valor del campo de entrada
    let amigo = document.getElementById('amigo').value;

    //Validación de que no esté vacío el campo.
    if (amigo.trim() === "") {
        alert("Por favor, ingresa un nombre.");
        return;
    }

    //Agregar el dato al Array
    amigos.push(amigo);
    console.log(amigos);

    //Limpiar el campo de entrada
    document.getElementById('amigo').value = "";
}



//Implementa una función para agregar amigos

//Desarrolla una función, que permita al usuario
// ingresar un nombre en el campo de texto y añadirlo
// a la lista de amigos creada anteriormente.

//Tareas específicas:

//Capturar el valor del campo de entrada: Utilizar
// document.getElementById o document.querySelector
// para obtener el texto ingresado por el usuario.

//Validar la entrada: Implementar una validación
// para asegurarse de que el campo no esté vacío.
// Si está vacío, mostrar un alert con un mensaje de error:
// "Por favor, inserte un nombre."

//Actualizar el array de amigos: Si el valor es válido,
// añadirlo al arreglo que almacena los nombre de
// amigos usando el método.push().

//Limpiar el campo de entrada: Después de añadir el nombre,
// restablecer el campo de texto a una cadena vacía.