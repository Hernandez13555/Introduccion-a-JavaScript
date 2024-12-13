function cuentaAtras() {
    let numero = parseInt(prompt("Ingresa un número entero positivo:"));

    let cuenta = [];
    for (let i = numero; i >= 0; i--) {
        cuenta.push(i);
    }
    alert(`Cuenta atrás desde ${numero}: ${cuenta.join(", ")}`);
}

cuentaAtras();
