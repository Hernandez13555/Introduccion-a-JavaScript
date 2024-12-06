let costo = parseFloat(prompt("Ingrese el costo de los medicamentos:"));

function calcularDescuentoPrecioFinal(costo) {
    const descuento = 0.10; 

    let montoDescuento = costo * descuento;

    let precioFinal = costo - montoDescuento;

    return { montoDescuento, precioFinal };
}

let { montoDescuento, precioFinal } = calcularDescuentoPrecioFinal(costo);

alert("El monto del descuento es: $" + montoDescuento.toFixed(2) + " pesos.");
alert("El precio final después del descuento es: $" + precioFinal.toFixed(2) + " pesos.");