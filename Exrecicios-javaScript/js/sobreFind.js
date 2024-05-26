/**
 *  Caracteristica -> O método find(); Retorna um Elemento ao invés de um array, 
 *  e sempre o primeiro elemento encontrado conforme a condição passada.
 */

const data = require('./data');
// ENCONTRE UMA CARTA DE ACORDO COM SEU NOME

const findCard = (data,cardName) => {

    const cardFound = data.find((card) => card.name === cardName);
    return cardFound;
};

console.log(findCard(data.cards, 'Dark Magician'));
