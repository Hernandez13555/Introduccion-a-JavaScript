let area = parseFloat(prompt("Ingrese el área a pintar en metros cuadrados (m²):"));
let precioPorMetroCuadrado = parseFloat(prompt("Ingrese el precio por metro cuadrado (m²):"));

function calcularCostoPintura(area, precioPorMetroCuadrado) {
    return area * precioPorMetroCuadrado;
}

let costoTotal = calcularCostoPintura(area, precioPorMetroCuadrado);

alert("El costo total del trabajo de pintura es: $" + costoTotal.toFixed(2));
