let calificacion = parseFloat(prompt("ingresa una calificacion (ejemplo 3.0)")); 
function asignarCalificacion(calificacion) {
    let calificacionLiteral;

    if (calificacion >= 9.1 && calificacion <= 10) {
        calificacionLiteral = 'A (Excelente)';
    } else if (calificacion >= 8.1 && calificacion <= 9) {
        calificacionLiteral = 'A (Muy bien)';
    } else if (calificacion >= 7.5 && calificacion <= 8) {
        calificacionLiteral = 'A (Bien)';
    } else if (calificacion < 7.5) {
        calificacionLiteral = 'NA (No Aprobado)';
    } else {
        calificacionLiteral = 'Calificación fuera de rango';
    }

    alert("Calificación Numérica: " + calificacion);
    alert("Calificación Literal: " + calificacionLiteral);
}
asignarCalificacion(calificacion);