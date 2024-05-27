/*
  Exercício 23
  Adicione a propriedade planet com o valor Earth em todos os países diretamente no array countries.
*/

const countries = require('./countries');
// console.log(countries);

const insert = (obj,newProp,newPropValue) => {
   obj.forEach((elem) => {
    elem[newProp] = newPropValue;
   }); 
}

insert(countries,'planet','Earth');

console.log(countries);