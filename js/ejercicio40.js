let anoNacimiento = parseInt(prompt("Ingrese su año de nacimiento:"));

function calcularEdad(anoNacimiento) {
    const anoActual = new Date().getFullYear();
    const edad = anoActual - anoNacimiento;
    return edad;
}

let edad = calcularEdad(anoNacimiento);

alert("La edad del solicitante es: " + edad + " años.");