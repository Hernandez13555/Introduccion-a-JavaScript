let pesos = parseFloat(prompt("Ingrese la cantidad de pesos colombianos a convertir:"));

const TASA_CAMBIO_DOLAR = 0.00023; 
const TASA_CAMBIO_EURO = 0.00021;  

function convertirPesosADolares(pesos) {
    return pesos * TASA_CAMBIO_DOLAR;
}

function convertirPesosAEuros(pesos) {
    return pesos * TASA_CAMBIO_EURO;
}

let dolares = convertirPesosADolares(pesos);
let euros = convertirPesosAEuros(pesos);

alert("Equivalente en dólares: $" + dolares.toFixed(2));
alert("Equivalente en euros: €" + euros.toFixed(2));
