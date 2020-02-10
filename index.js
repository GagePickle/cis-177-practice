// Nested object
const me = {
  name: "Gage",
  age: 22,
  major: "Web Development",
  features: {
    eyes: "Green",
    hair: "Black",
    alive: true
  }
};
console.log(me);
// Add key value pair using dot notation
me.features.gender = "Male";
// Change values of key value pairs
me.name = "Gage Pickle";
me.features.hair = "Brown";
// Log values of nested object
console.log(me.features.gender);
console.log(me.features.hair);
console.log(me.features.alive);
// Bracket notation
// use BRACKET NOTATION to access a key that is REFERENCED by a VARIABLE.
const keyThatINeed = "hair";
// Template literal using bracket notation and dot notation
console.log(`Bracket notation with variable:`, me.features[keyThatINeed]);
console.log(`Bracket notation with string: ${me["keyThatINeed"]}`); // undefined
// console.log(me[keyThatINeed][hair]); // you can chain with bracket notation
console.log(me["keyThatINeed"]); // undefined
