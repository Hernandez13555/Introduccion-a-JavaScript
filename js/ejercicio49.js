let lado1 = parseFloat(prompt("Ingrese el primer lado del rectángulo:"));
let lado2 = parseFloat(prompt("Ingrese el segundo lado del rectángulo:"));

function calcularAreaRectangulo(lado1, lado2) {
    if (lado1 > 0 && lado2 > 0) {
        return lado1 * lado2;
    } else {
        return "Los lados deben ser positivos.";
    }
}

let area = calcularAreaRectangulo(lado1, lado2);

alert("El área del rectángulo es: " + area);