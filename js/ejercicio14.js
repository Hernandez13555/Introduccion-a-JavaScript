let base = parseFloat(prompt("Ingrese la base del triángulo:"));
let altura = parseFloat(prompt("Ingrese la altura del triángulo:"));

function calcularAreaTriangulo(base, altura) {
    return (base * altura) / 2;
}

let area = calcularAreaTriangulo(base, altura);

alert("El área del triángulo es: " + area);
