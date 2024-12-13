const texto =prompt("ingresa una palabra");
const textoInvertido = invertirCadena(texto);
function invertirCadena(cadena) {
    return cadena.split("").reverse().join("");
}
let resultado = invertirCadena(texto);
alert(`el texto invertido es: ${resultado}`); //ejemplo de salida podria ser aloh
