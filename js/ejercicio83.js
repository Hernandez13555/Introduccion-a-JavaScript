let  pin = prompt("ingresar el pin (maximo 6 minimo 4 caracteres)")

function validarPin(pin) {
    const regex = /^(\d{4}|\d{6})$/;
    return regex.test(pin);
}

let resultado= validarPin(pin);
 alert(`el pin ingresado es correcto: ${resultado}`)


