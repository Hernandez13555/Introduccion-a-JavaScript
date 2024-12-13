function generarNumeroYVerificar() {
    const numero = Math.floor(Math.random() * 10) + 1; // Genera un número aleatorio entre 1 y 10
    if (numero % 2 === 0) {
        alert(`${numero} es par.`);
    } else {
       alert(`${numero} es impar.`);
    }
}

generarNumeroYVerificar();
