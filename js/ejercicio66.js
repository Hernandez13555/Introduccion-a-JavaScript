function calcularInversion() {
    let cantidad = parseFloat(prompt("Ingresa la cantidad a invertir:"));
    let interes = parseFloat(prompt("Ingresa el interés anual (en %):")) / 100;
    let anios = parseInt(prompt("Ingresa el número de años:"));

    for (let i = 1; i <= anios; i++) {
        cantidad += cantidad * interes;
        alert(`Año ${i}: Capital acumulado = ${cantidad.toFixed(2)}`);
    }
}

calcularInversion();
