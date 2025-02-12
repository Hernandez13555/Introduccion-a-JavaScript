let valor = parseInt(prompt("Ingrese la altura para la piramide"));

const piramide = (valor) => {
  console.log(typeof valor);
  for (let i = 1; i < valor; i++) {
    let asteriscos = "";
    for (let a = valor; a > 0; a--) {
      asteriscos += "*";
    }
    for (let z = 1; z < i + 2; z++) {
      asteriscos += "*";
    }
    alert(asteriscos);
    valor -= 1;
  }
};

piramide(valor);
