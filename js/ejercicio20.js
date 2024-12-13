let a = parseFloat(prompt("Ingrese el valor de 'a':"));
let b = parseFloat(prompt("Ingrese el valor de 'b':"));
let c = parseFloat(prompt("Ingrese el valor de 'c':"));

function calcularRaicesCuadraticas(a, b, c) {
    let discriminante = Math.pow(b, 2) - 4 * a * c;
    if (discriminante > 0) {
        let raiz1 = (-b + Math.sqrt(discriminante)) / (2 * a);
        let raiz2 = (-b - Math.sqrt(discriminante)) / (2 * a);
        return `Las raíces son: ${raiz1} y ${raiz2}`;
    } else if (discriminante === 0) {
        let raiz = -b / (2 * a);
        return `La raíz es: ${raiz}`;
    } else {
        return "No hay raíces reales";
    }
}

let resultado = calcularRaicesCuadraticas(a, b, c);

alert(resultado);