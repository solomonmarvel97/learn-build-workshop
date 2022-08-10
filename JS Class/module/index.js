// Import
// Destructure

const {
  addition,
  subtraction,
  multiplication,
  division,
} = require("./arithmetic");

// Reusing functions

let result1 = addition(1, 2);
let result2 = subtraction(1, 2);

let users = {
  name: "marv",
  otherNames: "Solomon",
};

let {name, otherNames} = users

console.log(name, otherNames)

console.log(result1);
console.log(result2);
