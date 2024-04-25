/*
Faça um programa para adicionar pessoas clientes ao array do TrybeBank. A função deve se chamar addCustomer 
e receber um parâmetro do tipo string e, caso o parâmetro não seja do tipo string, retorne a mensagem: “O parâmetro
passado deve ser do tipo string”.
*/

const trybeBankCustomers = ["Oliva", "Nat", "Gus"];

 const addCustomer = (str) => {
  if (str > 0 || str < 0) {
    console.log("O parâmetro passado deve ser do tipo string");
  } else {
    trybeBankCustomers.push(str);
  }
};
addCustomer("Fabiano");
//addCustomer(0.2);
addCustomer('Tatiana');
addCustomer('Suzana');

console.log(trybeBankCustomers);
