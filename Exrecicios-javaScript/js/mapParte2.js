// ADICIONAR UMA PROPRIEDADE PARA CADA ELEMENTO DO ARRAY
const data = require("./data");
//console.log(data);

// Primeira forma .....
const addProperty = (obj, propName, proValue) => {
  return arrayNewProp = obj.map((cards) => {
    const id = cards.id;
    const name = cards.name;

    return {
      id: id,
      name: name,
      [propName]: proValue,
    }
  });
};

console.log(addProperty(data.cards, 'game', 'yu-Gi-Oh!'));

// Segunda forma contraida ....
const addProperty2 = (obj, propName, proValue) => {
  return arrayNewProp = obj.map((cards) => {
    const id = cards.id;
    const name = cards.name;

    return {
      id,
      name, // reduzido ....
      [propName]: proValue,
    }
  });
};

console.log(addProperty2(data.cards, 'game', 'yu-Gi-Oh!'));


// Forma contraida com spreed .....
const addProperty3 = (obj, propName, proValue) => {
  return arrayNewProp = obj.map((cards) => {
    
    return {
       ...cards,
      [propName]: proValue,
    }
  });
};

console.log(addProperty3(data.cards, 'game', 'yu-Gi-Oh!'));


// Forma ainda mais contraida em uma linha .....
const addProperty4 = (obj, propName, proValue) => obj.map((cards) =>  ({...cards,[propName]:proValue}));

  
console.log(addProperty4(data.cards, 'game', 'yu-Gi-Oh!'));