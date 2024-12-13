function inversoAditivo(numeros) {
    return numeros.map(num => -num); // Cambia el signo de cada número
}

alert(inversoAditivo([1, -2, 3, -4])); // [-1, 2, -3, 4]
alert(inversoAditivo([10, -5, 0]));    // [-10, 5, 0]
