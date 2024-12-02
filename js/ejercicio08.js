let puntuacion = parseFloat(prompt("Introduce tu puntuación (0.0, 0.4, 0.6 o más): "));
const baseDinero = 2400;
let nivel;
let dinero;

if (puntuacion === 0.0) {
    nivel = "Inaceptable";
    dinero = baseDinero * puntuacion;
} else if (puntuacion === 0.4) {
    nivel = "Aceptable";
    dinero = baseDinero * puntuacion;
} else if (puntuacion >= 0.6) {
    nivel = "Meritorio";
    dinero = baseDinero * puntuacion;
} else {
    nivel = "Puntuación no válida";
    dinero = 0;
}

if (nivel === "Puntuación no válida") {
    alert("La puntuación ingresada no es válida.");
} else {
    alert(`Tu nivel de rendimiento es: ${nivel}`);
    alert(`La cantidad de dinero que recibirás es: ${dinero.toFixed(2)}€`);
}