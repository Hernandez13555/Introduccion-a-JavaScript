try {
    let numerador = parseFloat(prompt("Ingrese el numerador:"));

    let divisor = parseFloat(prompt("Ingrese el divisor:"));

    if (divisor === 0) {
        throw new Error("Error: No se puede dividir por cero. Ingrese un divisor diferente de cero.");
    }

    let resultado = numerador / divisor;
    alert(`El resultado de la división es: ${resultado}`);
} catch (error) {
    alert(error.message);
}
