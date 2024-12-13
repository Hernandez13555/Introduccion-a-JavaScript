let numero = parseInt(prompt("Introduce un número entero:"));
function esPrimo(num) {
    if (num <= 1) {
        return false; 
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false; 
        }
    }
    return true; 
}
if (esPrimo(numero)) {
    alert(`${numero} es un número primo.`);
} else {
    alert(`${numero} no es un número primo.`);
}
