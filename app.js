// Variable para almacenar la lista de amigos.
let amigos = [];

/**
 * Agrega un nuevo amigo a la lista.
 * Valida que el nombre no esté vacío y que no se haya agregado previamente.
 */
function agregarAmigo() {
    // 1. Capturar el valor del campo de entrada y limpiarlo de espacios extra.
    let nombreAmigo = document.getElementById('amigo').value.trim();

    // 2. Validar que la entrada no esté vacía.
    if (nombreAmigo === '') {
        alert('Por favor, ingresa un nombre válido.');
        return; // Detiene la ejecución de la función si el campo está vacío.
    }

    // Validación extra: verificar si el amigo ya está en la lista.
    if (amigos.includes(nombreAmigo)) {
        alert('Este nombre ya ha sido agregado. Por favor, ingresa uno diferente.');
        document.getElementById('amigo').value = ''; // Limpia el campo
        return;
    }

    // 3. Añadir el nombre al array 'amigos'.
    amigos.push(nombreAmigo);

    // 4. Actualizar la lista visible en la pantalla.
    actualizarListaAmigos();

    // 5. Limpiar el campo de entrada para el siguiente nombre.
    document.getElementById('amigo').value = '';
}

/**
 * Realiza el sorteo del amigo secreto.
 * Selecciona un nombre al azar de la lista de amigos.
 */
function sortearAmigo() {
    // 1. Validar que haya al menos 2 amigos para poder sortear.
    if (amigos.length < 2) {
        alert('Debes agregar al menos dos amigos para realizar el sorteo.');
        return; // Detiene la función si no hay suficientes amigos.
    }

    // 2. Generar un índice aleatorio.
    // Se multiplica Math.random() por la longitud del array para obtener un número entre 0 y la longitud-1.
    // Math.floor() redondea hacia abajo para obtener un índice entero.
    let indiceSorteado = Math.floor(Math.random() * amigos.length);

    // 3. Obtener el nombre del amigo sorteado usando el índice.
    let amigoSorteado = amigos[indiceSorteado];

    // 4. Mostrar el resultado en la pantalla.
    let elementoResultado = document.getElementById('resultado');
    elementoResultado.innerHTML = `¡El amigo secreto es: <strong>${amigoSorteado}</strong>!`;
}

/**
 * Actualiza la lista de amigos que se muestra en el HTML.
 */
function actualizarListaAmigos() {
    let listaHTML = document.getElementById('listaAmigos');
    // Para mostrar los nombres como una lista, los unimos con una coma y un espacio.
    listaHTML.textContent = amigos.join(', ');
}

/**
 * (Opcional) Función para reiniciar el juego.
 * Puedes añadir un botón en el HTML que llame a esta función si lo deseas.
 * Ejemplo: <button onclick="reiniciar()">Reiniciar</button>
 */
function reiniciar() {
    amigos = [];
    document.getElementById('listaAmigos').textContent = '';
    document.getElementById('resultado').innerHTML = '';
    document.getElementById('amigo').value = '';
    alert('¡El juego ha sido reiniciado!');
}