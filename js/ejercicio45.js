let numero = parseFloat(prompt("Ingrese un número:"));

function esPositivoYMenorQueCien(numero) {
    return numero > 0 && numero < 100;
}

if (esPositivoYMenorQueCien(numero)) {
    alert("El número es positivo y menor que 100.");
} else {
    alert("El número no cumple con las condiciones.");
}