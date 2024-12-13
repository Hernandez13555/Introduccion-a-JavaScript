let mes =prompt("ingresar el mes que deseas ver")

function obtenerSignoZodiacal(mes) {
    let signo;
    mes = mes.toLowerCase();

    if (mes === "enero") {
        signo = "Capricornio";
    } else if (mes === "febrero") {
        signo = "Acuario";
    } else if (mes === "marzo") {
        signo = "Piscis";
    } else if (mes === "abril") {
        signo = "Aries";
    } else if (mes === "mayo") {
        signo = "Tauro";
    } else if (mes === "junio") {
        signo = "Géminis";
    } else if (mes === "julio") {
        signo = "Cáncer";
    } else if (mes === "agosto") {
        signo = "Leo";
    } else if (mes === "septiembre") {
        signo = "Virgo";
    } else if (mes === "octubre") {
        signo = "Libra";
    } else if (mes === "noviembre") {
        signo = "Escorpio";
    } else if (mes === "diciembre") {
        signo = "Sagitario";
    } else {
        signo = "Mes no válido";
    }

    alert("elegiste este Mes: " + mes);
    alert("Signo Zodiacal correspondiente es : " + signo);
}

obtenerSignoZodiacal(mes);
