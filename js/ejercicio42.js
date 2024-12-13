let cantidadLibros = parseInt(prompt("Ingrese la cantidad de libros vendidos:"));
let cantidadCuadernos = parseInt(prompt("Ingrese la cantidad de cuadernos vendidos:"));
let cantidadLapiceros = parseInt(prompt("Ingrese la cantidad de lapiceros vendidos:"));

function calcularMontoTotal(cantidadLibros, cantidadCuadernos, cantidadLapiceros) {
    const precioLibro = 10000;
    const precioCuaderno = 7550;
    const precioLapicero = 5550;

    const totalLibros = cantidadLibros * precioLibro;
    const totalCuadernos = cantidadCuadernos * precioCuaderno;
    const totalLapiceros = cantidadLapiceros * precioLapicero;
    const montoTotal = totalLibros + totalCuadernos + totalLapiceros;

    return montoTotal;
}

let montoTotal = calcularMontoTotal(cantidadLibros, cantidadCuadernos, cantidadLapiceros);

alert("El monto total de la venta es: $" + montoTotal.toFixed(2));
