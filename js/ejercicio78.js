let palabra1 = prompt("ingresar la palabra numero 1");
let palabra2 = prompt("ingrese la plabara nuemro 2");
function longitudPalabra(palabra) {
    if (palabra.length < 5) {
        return "La palabra es corta";
    } else {
        return "La palabra es larga";
    }
}
alert(longitudPalabra(palabra1));  // Output: La palabra es corta
alert(longitudPalabra(palabra2));  // Output: La palabra es larga
