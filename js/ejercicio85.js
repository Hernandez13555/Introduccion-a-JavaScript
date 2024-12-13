const input = prompt("Ingresa una serie de números separados por comas:");
const numeros = input.split(",").map(Number); //usar el split Divide la entrada del usuario en un arreglo de cadenas.
const resultado = sumaPositivos(numeros);
// map lo busque y investigue los siguiente: se usa para aplicar una transformación a cada elemento de un arreglo, en este caso, convertir las cadenas en números.
function sumaPositivos(numeros) {
    let suma = 0;
    for (let num of numeros) {
        if (num > 0) {
            suma += num;
        }
    }
    return suma;
}

alert(`el nuemro positivo es: ${resultado}`);
