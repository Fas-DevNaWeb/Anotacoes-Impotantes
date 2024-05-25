/*
Exercícios, vamos praticar?
Vamos aplicar o que acabamos de estudar sobre os métodos filter() e sort()?

Considere o seguinte array de objetos que representa uma lista de Pokémons 
para os exercícios à seguir:
*/
const pokemons = [
    { name: 'Pikachu', type: 'Elétrico', level: 25 },
    { name: 'Charizard', type: 'Fogo', level: 50 },
    { name: 'Bulbasaur', type: 'Planta', level: 10 },
    { name: 'Gyarados', type: 'Água', level: 40 },
    { name: 'Alakazam', type: 'Psíquico', level: 35 },
    { name: 'Snorlax', type: 'Normal', level: 50 },
    { name: 'Mewtwo', type: 'Psíquico', level: 70 },
    { name: 'Dragonite', type: 'Dragão', level: 55 },
    { name: 'Mew', type: 'Psíquico', level: 30 },
    { name: 'Articuno', type: 'Gelo', level: 60 },
    { name: 'Zapdos', type: 'Elétrico', level: 60 },
    { name: 'Moltres', type: 'Fogo', level: 60 },
    { name: 'Gengar', type: 'Fantasma', level: 45 },
    { name: 'Machamp', type: 'Lutador', level: 50 },
    { name: 'Lapras', type: 'Água', level: 35 },
    { name: 'Venusaur', type: 'Planta', level: 45 },
    { name: 'Blastoise', type: 'Água', level: 55 },
    { name: 'Golem', type: 'Pedra', level: 40 },
    { name: 'Arcanine', type: 'Fogo', level: 55 },
    { name: 'Jolteon', type: 'Elétrico', level: 40 },
  ];

  /*
  Exercício 20: Usando o filter
  Utilizando o método filter e object destructuring, crie uma função filterStrongPokemons 
  que retorna um novo array contendo apenas os Pokémons com nível superior a 30.
  */

 //const {name,type} = pokemons[0]; 
 // const {name} = pokemons[0].name;

 const filterStrongPokemons = (pokemons) => {
   return  pokemons.filter((elem) => {
    return elem.level > 30;
  })
 } 
 console.log(filterStrongPokemons(pokemons));

console.log('---------------------------------------------------')
// Outra forma de fazer .........
 const filterStrongPokemons1 = (pokemons) => {
  return pokemons.filter(({ level }) => level > 30);
};

console.log(filterStrongPokemons1(pokemons));

console.log("----------------------------------------------------------------------");

/*
    Exercício 21: Usando filter e map encadeados
    Utilizando os métodos filter e map encadeados, crie uma função getStrongPokemonNames
    que retorna um novo array contendo apenas os nomes dos Pokémons com nível superior a 50.
*/

