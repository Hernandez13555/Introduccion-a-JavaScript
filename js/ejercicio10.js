let esVegetariana = confirm("¿Quieres una pizza vegetariana?");

let ingredientesBase = ["Mozzarella", "Tomate"];
let ingredientesVegetarianos = ["Pimiento", "Tofu"];
let ingredientesNoVegetarianos = ["Pepperoni", "Jamón", "Salmón"];
let ingredienteElegido;

if (esVegetariana) {
    ingredienteElegido = prompt("Elige un ingrediente (Pimiento o Tofu):");
    if (!ingredientesVegetarianos.includes(ingredienteElegido)) {
        alert("Ingrediente no válido. Por favor, elige Pimiento o Tofu.");
    } else {
        ingredientesBase.push(ingredienteElegido);
    }
} else {
    ingredienteElegido = prompt("Elige un ingrediente (Pepperoni, Jamón o Salmón):");
    if (!ingredientesNoVegetarianos.includes(ingredienteElegido)) {
        alert("Ingrediente no válido. Por favor, elige Pepperoni, Jamón o Salmón.");
    } else {
        ingredientesBase.push(ingredienteElegido);
    }
}

if (ingredientesBase.length > 2) {
    alert(`Has elegido una pizza ${esVegetariana ? "vegetariana" : "no vegetariana"} con los siguientes ingredientes: ${ingredientesBase.join(", ")}.`);
}