/*
Exercício 17: Raiz quadrada
Dado um array de números, crie uma função que retorne um novo 
array com as raízes quadradas dos números. No entanto, se um 
número for negativo, a função deve substituí-lo por NaN 
(Não é um Número).

Copiar
const numbers = [4, 9, -1, 16, -5, 25];
Utilize o método Math.sqrt() para saber a rais quadrada de um número.
*/

 const numbers = [4, 9, -1, 16, -5, 25];

 const raizQuadrada = (numbers) => {
    return numbers.map((elem) => {

       return  Math.sqrt(elem);
    })
 }
 console.log(raizQuadrada(numbers));