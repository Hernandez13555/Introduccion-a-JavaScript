function calcularPago(cantidadCursos) {
    let pagoPorCurso;
    if (cantidadCursos < 6) {
    pagoPorCurso = 2000000;
    }
    else {
    pagoPorCurso = 1200000;
    }
    const pagoTotal = cantidadCursos * pagoPorCurso;
    return pagoTotal;
}
function procesarPagos() {
    const cantidadCursos = parseInt(prompt("Ingresa la cantidad de cursos que lleva el alumno: "), 10);
    if (isNaN(cantidadCursos) || cantidadCursos < 0) {
    console.log("Por favor ingresa un número válido de cursos.");
    } else {
    const pagoTotal = calcularPago(cantidadCursos);
    console.log(`El alumno lleva ${cantidadCursos} cursos y debe pagar $${pagoTotal.toLocaleString()}`);
    }
}
procesarPagos();
