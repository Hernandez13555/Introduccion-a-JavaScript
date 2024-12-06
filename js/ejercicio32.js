let precioProducto1 = parseFloat(prompt("Ingrese el precio del primer producto:"));
let precioProducto2 = parseFloat(prompt("Ingrese el precio del segundo producto:"));
let precioProducto3 = parseFloat(prompt("Ingrese el precio del tercer producto:"));
let precioProducto4 = parseFloat(prompt("Ingrese el precio del cuarto producto:"));
let precioProducto5 = parseFloat(prompt("Ingrese el precio del quinto producto:"));

function aplicarDescuento(precio, descuento) {
    return precio - (precio * descuento / 100);
}

let precioConDescuento1 = aplicarDescuento(precioProducto1, 5);
let precioConDescuento2 = aplicarDescuento(precioProducto2, 5);
let precioConDescuento3 = precioProducto3; 
let precioConDescuento4 = aplicarDescuento(precioProducto4, 2);
let precioConDescuento5 = aplicarDescuento(precioProducto5, 2);

let totalCompra = precioConDescuento1 + precioConDescuento2 + precioConDescuento3 + precioConDescuento4 + precioConDescuento5;

alert("Precio del primer producto después del descuento: $" + precioConDescuento1.toFixed(2));
alert("Precio del segundo producto después del descuento: $" + precioConDescuento2.toFixed(2));
alert("Precio del tercer producto sin descuento: $" + precioConDescuento3.toFixed(2));
alert("Precio del cuarto producto después del descuento: $" + precioConDescuento4.toFixed(2));
alert("Precio del quinto producto después del descuento: $" + precioConDescuento5.toFixed(2));
alert("Total de la compra: $" + totalCompra.toFixed(2));