let menu = require("./dados");

console.log(menu);
console.log("---------------------------------");
console.log(Object.keys(menu));
console.log("---------------------------------");

console.log(Object.values(menu));
console.log("---------------------------------");

console.log(menu.acompanhamentos[0]);
console.log(menu.acompanhamentos[1]);
console.log(menu.acompanhamentos[2]);
console.log("---------------------------------");

console.log(menu.acompanhamentos.length);

console.log('---------------------------------');
for (let i = 0; i < menu.acompanhamentos.length; i++) {
    console.log(menu.acompanhamentos[i].calories);
    
}
