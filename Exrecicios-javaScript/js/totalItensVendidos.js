const menu = require("./dados.js");
const { getMcInfo } = require("./itensVendidos.js");

const totalitens = () => {
  let soma = 0;
  const itens = getMcInfo();

  const valores = Object.values(itens);

  for (let i = 0; i < valores.length; i++) {
    soma += valores[i];
  }
  return soma;
};
console.log(totalitens());

