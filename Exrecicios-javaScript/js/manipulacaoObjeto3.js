/**
 * Exercício 14: Manipulação de objetos (Parte 3)
   Suponha que você esteja trabalhando para uma escola e precise fazer algumas atualizações no sistema.
   Para isso, considere a seguinte base de dados:
*/
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

/**
 * Questão 1: Crie uma função que obtenha o valor da chave de acordo com sua posição no array.
 * Essa função deve possuir dois parâmetros: o objeto e a posição no array.
 */

console.log(
  "Questão 1: -----------------------------------------------------------------"
);

function getKeyValue(obj, pos, key) {
  const keyValue = obj.lessons[pos];
  const vetor = Object.keys(keyValue);
  const vetor2 = Object.values(keyValue);

  for (let i = 0; i < vetor.length; i++) {
    if (key === vetor[i]) {
      return `O valor da chave ${key} é : ${vetor2[i]}`;
    }
  }
  return false;
}

console.log(getKeyValue(school, 1, "course"));

console.log();

console.log(
  "Questão 2: -----------------------------------------------------------------"
);
/**
 * Questão 2: Crie uma função que retorne a soma do
 * número total de estudantes em todos os cursos.
 */

const sumStudant = (obj) => {
  let sum = 0;
  for (let i = 0; i < obj.lessons.length; i++) {
    sum += obj.lessons[i].students;
  }
  return sum;
};
console.log("A soma de todos estudantes é: ", sumStudant(school));

console.log();
console.log(
  "Questão 3: -----------------------------------------------------------------"
);

/*
   Questão 3: Crie uma função que verifica se uma determinada
   chave existe em todos os elementos do array lessons. O 
   retorno deve ser um booleano (true ou false). Essa função
   deve possuir dois parâmetros: o objeto e o nome da chave.
   
   return school.lessons[i].hasOwnProperty(`${key}`);
*/

const checkkey = (obj, key) => {
  let equal = 0;
  for (let i = 0; i < obj.lessons.length; i++) {
    if (obj.lessons[i].hasOwnProperty(`${key}`)) {
      equal += 1;
    }
  }
  if (equal === obj.lessons.length) {
    return true;
  }
  return false;
};

console.log(checkkey(school,'students'));

console.log();
console.log(
  "Questão 4: -----------------------------------------------------------------"
);
/**
 * Questão 4: Crie uma função para alterar o turno para noite no 
 * curso de Python. Essa função deve ter três parâmetros: a base 
 * de dados a ser modificada, o nome do curso e o novo valor da 
 * chave.
 */

const setData = (obj,nameCourse,newCourse) => {
    for(let i = 0; i < obj.lessons.length;i++){
      if(obj.lessons[i].course === nameCourse){
        obj.lessons[i].course = newCourse;
      }
    }
    return obj.lessons;
}
console.log(setData(school,'Python','Php'));