/*Desenvolva o exercício a seguir com o uso de funções.

Considere a variável balance, que representa a quantia em conta da pessoa cliente do TrybeBank e escreva quatro funções que:

Adiciona um valor ao balance;
Subtraia um valor do balance;
Multiplique o valor do balance por uma taxa;
Divida o valor do balance.
*/

let saldoBank = 0;

function adicionaValor(add) {
    return saldoBank += add;
}


function retiraBank(vl){
    return saldoBank - vl;
}

let mult = () =>{
    return saldoBank * 0.20;
}

let div = () => saldoBank / 2;

adicionaValor(1000);
console.log(saldoBank);

retiraBank(400);
console.log(saldoBank);


console.log(mult());

console.log(div());