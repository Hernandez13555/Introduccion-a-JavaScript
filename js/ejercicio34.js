const caudal = parseFloat(prompt("Ingrese el caudal (litros/segundo):"));
const radio = parseFloat(prompt("Ingrese el radio del depósito (metros):"));
const altura = parseFloat(prompt("Ingrese la altura del depósito (metros):"));

function calcularVolumenLitros(radio, altura) {
    const volumenMetrosCubicos = Math.PI * Math.pow(radio, 2) * altura;
    const volumenLitros = volumenMetrosCubicos * 1000; 
    return volumenLitros;
}

function calcularTiempoLlenado(caudal, volumen) {
    const tiempoSegundos = volumen / caudal;
    const tiempoMinutos = tiempoSegundos / 60; 
    return tiempoMinutos;
}

const volumen = calcularVolumenLitros(radio, altura);

const tiempoLlenado = calcularTiempoLlenado(caudal, volumen);

alert("El tiempo estimado para llenar el depósito es: " + tiempoLlenado.toFixed(2) + " minutos.");