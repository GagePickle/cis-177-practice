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
