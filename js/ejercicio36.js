let cacao = 20;

function calcularHarina(cacao) {
    const proporcionHarina = 100;
    const proporcionCacao = 10;

    let harinaNecesaria = (cacao * proporcionHarina) / proporcionCacao;

    return harinaNecesaria;
}

let harina = calcularHarina(cacao);

alert("Para preparar el bizcocho con " + cacao + " gramos de cacao, necesitas " + harina + " gramos de harina.");