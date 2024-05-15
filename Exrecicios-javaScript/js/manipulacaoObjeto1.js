//Exercício 12: Manipulação de objetos (Parte 1)

//Com base neste objeto, faça os exercícios a seguir.

const reader = {
  name: "Julia",
  lastName: "Pessoa",
  age: 21,
  favoriteBooks: [
    {
      title: "O Senhor dos Anéis - a Sociedade do Anel",
      author: "J. R. R. Tolkien",
      publisher: "Martins Fontes",
    },
  ],
};

/*
    Questão 1: Acesse as chaves name, lastName e title e exiba informações em um console.log()
    no seguinte formato: “O livro favorito de Julia Pessoa se chama ‘O Senhor dos Anéis - a
    Sociedade do Anel’.”.
 */
let frase1 = `O livro favorito de ${reader.name} ${reader.lastName} se chama ${reader.favoriteBooks[0].title}`;
console.log(frase1);

/**
 * Questão 2: Adicione um novo livro favorito na chave favoriteBooks, que é um array de objetos. Atribua a
 * essa chave um objeto que contenha as seguintes informações:
 */
let livro = {
  title: "Harry Potter e o Prisioneiro de Azkaban",
  author: "JK Rowling",
  publisher: "Rocco",
};

reader.favoriteBooks.push(livro);
console.log(reader.favoriteBooks);

/**
 * Acesse as chaves name e favoriteBooks e faça um console.log() no seguinte formato:

  “Julia tem {quantidade} livros favoritos.”

  {quantidade} corresponde à quantidade de livros favoritos, sendo um número gerado 
  automaticamente pelo seu código. Caso a quantidade seja igual a 1, a frase deve ser:
  “Julia tem 1 livro favorito.”
 */

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let num = Math.floor(Math.random() * (max - min) + min);
    if (num == 1) {
      return `${reader.name} tem 1 livro favorito"`;
    }
    return num;
  }

  console.log(`${reader.name} tem ${getRandomInt(1, 100)} livros favoritos.`);

