/*
Exercícios, vamos praticar?
Vamos aplicar o que acabamos de estudar sobre método map()?

Exercício 16: Conversão de temparaturas
Dado um array de temperaturas em graus Celsius, crie uma função que retorne
um novo array com as temperaturas convertidas para Fahrenheit. 

A fórmula de conversão é: Fahrenheit = (Celsius * 9/5) + 32.

Copiar
// Temperaturas em graus Celsius
const temperaturesCelsius = [23, 10, 32, 21, 47];
Resultado esperado: [ 73.4, 50, 89.6, 69.8, 116.6 ]
*/


const temperaturesCelsius = [23, 10, 32, 21, 47]; 

const fahrenheit = temperaturesCelsius.map((celsius) => {
    return (celsius * 9/5) +32
})
console.log('Graus Celsius: ' + temperaturesCelsius);
console.log('Graus Celsius convertido em Fahrenheit: ' + fahrenheit);