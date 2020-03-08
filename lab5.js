let city1 = {};
city1.name = 'ГородN';
city1.population = 10000000;
city1.getName = function(){return this.name};
city1.exportStr = function(){return `name = ${this.name} \npopulation = ${this.population}`};
let city2 = {name: "ГородM", population: 10^6, getName(){return this.name}, exportStr(){return `name = ${this.name} \npopulation = ${this.population}`}};
console.log(city1.exportStr())
console.log(city2.exportStr())