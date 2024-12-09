let tipoEmpleado = prompt("Ingrese el tipo de empleado (planta/administrativo):").toLowerCase();
let horasTrabajadas = parseFloat(prompt("Ingrese el total de horas trabajadas:"));

function calcularPago(tipoEmpleado, horasTrabajadas) {
    const tarifaPlanta = 20000;
    const tarifaAdministrativo = 10000;
    let pago;

    if (tipoEmpleado === 'planta') {
        pago = horasTrabajadas * tarifaPlanta;
    } else if (tipoEmpleado === 'administrativo') {
        pago = horasTrabajadas * tarifaAdministrativo;
    } else {
        return "Tipo de empleado no válido.";
    }

    return pago;
}


let pago = calcularPago(tipoEmpleado, horasTrabajadas);

alert("El pago total es: $" + pago.toFixed(2));