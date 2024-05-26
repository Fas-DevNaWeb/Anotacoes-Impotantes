const countries = require("./countries");
//console.log(countries);
/*
Exercício 24
Para cada país, crie um objeto apenas com as informação do nome, 
código da moeda e nome da moeda. Essas informações devem ser
armazenadas em um novo array. Faça esse exercício usando o 
método forEach, não vale map. 😜

Exemplo de como devem ser os objetos:

  Copiar
   {
     name: 'United States',
     currencyCode: 'USD',
     currencyName: 'United States Dollar',
   }
*/

const createNewArray = (obj) => {
  const newArray = [];
  let name;
  let code;
  let nameCrr;

  obj.forEach((element) => {
    name = element.name;
    code = element.currencies[0].code;
    nameCrr = element.currencies[0].name;

    newArray.push( {
      nameRegion: name,
      currencyCode:code,
      currencyName:nameCrr,
    });
  });
  console.log(newArray);
};

createNewArray(countries);