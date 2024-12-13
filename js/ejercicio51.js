let consumo = parseFloat(prompt("Ingrese el consumo del restaurante:"));

function calcularTotalPago(consumo) {
    const limiteDescuento = 130000;
    const descuento = 0.15;
    let totalPago;

    if (consumo > limiteDescuento) {
        totalPago = consumo - (consumo * descuento);
    } else {
        totalPago = consumo;
    }

    return totalPago;
}

let totalPago = calcularTotalPago(consumo);

alert("El total a pagar es: $" + totalPago.toFixed(2));
