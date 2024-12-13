let nombre = prompt("nombre del cliente")
let edad = parseInt(prompt("ingrese la edad del cliente para entrar"))
let precio;

if (edad <= 14) {
    precio = 5;
    alert(`el cliente es menor de 4 años antes de los 18 años debe pagar: ${precio}€`)
}else if (edad >= 18){
    precio =10;
    alert(`el cliente es mayor a 18 años debe pagar: ${precio}€`)
}else{
    alert("el valor no corresponde a la informacion")
}