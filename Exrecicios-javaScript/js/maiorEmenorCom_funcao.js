let vetor = [12, 1, 154, 88, 4, 22];

function maiorMenor(vetor) {
  let maior;
  for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] > vetor[i + 1]) {
      maior = vetor[i];
    }
  }
  return maior;
}
console.log(maiorMenor(vetor));
