let num1 = parseInt(prompt("ingresar el numero 1 "));
let num2 = parseInt(prompt("ingresar el numero 2 "));
function mayorNumero(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}
let resultado = mayorNumero(num1, num2);

alert(`El mayor número es ${resultado}`);
