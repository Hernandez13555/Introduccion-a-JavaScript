let radio = parseFloat(prompt("Ingrese el radio de la circunferencia:"));

function calcularLongitudCircunferencia(radio) {
    return 2 * Math.PI * radio;
}

function calcularAreaCircunferencia(radio) {
    return Math.PI * radio * radio;
}

let longitud = calcularLongitudCircunferencia(radio);
let area = calcularAreaCircunferencia(radio);

alert("La longitud de la circunferencia es: " + longitud);
alert("El área de la circunferencia es: " + area);
