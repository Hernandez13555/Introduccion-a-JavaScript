let a = parseInt(prompt("ingresar el primer numero de sumar"));
let b = parseInt(prompt("ingresar el segundo numero de sumar"));
function sumaEnBinario(a, b) {
    const suma = a + b;  // Sumar los dos números
    return suma.toString(2);  // Convertir el resultado en binario y devolverlo como cadena
}

let resultado = sumaEnBinario(a,b);
alert(`el resultado de la suma a binario es: ${resultado}`);