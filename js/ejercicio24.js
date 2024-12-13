const regexFloat = /^[+-]?(\d*\.\d+|\d+\.?\d*)([eE][+-]?\d+)?$/;

function esNumeroFlotante(cadena) {
    return regexFloat.test(cadena);
}

const ejemplos = [
    "2.3e-1",
    "-3e2",
    "23",
    "3.2",
    "-2.3",
    "+4.56",
    "7.89e+3",
    ".45",
    "5.",
    "123.456"
];

ejemplos.forEach(ejemplo => {
    alert(`¿"${ejemplo}" es un número en punto flotante? ${esNumeroFlotante(ejemplo)}`);
});
