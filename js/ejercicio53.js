let precios = [];
for (let i = 0; i < 5; i++) {
    let precio = parseFloat(prompt(`Ingrese el precio del producto ${i + 1}:`));
    precios.push(precio);
}

const IVA = 0.19;

function calcularTotales(precios) {
    let subtotal = precios.reduce((total, precio) => total + precio, 0);
    let iva = subtotal * IVA;
    let total = subtotal + iva;
    return { subtotal, iva, total };
}

let { subtotal, iva, total } = calcularTotales(precios);

alert("Subtotal: $" + subtotal.toFixed(2));
alert("IVA: $" + iva.toFixed(2));
alert("Total: $" + total.toFixed(2));
 