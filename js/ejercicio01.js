let edad = prompt("Por favor, ingresa tu edad:");

if (edad > 0) {
    if (edad >= 18) {
        alert("Eres mayor de edad.");
    } else {
        alert("Eres menor de edad.");
    }
} else {
    alert("Por favor ingresa un número positivo.");
}