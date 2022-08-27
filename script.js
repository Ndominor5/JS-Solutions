/*let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Bob";
console.log(firstName);

let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "Jona");

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;

// const job = "teacher";
// console.log(job);

var job = "programmer";
console.log(job);
job = "teacher";
console.log(job);

// Math Operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Jonas";
const lastName = "Schmedtmann";
console.log(firstName + " " + lastName);

// Assignment Operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--; // x = x -1
x--;
console.log(x);

// Comparison operators
console.log(ageJonas < ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);


const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);

const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";

console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);

console.log("String with \n\
multiple \n\
lines");

console.log(`String
multiple
lines`);

const age = 15;

if (age >= 18) {
  console.log("Sarah can start driving license 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait antoher ${yearsLeft} years :)`);
}

const birthYear = 2012;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

// 20 Type Conversion and Coercion
// Conversion is manually converted.
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);

console.log(String(23), 23);

// Coercion is automatically converted.
console.log("I am " + 23 + " years old.");
console.log("23" - "10" - 3); // logical operators *, , / converts strings to #s
console.log("23" * "2");

// 21 Truthy and falsy values
// 5 falsy values: 0, ' ', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));

const money = 100;
if (money) {
  console.log(`Don't spend it all :)`);
} else {
  console.log(`You should get a job!`);
}

let height;
if (height) {
  console.log(`Yay! Height is defined`);
} else {
  console.log("Height is UNDEFINED");
}
*/

// 22 Equality Operators
// === strict equality operator doesn't use type of coersion.
const age = "18";
if (age === 18) console.log(`You just became an adult :D (strict)`);

// == loose equality operator uses type of coersion.
if (age == 18) console.log(`You just became an adult :D (loose)`);

const favourite = Number(prompt(`What is your favorite number?`));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  console.log(`Cool! 23 is an amazing number!`);
} else if (favourite === 7) {
  console.log(`7 is also a cool number`);
} else {
  console.log(`Number is not 23 or 7`);
}

// different operator !== strict != loose
if (favourite !== 23) console.log(`Why not 23?`);
