/* 
Crie uma função que recebe uma região por parâmetro e retorne um array de objetos no formato:

{
  countryName: 'Afghanistan',
  population: 40218234,
  languages: [ 'Pashto', 'Uzbek', 'Turkmen' ]
},
*/

const data = require("./data.json");
let countryName;
let population;
let languages = [];


const result = (data,name) => {
  for (let i = 0; i < data.length; i++) {
    if (data[i].name == name) {      
      let d = data[i].languages.length;
      for(let i = 0; i < d;i++){
        languages.push(data[0].languages[i].name);
      }

      countryName = data[i].name;
      population = data[i].population;
      
      console.log("Name: " + countryName);
      console.log("Population: " + population); 
      console.log("Languagem: " + languages);          
    }
  }
};

result(data,'Africa');

console.log("------------------------------------------------");


const dataCountries = require('./data.json');

const getCountriesByRegion = (data, region) => {
  const filterCountries = [];

  for (let index = 0; index < data.length; index += 1) {
    const langNames = [];
    for (let indexLang = 0; indexLang < data[index].languages.length; indexLang += 1) {
      langNames.push(data[index].languages[indexLang].name);
    }

    if (data[index].region === region) {
      filterCountries.push({
        countryName: data[index].name,
        population: data[index].population,
        languages: langNames,
      })
    }
  }

  return filterCountries;
};

console.log(getCountriesByRegion(dataCountries, 'Africa'));