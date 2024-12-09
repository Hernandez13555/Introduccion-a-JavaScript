let frase = prompt("Ingrese una frase que lo identifique como programador de Software:");

function invertirFrase(frase) {
    return frase.split('').reverse().join('');
}

let fraseInvertida = invertirFrase(frase);

alert("Frase original: " + frase);
alert("Frase invertida: " + fraseInvertida);