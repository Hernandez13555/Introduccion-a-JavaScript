const cantidadCajas = 25;
const pesoPorCaja = 748; 

function calcularPesoTotal(cantidadCajas, pesoPorCaja) {
    return cantidadCajas * pesoPorCaja;
}

const pesoTotal = calcularPesoTotal(cantidadCajas, pesoPorCaja);

alert("El camión transporta un total de " + pesoTotal + " kilogramos.");