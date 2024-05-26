/**
 * Caracteristica -> O método map retorna um array modificado conforme a regra passada pela callback.
 */

const data = require('./data');

const arrayNovo = [];

for(let i = 0; i < data.types.length;i++){
    arrayNovo.push(data.types[i].name);
}
console.log(arrayNovo);
console.log("----------------------------------------------------")

const result = data.types.map((elem) => {
    return elem.name;
})

console.log(result);
console.log("----------------------------------------------------")

const rst = data.types.map(elem => elem.name);
console.log(rst);