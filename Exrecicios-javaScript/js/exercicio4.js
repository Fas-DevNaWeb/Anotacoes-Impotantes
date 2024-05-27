const countries = require("./countries");
//console.log(countries);
/*
   Exercício 26
   Desenvolva uma função que crie uma cópia do array countries e adicione 
   a Alemanha a esse novo array através do spread operator.

   const newCountry = {
      name: 'Germany',
      region: 'Europe',
      currencies: [{ code: 'EUR', name: 'Euro' }],
      capital: 'Berlin',
      population: 83190556,
      area: 357386
   };
*/

const copyCountries = (countries) => {
  const newCountry = {
    name: "Germany",
    region: "Europe",
    currencies: [{ code: "EUR", name: "Euro" }],
    capital: "Berlin",
    population: 83190556,
    area: 357386,
  };
  return [...countries, newCountry];
};

console.log(copyCountries(countries));
