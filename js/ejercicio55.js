let precioOriginal = parseFloat(prompt("Ingrese el precio original del helado:"));
let tipoMembresia = prompt("Ingrese el tipo de membresía (A, B o C):").toUpperCase();

function calcularPrecioFinal(precioOriginal, tipoMembresia) {
    let descuento;

    switch (tipoMembresia) {
        case 'A':
            descuento = 0.10;
            break;
        case 'B':
            descuento = 0.15;
            break;
        case 'C':
            descuento = 0.20;
            break;
        default:
            alert("Tipo de membresía no válido.");
            return null;
    }

    let precioFinal = precioOriginal - (precioOriginal * descuento);
    return precioFinal;
}

let precioFinal = calcularPrecioFinal(precioOriginal, tipoMembresia);

if (precioFinal !== null) {
    alert("El precio final con descuento es: $" + precioFinal.toFixed(2));
}