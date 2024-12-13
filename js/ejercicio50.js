let temperatura = parseFloat(prompt("Ingrese la temperatura:"));
let presion = parseFloat(prompt("Ingrese la presión:"));

if (presion > 200 || temperatura > 100) {
    alert("Alarma");
} else {
    alert("Normal");
}
