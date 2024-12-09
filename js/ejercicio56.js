let saldo = parseFloat(prompt("Ingrese el saldo de la cuenta:"));

function calcularInteres(saldo) {
    let tasaInteres;
    let interesPagado;
    let saldoFinal;

    if (saldo < 100000) {
        tasaInteres = 0.03;
    } else {
        tasaInteres = 0.04;
    }

    interesPagado = saldo * tasaInteres;
    saldoFinal = saldo + interesPagado;

    return { saldoFinal, interesPagado };
}

let { saldoFinal, interesPagado } = calcularInteres(saldo);

alert("Interés pagado: $" + interesPagado.toFixed(2));
alert("Saldo final: $" + saldoFinal.toFixed(2));
