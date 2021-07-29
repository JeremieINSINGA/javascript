// 01 - Number
var integer = 102;
var float = 13.9;
console.log(integer, float);

// 02 - Convert
let basic = 34;
let stringified = basic.toString();
console.log(stringified);

// 03 - Round
let num = 1.5;
let rounded = Math.round(num);
console.log(rounded);

// 04 - Arithmétique;
let test = 12;
let bis = 5;

let addition = test + bis;
let soustraction = test - bis;
let multiplication = test * bis;
let division = test / bis;
let restant = test % bis;

console.log(addition);
console.log(soustraction);
console.log(multiplication);
console.log(division);
console.log(restant);

// 05 - Comparaison



let plusGrand = test > bis;
let plusGrandOuEgal = test >= bis;
let egaliteSimple = test == bis;
let egaliteStricte = test === bis;
let inegaliteSimple = test != bis;
let inegaliteStricte = test !== bis;

console.log(
  plusGrand,
  plusGrandOuEgal,
  egaliteSimple,
  egaliteStricte,
  inegaliteSimple,
  inegaliteStricte
);

// 06 - Condition
let limit = 50;
let score = 64;

if (score < limit) {
  console.log("Ok good!");
} else if (score === limit) {
  console.log("Ok, bien joué !");
} else {
  console.log("La pause déjeuner approche.");
}

// 07 - Condition II
let password = "azerty";

if (password.length > 6) {
  console.log("The password is secure");
} else if (password !== "azerty") {
  console.log("The password is not correct");
} else {
  console.log("Allons déjeuner !");
}

// 08 - Condition III


let condition1 = score >= limit; // true
let condition2 = password.length > 5; // true

if (condition1 && condition2) {
  console.log("Everything is good");
} else if (condition1 || condition2) {
  console.log("Something is good");
} else {
  console.log("Nothing is good");
}

// Bonus 1
let random = Math.floor(Math.random() * (6 - 1 + 1) + 1);

if (random === 6) {
  console.log("Yes I win!");
} else {
  console.log("So close...");
}

// Bonus 2
let month = "January";

switch (month) {
  case "January":
  case "February":
  case "March":
    console.log("Winter");
    break;
  case "April":
  case "May":
  case "June":
    console.log("Spring");
    break;
  case "July":
  case "August":
  case "September":
    console.log("Summer");
    break;
  case "October":
  case "November":
  case "December":
    console.log("Fall");
    break;
}

// Bonus 3
let number = 13.8;

let decimal = number - Math.floor(number);

if (decimal >= 0.5) {
  console.log(Math.ceil(number));
} else {
  console.log(Math.floor(number));
}

let result = Math.round(number);

console.log("La solution devrait être : ", result);