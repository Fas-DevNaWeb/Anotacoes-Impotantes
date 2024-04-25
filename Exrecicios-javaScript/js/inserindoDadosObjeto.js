/* Crie uma variável chamada player e atribua a ela um objeto que reúna todas
 as informações das variáveis listadas.*/

const name = 'Marta';
const lastName = 'Silva';
const age = 34;
const medals = { golden: 2, silver: 3 };
const bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];



const player = {
    name:'Marta',
    lastName:'Silva',
    age:34,
    medals:34,
    bestInTheWorld:[2006, 2007, 2008, 2009, 2010, 2018],
}

console.log(player);
console.log("----------------------------------------------------------")
//A jogadora Marta Silva tem 34 anos de idade”.

let message = `A Jogadora ${player.name} ${lastName} tem ${age} anos de idade.`;
console.log(message);

console.log("-----------------------------------------------------------")

//A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes”.

let achievements = `A Jogadora ${player.name} ${lastName} foi eleita a melhor do mundo por ${player["bestInTheWorld"].length} vezes.`;
console.log(achievements);