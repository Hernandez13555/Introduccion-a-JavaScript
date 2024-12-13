const numeros = [3, 7, 2, 5, 10, 4];
function obtenerMayorElemento(arr) {
    if (arr.length === 0) {
        return null; // Devuelve null si el arreglo está vacío
    }
    let mayor = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > mayor) {
            mayor = arr[i];
        }
    }
    return mayor;
}
let resultado = obtenerMayorElemento(numeros)
alert(`el nuemro mayor es: ${resultado}`);
