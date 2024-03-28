/*
Questão 1. Percorra o array imprimindo todos os valores contidos nele com a função console.log().

Questão 2. Some todos os valores contidos no array e imprima o resultado.

Questão 3. Calcule e imprima a média aritmética dos valores contidos no array. A média aritmética
é o resultado da soma de todos os elementos dividido pelo número total de elementos.

Questão 4. Com base no código que acabou de gerar, referente ao cálculo da média aritmética, faça 
com que: caso o valor final seja maior que 20, imprima a mensagem “O valor da média aritmética é
maior que 20”; e, caso não seja maior que 20, imprima a mensagem “O valor da média aritmética é 
menor ou igual a 20”.

Questão 5. Utilizando for, descubra o maior valor contido no array e imprima-o.

Questão 6. Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não
exista nenhum, imprima a mensagem: “Nenhum valor ímpar encontrado”.
*/
const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let media = 0;
// Resp: 01
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// Resp: 02
for (let j = 0; j < numbers.length; j++) {
  soma += numbers[j];
}
console.log();
console.log(soma);

// Resp: 03
media = soma / numbers.length;
console.log(media);

// Resp: 04
if (media > 20) {
  console.log("Valor da média aritmética é maior que 20.");
} else {
  console.log("Valor da média aritmética é menor ou igual a 20");
}

// Resp: 05
console.log(
  numbers.sort(function (a, b) {
    return a - b;
  })
);

//Resp: 05
let maior;
for (let index = 0; index < numbers.length; index++) {
  if (numbers[index] > numbers[0 + 1]) {
    maior = numbers[index];
  }
}
console.log(maior);

//Resp: 06
let somaImpares = 0;
for (let f = 0; f < numbers.length; f++) {
  if (numbers[f] % 2 != 0) {
    somaImpares++;
  } else if (somaImpares < 0) {
    console.log("Nenhum valor ímpar encontrado.");
  }
}
console.log(somaImpares);
