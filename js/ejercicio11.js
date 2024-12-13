let numero1 = parseFloat(prompt("Ingrese el primer número:"));
let numero2 = parseFloat(prompt("Ingrese el segundo número:"));

function sumar(num1, num2) {
    return num1 + num2;
}

function restar(num1, num2) {
    return num1 - num2;
}

function multiplicar(num1, num2) {
    return num1 * num2;
}

function dividir(num1, num2) {
    if (num2 !== 0) {
        return num1 / num2;
    } else {
        return "No se puede dividir por cero";
    }
}

alert("Suma: " + sumar(numero1, numero2));
alert("Resta: " + restar(numero1, numero2));
alert("Multiplicación: " + multiplicar(numero1, numero2));
alert("División: " + dividir(numero1, numero2));
