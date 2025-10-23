// verificar_par_impar.js
const prompt = require("prompt-sync")();

let numero = prompt("Escribe un número: ");
numero = parseInt(numero);

if (numero % 2 == 0) {
  console.log("El número es par");
} else {
  console.log("El número es impar");
}
