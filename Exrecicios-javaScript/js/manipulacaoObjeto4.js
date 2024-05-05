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
    Crie uma função para alterar o turno para noite no curso de Python. 
    Essa função deve ter três parâmetros: a base de dados a ser modificada, 
    o nome do curso e o novo valor da chave.

{
    course: "Python",
    students: 20,
    professor: "Carlos Patrício",
    shift: "Manhã",
  }
 
 console.log(school.lessons[0].course);
  let changeShift = (obj,coursename,newKeyValue) => {
    for(let i = 0;i < obj.lessons.lenght;i++){
        if(obj.lessons[i].course === coursename){
            obj.lessons[i]['shift'] = newKeyValue;
        }
    }
  }

  changeShift(school,'Python','Noite');
  console.log(school.lessons);
*/

const changeKey = (obj, course, value) => {
  // Encontra o elemento que o course é igual a Python
 let findCourse;
  for (let index = 0; index < obj.lessons.length; index += 1) {
    let element = obj.lessons[index];
    if(element.course === course) {
      findCourse = element;

      break;
    }
  }
if(findCourse !== undefined) {
  findCourse.shift = value;
  return findCourse;
} else {
  return "Curso não encontrado.";
}}
console.log(changeKey(school, "Python", "Noite"));
