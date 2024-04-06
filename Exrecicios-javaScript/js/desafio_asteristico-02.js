/*
Faça o mesmo algoritmo que antes,mas de modo que imprima um triângulo retângulo com 5 
asteriscos de base. Por exemplo:

Copiar
n = 5

*
**
***
****
*****
*/

let n = 5;

let asteristicos = [n];
for (let i = 0; i < n; i++) {
    console.log();
  asteristicos[i] = "*";

  console.log(asteristicos.toString().replace(/,/g, " "));
}

