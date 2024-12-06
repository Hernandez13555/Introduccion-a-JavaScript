let gradosCentigrados = parseFloat(prompt("Ingrese los grados centígrados:"));

function convertirACelsius(gradosCentigrados) {
    return (gradosCentigrados * 9/5) + 32;
}

let gradosFahrenheit = convertirACelsius(gradosCentigrados);

alert("El resultado en grados Fahrenheit es: " + gradosFahrenheit);