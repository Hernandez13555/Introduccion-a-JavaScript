function mostrarNumerosImpares() {
    let numero = parseInt(prompt("Ingresa un número entero positivo:"));

    let impares = [];
    for (let i = 1; i <= numero; i++) {
        if (i % 2 !== 0) {
            impares.push(i);
        }
    }
    alert(`Números impares desde 1 hasta ${numero}: ${impares.join(", ")}`);
}

mostrarNumerosImpares();