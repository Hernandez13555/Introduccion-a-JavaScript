let velocidadKmh = parseFloat(prompt("Ingrese la velocidad del automóvil en km/h:"));

function convertirVelocidad(velocidadKmh) {
    return velocidadKmh * (5 / 18);
}

let velocidadMs = convertirVelocidad(velocidadKmh);

alert("La velocidad del automóvil en m/s es: " + velocidadMs);