//Exercício 13: Manipulação de objetos (Parte 2)
/*
  Imagine que você seja responsável por cuidar do sistema de entrega de um restaurante e 
  que precise enviar mensagens com as informações da compra. Para isso, use o seguinte código:
*/

const order = {
  name: "Rafael Andrade",
  phoneNumber: "11-98763-1416",
  address: {
    street: "Rua das Flores",
    number: "389",
    apartment: "701",
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: "Coca-Cola Zero",
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: "Ana Silveira",
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

/**
 * Questão 1: Complete a função customerInfo() para que seu retorno seja:
 * 'Olá, Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416,
 * Rua das Flores, Número: 389, AP: 701.'.
 */

const customerInfo = (fullOrder) => {
  console.log(
    `OLá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, Rua:${order.address.street} Número:${order.address.number}, AP: ${order.address.apartment}`
  );
};
console.log(customerInfo(order));
/**
 * Questão 2: Complete a função orderModifier() para que seu retorno seja: 'Olá, Luiz Silva,
 * o valor total de seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00.'.

   Modifique o nome da pessoa compradora para Luiz Silva;
   Modifique o valor total da compra para R$ 50,00.
 */

let soma = 0;
let precoCoca = (order.order.drinks.coke.price = 5);
const orderModifier = (fullOrder) => {

  let nome = "Luiz Silva";
  const vl = Object.keys(order.order.pizza);
  soma =
    order.order.pizza.marguerita.price +
    order.order.pizza.pepperoni.price +
    order.order.drinks.coke.price;
  console.log(`Olá, ${nome}, o valor total de seu pedido de ${vl[0]}, ${vl[1]} e ${order.order.drinks.coke.type} é R$ ${soma},00
  `);
};

console.log(orderModifier(order));
