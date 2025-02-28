// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Creación de ArrayList con los nombres a ingresar
let amigos = [];

//Función Agregar Amigos
function agregarAmigo() {
    //Obtener el valor del campo de entrada
    let amigo = document.getElementById("amigo").value.trim();

    //Validación de que no esté vacío el campo.
    if (!amigos) {
        alert("Por favor, ingresa un nombre.");
        return;
    }

    //Agregar el dato al Array
    amigos.push(amigo);
    console.log(amigos);

    //Limpiar el campo de entrada
    document.getElementById('amigo').value = "";
    renderizarAmigos();
    //Agregar Foco al Imput
    document.getElementById('amigo').focus();
}

function renderizarAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    for (let index = 0; index < amigos.length; index++) {
        let item = document.createElement("li");
        item.textContent = amigos[index];
        listaAmigos.appendChild(item);
    }
}
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos, debes ingresar al menos 1 por favor");
        return;
    }
    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;

    let limpiarLista = document.getElementById("listaAmigos");
    limpiarLista.innerHTML = "";
    amigos = [];
}

//Implemeta una función para agregar amigos

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