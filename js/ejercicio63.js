function mostrarAniosCumplidos() {
    let edad = parseInt(prompt("Ingresa tu edad:"));

    for (let i = 1; i <= edad; i++) {
        alert(`Has cumplido ${i} año(s).`);
    }
}
mostrarAniosCumplidos();
