let fechaNacimientoMadre = prompt("Ingrese la fecha de nacimiento de la madre (YYYY-MM-DD):");
let fechaNacimientoHijo = prompt("Ingrese la fecha de nacimiento del hijo (YYYY-MM-DD):");

function calcularEdadMadre(fechaNacimientoMadre, fechaNacimientoHijo) {
    let fechaMadre = new Date(fechaNacimientoMadre);
    let fechaHijo = new Date(fechaNacimientoHijo);
    let edadMadre = fechaHijo.getFullYear() - fechaMadre.getFullYear();
    
    if (fechaHijo.getMonth() < fechaMadre.getMonth() || 
        (fechaHijo.getMonth() === fechaMadre.getMonth() && fechaHijo.getDate() < fechaMadre.getDate())) {
        edadMadre--;
    }
    return edadMadre;
}

let edadMadre = calcularEdadMadre(fechaNacimientoMadre, fechaNacimientoHijo);

alert("La edad de la madre en el momento del nacimiento del hijo es: " + edadMadre + " años.");