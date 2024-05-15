/*
  Exercício 15: Manipulação de objetos (Parte 4)
  Por meio do array de frutas chamado basket, crie um objeto que
  contenha o nome da fruta como chave e a quantidade de vezes que
  ela aparece no array como valor.

  Por exemplo, o 
  array ['Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva'] 

  deverá retornar:
  { 
    Melancia: 3,
    Abacate: 1,
    Uva: 1 
  }

  */
/**
   * Em seguida, imprima esse resultado na tela com uma mensagem no 
   * seguinte formato: Sua cesta possui: x Melancias, x Abacates....

    O array basket a ser utilizado:
   */

const basket = [
  "Melancia",
  "Abacate",
  "Melancia",
  "Melancia",
  "Uva",
  "Laranja",
  "Jaca",
  "Pera",
  "Melancia",
  "Uva",
  "Laranja",
  "Melancia",
  "Banana",
  "Uva",
  "Pera",
  "Abacate",
  "Laranja",
  "Abacate",
  "Banana",
  "Melancia",
  "Laranja",
  "Laranja",
  "Jaca",
  "Uva",
  "Banana",
  "Uva",
  "Laranja",
  "Pera",
  "Melancia",
  "Uva",
  "Jaca",
  "Banana",
  "Pera",
  "Abacate",
  "Melancia",
  "Melancia",
  "Laranja",
  "Pera",
  "Banana",
  "Jaca",
  "Laranja",
  "Melancia",
  "Abacate",
  "Abacate",
  "Pera",
  "Melancia",
  "Banana",
  "Banana",
  "Abacate",
  "Uva",
  "Laranja",
  "Banana",
  "Abacate",
  "Uva",
  "Uva",
  "Abacate",
  "Abacate",
  "Melancia",
  "Uva",
  "Jaca",
  "Uva",
  "Banana",
  "Abacate",
  "Banana",
  "Uva",
  "Banana",
  "Laranja",
  "Laranja",
  "Jaca",
  "Jaca",
  "Abacate",
  "Jaca",
  "Laranja",
  "Melancia",
  "Pera",
  "Jaca",
  "Melancia",
  "Uva",
  "Abacate",
  "Jaca",
  "Jaca",
  "Abacate",
  "Uva",
  "Laranja",
  "Pera",
  "Melancia",
  "Jaca",
  "Pera",
  "Laranja",
  "Jaca",
  "Pera",
  "Melancia",
  "Jaca",
  "Banana",
  "Laranja",
  "Jaca",
  "Banana",
  "Pera",
  "Abacate",
  "Uva",
];
const obj = {};

let qtMelancia = 0;
let qtAbacate = 0;
let qtUva = 0;
let qtLaranjas = 0;
let qtJacas = 0;
let qtPeras = 0;
let qtBananas = 0;

for (let i = 0; i < basket.length; i++) {
  if (basket[i] === "Melancia") {
    obj[`${basket[i]}`] = qtMelancia += 1;
  }
  if (basket[i] === "Abacate") {
    obj[`${basket[i]}`] = qtAbacate += 1;
  }
  if (basket[i] === "Uva") {
    obj[`${basket[i]}`] = qtUva += 1;
  }
  if (basket[i] === "Laranja") {
    obj[`${basket[i]}`] = qtLaranjas += 1;
  }
  if (basket[i] === "Jaca") {
    obj[`${basket[i]}`] = qtJacas += 1;
  }
  if (basket[i] === "Pera") {
    obj[`${basket[i]}`] = qtPeras += 1;
  }
  if (basket[i] === "Banana") {
    obj[`${basket[i]}`] = qtBananas += 1;
  }
}

console.log(obj);
console.log("----------------------------------------------------------------")
let key = Object.keys(obj);
let value = Object.values(obj);
let result = '';

for(let i = 0; i < key.length;i++){
  result = `Sua cesta possui: ${key[i]}:${value[i]}`;
  console.log(result);
}
