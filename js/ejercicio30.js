let contrasena = prompt("Ingrese la contraseña:");

function comprobarFortalezaContrasena(contrasena) {
    const longitudValida = contrasena.length >= 8 && contrasena.length <= 12;
    const tieneMayuscula = /[A-Z]/.test(contrasena);
    const tieneMinuscula = /[a-z]/.test(contrasena);
    const tieneDigito = /\d/.test(contrasena);
    
    return longitudValida && tieneMayuscula && tieneMinuscula && tieneDigito;
}

if (comprobarFortalezaContrasena(contrasena)) {
    alert("La contraseña es fuerte.");
} else {
    alert("La contraseña no cumple con los criterios de fortaleza.");
}
