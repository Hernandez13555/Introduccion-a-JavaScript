function eco() {
    let entrada = "";

    while (entrada !== "salir") {
        entrada = prompt("Escribe algo (escribe 'salir' para terminar):");
        if (entrada !== "salir") {
            alert(entrada);
        }
    }

    alert("Programa terminado.");
}
eco();
