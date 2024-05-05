const school = {
  lessons: [
    {
      course: "Python",
      students: 20,
      professor: "Carlos Patrício",
      shift: "Manhã",
    },
    {
      course: "Kotlin",
      students: 10,
      professor: "Gabriel Oliva",
      shift: "Noite",
    },
    {
      course: "JavaScript",
      students: 738,
      professor: "Gustavo Caetano",
      shift: "Tarde",
    },
    {
      course: "MongoDB",
      students: 50,
      shift: "Noite",
    },
  ],
};

/*
    Questão 1: Crie uma função que obtenha o valor da chave de acordo com sua posição no array.
    Essa função deve possuir dois parâmetros: o objeto e a posição no array.
*/

function obterObj(obj, pos) {
  return obj.lessons[pos];
}

console.log("-----------------------------------------------------");
console.log(obterObj(school, 3));

// Questão 2: Crie uma função que retorne a soma do número total de estudantes em todos os cursos.
let sumStudants = (obj) => {
  let sum = 0;
  for (let i = 0; i < obj.lessons.length; i++) {
    sum += obj.lessons[i].students;
  }
  return sum;
};
console.log("-----------------------------------------------------");

console.log(sumStudants(school));

console.log("-----------------------------------------------------");

/*
  Crie uma função que verifica se uma determinada chave existe em todos os elementos do array lessons.
  O retorno deve ser um booleano (true ou false). Essa função deve possuir dois parâmetros: o objeto e
  o nome da chave.
*/

let keyexists = (obj, key) => {
  let f = Object.keys(obj.lessons[0]);
  console.log(f);
  for (let i = 0; i < obj.lessons.length; i++) {
    if (obj.lessons[i][key] === undefined) {
      return false;
    }
  }
  return true;
};

console.log(keyexists(school, 'professor'));

console.log("-----------------------------------------------");
