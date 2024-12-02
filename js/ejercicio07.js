let rentaAnual = parseFloat(prompt("Por favor ingrese su renta anual:"));
let tipoImpositivo;

if (rentaAnual >= 10000 && rentaAnual < 20000) {
    tipoImpositivo = "5%";
} else if (rentaAnual >= 20000 && rentaAnual < 35000) {
    tipoImpositivo = "10%";
} else if (rentaAnual >= 35000 && rentaAnual < 60000) {
    tipoImpositivo = "20%";
} else if (rentaAnual >= 60000) {
    tipoImpositivo = "45%";
} else {
    tipoImpositivo = "No aplica";
}

alert(`Su tipo impositivo es: ${tipoImpositivo}`);