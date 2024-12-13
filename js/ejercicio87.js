let cadena = prompt("ingresar una cade para eliminar vocales")
function eliminarVocales(cadena) {
    return cadena.replace(/[aeiouAEIOU]/g, ''); // Reemplaza todas las vocales por una cadena vacía
}
let resultado= eliminarVocales(cadena)
alert(`la cadena se a eliminado las volaces asi queda: ${resultado}`)
