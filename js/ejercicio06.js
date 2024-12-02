let nombre = prompt("ingrese el nombre")
let sexo = prompt("ingrese el sexo de la persona")


function grupo(nombre,sexo) {
    if ((sexo === "f" && nombre.toUpperCase() < "M") || (sexo === "M" && nombre.toUpperCase() > "M")) {
        return "grupo A";
    } else {
        return "grupo B";
    }
}

let resultado = grupo(nombre,sexo);

alert(resultado);