
function calcularDineroInicial() {
    const precioLlaveHexagonal = 11500;
    const precioBomba = 1168000;
    const precioCajaPernos = 87000;
    const cantidadLlavesHexagonales = 5;
    const cantidadBombas = 1;
    const cantidadCajasPernos = 3;

    const dineroSobrante = 91000;

    const costoLlavesHexagonales = precioLlaveHexagonal * cantidadLlavesHexagonales;

    const costoBombas = precioBomba * cantidadBombas;

    const costoCajasPernos = precioCajaPernos * cantidadCajasPernos;

    const costoTotalCompras = costoLlavesHexagonales + costoBombas + costoCajasPernos;

    const dineroInicial = costoTotalCompras + dineroSobrante;

    alert("El costo total de las llaves hexagonales es: $" + costoLlavesHexagonales);
    alert("El costo total de la bomba es: $" + costoBombas);
    alert("El costo total de las cajas de pernos es: $" + costoCajasPernos);
    alert("El costo total de las compras es: $" + costoTotalCompras);
    alert("El dinero inicial del jefe de obra es: $" + dineroInicial);
}

calcularDineroInicial();