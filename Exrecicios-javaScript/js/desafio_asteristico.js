/*Escreva um algoritmo que, dado um valor n, sendo n > 1, imprima na tela um quadrado feito de asteriscos de tamanho n. 
Por exemplo: n = 5  *****
                    *****
                    *****
                    *****
                    ***** */
let n = 60;
let asteristico = [n];
for (let i = 0; i < n; i++) {
  asteristico[i] = "*";
}

for (let j = 0; j < asteristico.length; j++) {
  console.log(asteristico.toString().replace(/,/g, " "));
}
