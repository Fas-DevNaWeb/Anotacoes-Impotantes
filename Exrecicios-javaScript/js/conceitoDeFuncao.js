/*
    Função e declarada con a palavra chave function, ela pode receber parametros n1,n2
    e retornar algo, nesse caso a soma de n1 + n2.
*/
// Toda função tem que ser invocada, para ser utilizada
function soma(n1, n2) {
  return n1 + n2;
}
console.log(soma(2, 3));

/** Outra forma de criar função,nesse tipo de função você pode reduzi-la que o retorno 
    funciona do mesmo geito  */
let soma2 = (n3, n4) => {
  return n3 + n4;
};
console.log(soma2(4,5));


// Reduzida
let soma3 = (n5, n6) => n5 + n6;
console.log(soma3(89,90));
