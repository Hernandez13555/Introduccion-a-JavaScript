let contrasenaGuardada = "MiContrasena123";

let contrasenaUsuario = prompt("Por favor ingrese su contrasena:");

function esAlfanumerico(str) {
    let regex = /^[a-z0-9]+$/i;
    return regex.test(str);
}

if (contrasenaUsuario && esAlfanumerico(contrasenaUsuario)) {
    if (contrasenaGuardada.toLowerCase() === contrasenaUsuario.toLowerCase()) {
        alert("La contrasena es correcta.");
    } else {
        alert("La contrasena es incorrecta.");
    }
} else {
    alert("Por favor ingrese solo valores alfanuméricos.");
}
