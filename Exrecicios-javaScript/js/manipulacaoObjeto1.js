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

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let num = Math.floor(Math.random() * (max - min) + min);
    if(num == 1){
        return `${reader.name} tem 1 livro favorito"`;
    }
    return num;
  }

 

// “O livro favorito de Julia Pessoa se chama ‘O Senhor dos Anéis - a Sociedade do Anel’.”.

let frase1 = `O livro favorito de ${reader.name} ${reader.lastName} se chama ${reader.favoriteBooks[0].title}`;
console.log(frase1);

let livro = {
  title: "Harry Potter e o Prisioneiro de Azkaban",
  author: "JK Rowling",
  publisher: "Rocco",
};

reader.favoriteBooks.push(livro);
console.log(reader.favoriteBooks);

//“Julia tem {quantidade} livros favoritos.”
console.log(`${reader.name} tem ${getRandomInt(1,100)} livros favoritos.`);
