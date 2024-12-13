let notaAlta = 0, notaBaja = 100;
let rangoA = 0, rangoB = 0, rangoC = 0, rangoD = 0;
function analizarNotas() {
  let cantidad = parseInt(prompt("¿Cuántas notas deseas ingresar?"));

  for (let i = 0; i < cantidad; i++) {
      let nota = parseInt(prompt(`Ingresa la nota ${i + 1} (entre 1 y 100):`));

      if (nota > notaAlta) notaAlta = nota;
      if (nota < notaBaja) notaBaja = nota;

      if (nota >= 90) rangoA++;
      else if (nota >= 80) rangoB++;
      else if (nota >= 70) rangoC++;
      else if (nota >= 60) rangoD++;
  }

 alert(`Nota más alta: ${notaAlta}`);
 alert(`Nota más baja: ${notaBaja}`);
 alert(`Rango A (90-100): ${rangoA}`);
 alert(`Rango B (80-89): ${rangoB}`);
 alert(`Rango C (70-79): ${rangoC}`);
 alert(`Rango D (60-69): ${rangoD}`);
}

analizarNotas();
