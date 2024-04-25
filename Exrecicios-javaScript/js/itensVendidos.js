/* 
RELATÓRIO DE ITEMS VENDIDOS NO MC DONALDS
Crie uma função que retorna um relatório com a quantidade de cada item vendido. Esse relatório precisa estar no seguinte formato:
{
  sanduiches: 0,
  acompanhamentos: 0,
  sobremesas: 0,
  bebidas: 0,
}
*/

const menu = require('./dados');

const getMcInfo = () => {
  const report = {
    sanduiches: 0,
    acompanhamentos: 0,
    sobremesas: 0,
    bebidas: 0,
  };

  const keys = Object.keys(menu);

  for(let i = 0; i < keys.length; i++){
    report[keys[i]] = menu[keys[i]].length;
  }
  return report;
};
console.log(getMcInfo());

module.exports = {
  getMcInfo,
}