const data = require("./exercicioMap3");


/*
Exercício 18: Nomes de livors
Implemente a função formattedBookNames que deve retornar um array 
de strings no formato: Nome do livro - Gênero - Nome da pessoa autora.
*/
console.log(data);
const formattedBookNames = (data) => {
   return  data.map((elem) => {            
        const name = elem.name;
        const genero = elem.genre;
        const author = elem.author.name;
        return `Nome do Livro: ${name} - Genero: ${genero} - Autor: ${author}`;
    })
}

console.log(formattedBookNames(data.books));


/*
Exercício 19: Autor e idade
Implemente a função nameAndAge que deve retornar um array de objetos,
cada objeto deve conter:
A chave author, e o valor deve ser o nome da pessoa autora;
A chave age, e o valor deve ser a idade da pessoa autora quando
lançou o livro.
*/

const nameAndAge = (data) => {
  return data.map((elem) => {
    const author = elem.author.name;
    const age = (elem.releaseYear - elem.author.birthYear);

    return {
        author,
        age,
    }
  })
}

console.log(nameAndAge(data.books));















