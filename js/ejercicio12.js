let base = parseFloat(prompt("Ingrese la base del rectángulo:"));
let altura = parseFloat(prompt("Ingrese la altura del rectángulo:"));

function calcularAreaRectangulo(base, altura) {
    return base * altura;
}

let area = calcularAreaRectangulo(base, altura);

alert("El área del rectángulo es: " + area);
