let x1 = parseFloat(prompt("Ingrese la coordenada x1:"));
let y1 = parseFloat(prompt("Ingrese la coordenada y1:"));
let x2 = parseFloat(prompt("Ingrese la coordenada x2:"));
let y2 = parseFloat(prompt("Ingrese la coordenada y2:"));

function calcularDistancia(x1, y1, x2, y2) {

    let diferenciaX = x2 - x1;
    let diferenciaY = y2 - y1;
    
    let distancia = Math.sqrt(Math.pow(diferenciaX, 2) + Math.pow(diferenciaY, 2));
    
    return distancia;
}

let distancia = calcularDistancia(x1, y1, x2, y2);

alert("La distancia entre los dos puntos es: " + distancia);