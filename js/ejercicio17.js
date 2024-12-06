let radio = parseFloat(prompt("Ingrese el radio de la esfera:"));

function calcularVolumenEsfera(radio) {
    return (4 / 3) * Math.PI * Math.pow(radio, 3);
}

let volumen = calcularVolumenEsfera(radio);

alert("El volumen de la esfera es: " + volumen);