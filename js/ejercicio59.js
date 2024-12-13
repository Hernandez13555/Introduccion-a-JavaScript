
function esPostulanteValido(postulante) {
    const { edad, estatura, peso } = postulante;
    if (edad <= 19 && estatura > 175 && peso >= 75 && peso <= 80) {
    return true; 
    } else {
    return false; 
    }
}
const postulantes = [
    { nombre: "Juan", edad: 18, estatura: 180, peso: 78 },
    { nombre: "Pedro", edad: 20, estatura: 176, peso: 77 },
    { nombre: "Luis", edad: 19, estatura: 178, peso: 81 },
    { nombre: "Ana", edad: 17, estatura: 170, peso: 76 },
    { nombre: "Carlos", edad: 19, estatura: 180, peso: 79 }
];
const postulantesSeleccionados = postulantes.filter(esPostulanteValido);

alert("Postulantes seleccionados:");
postulantesSeleccionados.forEach(postulante => {
    alert(`${postulante.nombre} - Edad: ${postulante.edad}, Estatura: ${postulante.estatura} cm, Peso: ${postulante.peso} kg`);
});