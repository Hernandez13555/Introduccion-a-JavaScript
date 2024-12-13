let a = parseFloat(prompt("Ingrese el valor de 'a':"));
let b = parseFloat(prompt("Ingrese el valor de 'b':"));
let c = parseFloat(prompt("Ingrese el valor de 'c':"));

function evaluarExpresion(a, b, c) {
    return (a + 7 * c) / (b + 2 - a) + 2 * b;
}

let resultado = evaluarExpresion(a, b, c);

alert("El resultado de la expresión es: " + resultado);