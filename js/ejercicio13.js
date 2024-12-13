let n1 = parseFloat(prompt("Ingrese el primer número:"));
let n2 = parseFloat(prompt("Ingrese el segundo número:"));
let n3 = parseFloat(prompt("Ingrese el tercer número:"));
let n4 = parseFloat(prompt("Ingrese el cuarto número:"));

function calcularMedia(n1, n2, n3, n4) {
    return (n1 + n2 + n3 + n4) / 4;
}

let media = calcularMedia(n1, n2, n3, n4);

alert("La media de los cuatro números es: " + media);
