let salBruto = 3000;

function slBase(salBruto) {
  let salBase;
  if (salBruto >= 1400 && salBruto <= 1556.94) {
    salBase = salBruto - salBruto * 0.08;
  } else if (salBruto >= 1556.95 && salBruto <= 2594.92) {
    salBase = salBruto - salBruto * 0.09;
  } else if (salBruto >= 2594.93 && salBruto <= 5189.82) {
    salBase = salBruto - salBruto * 0.11;
  } else if (salBruto > 5189.92) {
    salBase = salBruto - 570.88;
  }
  return salBase;
}


function slQ(salDesInss) {
  let slq;
  let ir;
  if (salDesInss >= 1903.99 && salDesInss <= 2826.65) {
    ir = salDesInss * 0.075 - 142.8;
    slq = salDesInss - ir;
  } else if (salDesInss >= 1200 && salDesInss <= 1903.99) {
    console.log("Isento de imposto de renda");
  } else if (salDesInss >= 2826.66 && salDesInss <= 3751.05) {
    ir = salDesInss * 0.15 - 354.8;
    slq = salDesInss - ir;
  } else if (salDesInss >= 3751.06 && salDesInss <= 4664.68) {
    ir = salDesInss * 0.225 - 636.13;
    slq = salDesInss - ir;
  } else if (salDesInss > 4664.68) {
    ir = salDesInss * 0.275 - 869.36;
    slq = salDesInss - ir;
  }
  return slq;
}

console.log("Salário Bruto: " + slBase(salBruto));

let salDesInss = slBase(salBruto);
console.log("Salário Liquido: " + slQ(salDesInss));
