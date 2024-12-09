let frase = prompt("Ingrese frase que contenga la presencia de comillas y caracteres escapados:");

function encontrarCadenas(frase) {
    const regex = /"([^"\\]|\\.)*"/;
    return frase.match(regex);
}

let cadenas = encontrarCadenas(frase);

if (cadenas) {
    alert("Cadenas encontradas: " + cadenas.join(", "));
} else {
    alert("No se encontraron cadenas entre comillas dobles.");
}
