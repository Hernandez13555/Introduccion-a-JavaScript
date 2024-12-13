let num1 = parseFloat(prompt("Ingrese el primer número:"));
let num2 = parseFloat(prompt("Ingrese el segundo número:"));

function restarSiMayor(num1, num2) {
    if (num1 > num2) {
        return num1 - num2;
    } else {
        return "La operación no es posible porque el primer número no es mayor que el segundo.";
    }
}

let resultado = restarSiMayor(num1, num2);

alert(resultado);