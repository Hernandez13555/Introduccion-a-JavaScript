let numero1 = parseInt(prompt("ingresar el nuemro 1 que deseas ingresar"));
let numero2 = parseInt(prompt("ingresar el nuemro 2 que deseas ingresar"));

function mayorDeDos(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

alertg("El mayor número es:", mayorDeDos(numero1, numero2));  // Output: 15
