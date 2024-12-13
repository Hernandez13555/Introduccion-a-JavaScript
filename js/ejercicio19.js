let radio = parseFloat(prompt("Ingrese el radio del cilindro:"));
let altura = parseFloat(prompt("Ingrese la altura del cilindro:"));

function calcularAreaCilindro(radio, altura) {
    return 2 * Math.PI * radio * (radio + altura);
}

function calcularVolumenCilindro(radio, altura) {
    return Math.PI * Math.pow(radio, 2) * altura;
}

let area = calcularAreaCilindro(radio, altura);
let volumen = calcularVolumenCilindro(radio, altura);

alert("El área superficial del cilindro es: " + area);
alert("El volumen del cilindro es: " + volumen);
