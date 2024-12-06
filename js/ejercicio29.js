let calificacion1 = parseFloat(prompt("Ingrese la calificación del primer examen (1 a 5):"));
let calificacion2 = parseFloat(prompt("Ingrese la calificación del segundo examen (1 a 5):"));
let calificacion3 = parseFloat(prompt("Ingrese la calificación del tercer examen (1 a 5):"));
let calificacion4 = parseFloat(prompt("Ingrese la calificación del cuarto examen (1 a 5):"));

function calcularPromedio(calificaciones) {
    let suma = 0;
    for (let i = 0; i < calificaciones.length; i++) {
        suma += calificaciones[i];
    }
    return suma / calificaciones.length;
}

if ([calificacion1, calificacion2, calificacion3, calificacion4].some(c => c < 1 || c > 5)) {
    console.log("Las calificaciones deben estar en el rango de 1 a 5.");
} else {
    let promedio = calcularPromedio([calificacion1, calificacion2, calificacion3, calificacion4]);
    alert("El promedio de las calificaciones es: " + promedio.toFixed(2));
}
