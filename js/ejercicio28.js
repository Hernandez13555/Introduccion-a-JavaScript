let nombre = prompt("Ingrese el nombre del empleado:");
let horasTrabajo = parseFloat(prompt("Ingrese las horas de trabajo:"));
let pagoPorHora = parseFloat(prompt("Ingrese el pago por hora:"));

function calcularSueldo(horasTrabajo, pagoPorHora) {
    return horasTrabajo * pagoPorHora;
}

let sueldo = calcularSueldo(horasTrabajo, pagoPorHora);

alert("Nombre del empleado: " + nombre);
alert("Horas de trabajo: " + horasTrabajo);
alert("Pago por hora: $" + pagoPorHora.toFixed(2));
alert("Sueldo total: $" + sueldo.toFixed(2));