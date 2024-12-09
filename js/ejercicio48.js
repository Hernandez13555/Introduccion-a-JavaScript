let figura = prompt("¿Qué figura geométrica desea calcular el área? Triángulo (T) o Círculo (C):").toUpperCase();

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

function areaCirculo(radio) {
    return Math.PI * Math.pow(radio, 2);
}

if (figura === "T") {
    let base = parseFloat(prompt("Ingrese la base del triángulo:"));
    let altura = parseFloat(prompt("Ingrese la altura del triángulo:"));

    let area = areaTriangulo(base, altura);
    alert("El área del triángulo es: " + area.toFixed(2));

} else if (figura === "C") {
    let radio = parseFloat(prompt("Ingrese el radio del círculo:"));
    let area = areaCirculo(radio);

    alert("El área del círculo es: " + area.toFixed(2));
} else {
    alert("Figura no reconocida. Por favor, ingrese 'T' para Triángulo o 'C' para Círculo.");
}