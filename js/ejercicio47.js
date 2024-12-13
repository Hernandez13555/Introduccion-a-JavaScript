let num1 = parseFloat(prompt("Ingrese el primer número:"));
let num2 = parseFloat(prompt("Ingrese el segundo número:"));
let num3 = parseFloat(prompt("Ingrese el tercer número:"));

function determinarValores(num1, num2, num3) {
    let mayor, menor;

    if (num1 === num2 && num1 === num3) {
        return "Todos los valores son iguales";
    }

    if (num1 > num2 && num1 > num3) {
        mayor = num1;
    } else if (num2 > num1 && num2 > num3) {
        mayor = num2;
    } else {
        mayor = num3;
    }

    if (num1 < num2 && num1 < num3) {
        menor = num1;
    } else if (num2 < num1 && num2 < num3) {
        menor = num2;
    } else {
        menor = num3;
    }

    return `El mayor valor es: ${mayor} y el menor valor es: ${menor}`;
}

let resultado = determinarValores(num1, num2, num3);
alert(resultado);