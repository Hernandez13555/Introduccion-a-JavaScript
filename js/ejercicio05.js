let edad = parseInt(prompt("Por favor ingresa tu edad:"));
let ingresos = parseFloat(prompt("Por favor ingresa tus ingresos mensuales:"));

if (edad > 16 && ingresos >= 1000) {
    alert("Debes tributar.");
} else {
    alert("No debes tributar.");
}
