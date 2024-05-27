const countries = require('./countries');

/**
   Exercício 25
   Escreva uma função chamada findCountry que recebe dois parâmetros:
   o array de países e o nome do país desejado. Ao receber esses valores,
   a função deve retornar o elemento do país desejado. Caso não seja 
   encontrado, a função deve retornar a mensagem: “País não encontrado!”.
*/

//console.log(countries);

const findCountry = (countries,nomeCountry) => {
  return   countries.find((elem) => {
        return elem.name === nomeCountry
    })
}
console.log(findCountry(countries,'United States'));