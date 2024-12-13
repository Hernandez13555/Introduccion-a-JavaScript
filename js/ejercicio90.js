function convertirANombre(num) {
    const numeros = ["cero", "uno", "dos", "tres", "cuatro", "cinco"];
    
    if (num >= 0 && num <= 5) {
        return numeros[num];
    } else {
        return "Número fuera de rango"; // Si el número no está entre 0 y 5
    }
}


alert(convertirANombre(0)); // "cero"
alert(convertirANombre(3)); // "tres"
alert(convertirANombre(5)); // "cinco"
alert(convertirANombre(7)); // "Número fuera de rango"
