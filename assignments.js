/*
// 13 Values and variables & Let, const and var
const country = "Mexico";
const continent = "America";
let population = 120000000;

console.log(country, continent, population);

// Data types
let isIsland = false;
let language;

console.log(
  typeof isIsland,
  typeof population,
  typeof country,
  typeof language
);

// let, const and ver
language = "Spanish";
console.log(language);

// continent = "Europe";

// 14 basic operators
let halfPopulation = population / 2;
console.log(halfPopulation);

population++;
console.log(population);

let finlandPopulation = 6000000;
console.log(population > finlandPopulation);

let description =
  country +
  " " +
  "is in " +
  continent +
  " " +
  "and its " +
  population +
  " " +
  "speaks " +
  language +
  ".";
console.log(description);

// Coding challenge #1
let markMass = 78;
let johnMass = 92;
let markHeight = 1.69;
let johnHeight = 1.95;

let markBMI = markMass / markHeight ** 2;
let johnBMI = johnMass / johnHeight ** 2;

console.log(markBMI, johnBMI);

let markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);

markMass = 95;
johnMass = 85;
markHeight = 1.88;
johnHeight = 1.76;
markBMI = markMass / markHeight ** 2;
johnBMI = johnMass / johnHeight ** 2;

console.log(markBMI, johnBMI);

markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);

//17. String and Template Literals
const country = "Mexico";
const continent = "America";
const population = 120000000;
const language = "Spanish";

console.log(
  `${country} is in ${continent}, and its ${population} million people speak ${language}.`
);
*/

// Coding Challenge #2

let markMass = 95;
let markHeight = 1.88;
let johnMass = 85;
let johnHeight = 1.76;

let markBMI = markMass / markHeight ** 2;
let johnBMI = johnMass / johnHeight ** 2;

console.log(markBMI, johnBMI);

if (markBMI > johnBMI) {
  console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})`);
} else {
  console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})`);
}

const markMass2 = 95;
const markHeight2 = 1.88;
const johnMass2 = 85;
const johnHeight2 = 1.76;
const markBMI2 = markMass2 / markHeight2 ** 2;
const johnBMI2 = johnMass2 / johnHeight2 ** 2;

console.log(markBMI2, johnBMI2);

let message;
if (johnBMI2 > markBMI2) {
  message = `John's BMI (${johnBMI2}) is higher than Mark's (${markBMI2})`;
} else {
  message = `Mark's BMI (${markBMI2}) is higher than John's (${johnBMI2})`;
}

console.log(message);
