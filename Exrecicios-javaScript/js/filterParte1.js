const data = require("./data");

//console.log(data);
// Entendendo filter() parte 1 ......
const atkMaior = (data) => {
  return data.filter((elem) => {
    return elem.atk > 1900;
  });
};
//console.log(atkMaior(data.cards));

// Entendendo filter() parte 2 .....
const resultFilter = (data, typeId) => {
  return data.filter((elem) => {
    return elem.typeId === typeId;
  });
};

//console.log(resultFilter(data.cards));

const resultFinal = resultFilter(data.cards, 6);

const f = (resultFilter) => {
  return resultFilter.map((elem) => {
    const typeId = elem.typeId;
    const name = elem.name;

    return {
      typeId,
      name,
    };
  });
};

//console.log(f(resultFinal));

// Entendendo o método sort(); parte ....
const metSort = [1, 6, 3, 2, 9, 8, 12, 78, 5, 4, 7, 0];
console.log(metSort.sort());

const result = metSort.sort((a, b) => a - b);
console.log(result);
