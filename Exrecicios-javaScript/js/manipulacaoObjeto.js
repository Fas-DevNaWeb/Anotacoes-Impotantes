/*
  Imagine que você seja responsável por cuidar do sistema de entrega
  de um restaurante e que precise enviar mensagens com as informações 
  da compra. Para isso, use o seguinte código:
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


/*
  Questão 1: Complete a função customerInfo() para que seu retorno seja:
 'Olá, Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, 
  Rua das Flores, Número: 389, AP: 701.'.

   De olho na dica 👀: Note que o parâmetro da função já está sendo passado 
   na chamada da função.
*/

const customerInfo = (fullOrder) => {
  // Adicione abaixo as informações necessárias.
  let result = `Olá, ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, ${order.address.street}, ${order.address.number},Apartament: ${order.address.apartment}.`;
  return result;
};

console.log(customerInfo(order));


/*
   Questão 2: Complete a função orderModifier() para que seu retorno seja: 
   'Olá, Luiz Silva, o valor total de seu pedido de marguerita, pepperoni 
   e Coca-Cola Zero é R$ 50,00.'.
*/

order.order.drinks.coke.price = 5;
order.name = 'Luiz Silva';

const orderModifier = (fullOrder) => {
   let result2 = `Olá, ${order.name} o valor total de seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ ${order.order.pizza.marguerita.price + order.order.pizza.pepperoni.price + order.order.drinks.coke.price},00`;
   return result2;
};

console.log(orderModifier(order));


/*
   Questão 2: Complete a função orderModifier() para que seu retorno seja:  
   'Olá, Luiz Silva, o valor total de seu pedido de marguerita, pepperoni 
   e Coca-Cola Zero é R$ 50,00.'.

   
   Modifique o nome da pessoa compradora para Luiz Silva;
   Modifique o valor total da compra para R$ 50,00.
*/
