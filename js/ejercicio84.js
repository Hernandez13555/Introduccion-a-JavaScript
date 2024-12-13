let num =prompt("ingresar numero de filas")
function generarPiramide(filas) {
    for (let i = 1; i <= filas; i++) {
        const espacios = " ".repeat(filas - i);
        const asteriscos = "*".repeat(2 * i - 1);
        alert(espacios + asteriscos + espacios);
    }
}
let resultado = generarPiramide(num);
alert (`el total de filas es ${num}`);