let altura = parseInt(prompt("Introduce un número entero:"));

for (let i = 1; i <= altura; i++) {
    let fila = "";
    for (let j = 1; j <= i; j++) {
        fila += "*";
    }
    alert(fila);
}
