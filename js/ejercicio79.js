function contarSilabasEnFrase(frase) {
    frase.split(" ").forEach(palabra => {
        let silabas = palabra.match(/[aeiouáéíóú]/gi)?.length || 0;
        alert(`La palabra "${palabra}" tiene ${silabas} sílabas.`);
    });
}

contarSilabasEnFrase("programacion es divertida");
