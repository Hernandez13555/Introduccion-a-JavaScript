let numero = parseInt(prompt("ingresar el numero que valla ser par o impar"));
function parOImpar(numero) {
    if (numero % 2 === 0) {
        return "El número es par";
    } else {
        return "El número es impar";
    }
}
alert(parOImpar(numero));  // Output: El número es impar
