function calcularParteLorena() {
    const parteMartin = 2 / 3;
    const parteJairo = 1 / 4;
    const parteLorena = 1 - parteMartin - parteJairo;

    alert("Parte de Martín: " + parteMartin.toFixed(2));
    alert("Parte de Jairo: " + parteJairo.toFixed(2));
    alert("Parte de Lorena: " + parteLorena.toFixed(2));
}

calcularParteLorena();