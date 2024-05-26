const data = require("./data");

// ADICIONAR A PROPRIEDADE GAME EM TODOS ELEMENTOS DO ARRAY CARDS

/*
  Característica do Foreach -> Ele modifica os elementos originais do array.
  Segunda característica é que ele não te retorna nada apenas modifica os elementos do array.
  Diferente do map(); que retorna um array novo.
*/

const addProperty = (propkey,proValue) => {
    data.cards.forEach((elem) => {
        elem[propkey] = proValue;
    })    
}
addProperty('Game','Yu-Gi-oh!');

console.log(data);