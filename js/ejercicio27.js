let parcial1 = parseFloat(prompt("Ingrese la calificación del primer parcial:"));
let parcial2 = parseFloat(prompt("Ingrese la calificación del segundo parcial:"));
let parcial3 = parseFloat(prompt("Ingrese la calificación del tercer parcial:"));
let examenFinal = parseFloat(prompt("Ingrese la calificación del examen final:"));
let trabajoFinal = parseFloat(prompt("Ingrese la calificación del trabajo final:"));

function calcularPromedioFinal(parcial1, parcial2, parcial3, examenFinal, trabajoFinal) {
    let promedioParciales = (parcial1 + parcial2 + parcial3) / 3;
    let porcentajeParciales = promedioParciales * 0.55;
    let porcentajeExamenFinal = examenFinal * 0.30;
    let porcentajeTrabajoFinal = trabajoFinal * 0.15;
    let promedioFinal = porcentajeParciales + porcentajeExamenFinal + porcentajeTrabajoFinal;

    return promedioFinal;
}

let promedioFinal = calcularPromedioFinal(parcial1, parcial2, parcial3, examenFinal, trabajoFinal);

alert("El promedio final de la materia de algoritmos es: " + promedioFinal);
