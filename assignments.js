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

// 22 Equality operators
let numNeighbours = Number(
  prompt(`How many neighbour countries does your country have?`)
);

if (numNeighbours === 1) {
  console.log(`Only 1 border`);
} else if (numNeighbours > 1) {
  console.log(`More than 1 border`);
} else {
  console.log(`No borders`);
}

//24 Logical operators
let country = prompt(`Enter your country: `);
let language = prompt(`Enter the language: `);
let population = Number(prompt(`How many people live on this country: `));
//let isIsland = prompt(`It is an island?`);

console.log(language === "english");
console.log(population < 50);
//console.log(isIsland === "no");

//console.log(!isIsland);
let isIsland = true;
console.log(language === "english" && population < 50 && !isIsland);

if (language === "english" && population < 50 && !isIsland) {
  console.log(`You should live in ${country} :)`);
} else {
  console.log(`${country} does not meet your criteria :(`);
}

// Coding challenge #3
let avgDolphins = (96 + 108 + 89) / 3;
//let avgKoalas = (88 + 91 + 110) / 3;
//let avgDolphins = (97 + 112 + 101) / 3;
//let avgKoalas = (109 + 95 + 123) / 3;
//let avgDolphins = (97 + 112 + 101) / 3;
let avgKoalas = (109 + 95 + 106) / 3;
console.log(avgDolphins, avgKoalas);

if (avgDolphins > avgKoalas && avgKoalas < 100) {
  console.log(`Dolphins is the winner!`);
} else if (avgKoalas > avgDolphins && avgDolphins < 100) {
  console.log(`Koalas is the winner!`);
} else if (
  avgDolphins === avgKoalas &&
  avgDolphins >= 100 &&
  avgKoalas >= 100
) {
  console.log(`Is a draw`);
} else {
  console.log(`Nobody won`);
}

// 26 Switch Statement
const language = "hindi";

switch (language) {
  case "mandarin":
    console.log(`MOST number of native speakers!`);
    break;
  case "spanish":
    console.log(`2nd place in number of native speakers`);
    break;
  case "english":
    console.log(`3rd place`);
    break;
  case "hindi":
    console.log(`Number 4`);
    break;
  default:
    console.log(`Great language too :D`);
}
*/

// 27 Statements and Expressions
// See video but mostly informational.

// 28 the Conditional (Ternary) Operator
// const population = 21;

// message =
//   population > 33
//     ? `Portugal's population is above average`
//     : `Portugal's population is below average`;
// console.log(message);

const country = prompt("Enter your country: ");
const population = Number(prompt("Enter the number of population"));

console.log(
  `${country}'s population is ${population > 33 ? "above" : "below"} average.`
);
