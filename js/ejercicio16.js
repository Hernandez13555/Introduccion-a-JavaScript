let distanciaKm = 2; 
let tiempoMin = 5; 

function calcularVelocidad(distanciaKm, tiempoMin) {
    let distanciaMetros = distanciaKm * 1000;

    let tiempoSegundos = tiempoMin * 60;

    return distanciaMetros / tiempoSegundos;
}

let velocidad = calcularVelocidad(distanciaKm, tiempoMin);

alert("La velocidad del proyectil es: " + velocidad + " metros/segundo");
