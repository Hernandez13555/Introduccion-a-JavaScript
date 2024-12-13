const contrasenaCorrecta = "santiago";
let contrasenaUsuario = "";

while (contrasenaUsuario !== contrasenaCorrecta) {
    contrasenaUsuario = prompt("Introduce la contraseña:");

    if (contrasenaUsuario !== contrasenaCorrecta) {
       alert("Contraseña incorrecta. Intenta nuevamente.");
    }
}

alert("Contraseña correcta. Acceso permitido.");
