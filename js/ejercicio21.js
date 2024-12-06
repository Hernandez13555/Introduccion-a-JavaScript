let a = parseFloat(prompt("Ingrese el radio semi-mayor (a):"));
let b = parseFloat(prompt("Ingrese el radio semi-menor (b):"));
let c = parseFloat(prompt("Ingrese el radio semi-intermedio (c):"));

function calcularVolumenElipsoide(a, b, c) {
    return (4 / 3) * Math.PI * a * b * c;
}

let volumen = calcularVolumenElipsoide(a, b, c);

alert("El volumen del elipsoide es: " + volumen);