let duracionMinutos = parseFloat(prompt("Ingrese la duración de la llamada en minutos:"));

function calcularPagoLlamada(duracionMinutos) {
    const costoPorMinuto = 355;
    const iva = 0.20;

    let costoBase = duracionMinutos * costoPorMinuto;

    let montoIVA = costoBase * iva;

    let costoTotal = costoBase + montoIVA;

    return costoTotal;
}

let pagoTotal = calcularPagoLlamada(duracionMinutos);

alert("El pago total de la llamada telefónica es: $" + pagoTotal + " pesos.");
