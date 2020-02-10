const x = 3;

// an EXPRESSION is anything that evaluates to a value
// STATEMENTS combine EXPRESSIONS with keywords and other syntax
// {}s establish scope of the code.
if (x === 3) {
  console.log("x is 3!");
} else {
  console.log("x is not 3!");
}

const age = 25;

if (age >= 25) {
  console.log("Renting a car is affordable");
} else if (age >= 18) {
  console.log("Renting a car will be expensive!");
} else {
  console.log("You can't rent a car!");
}
