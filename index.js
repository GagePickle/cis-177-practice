// not defined means theres no place in memory
// undefined is a PRIMITIVE TYPE.
// It signifies the absence of ANY value
let x;

x = 23;
console.log(typeof x);
x = 0;
// NULL is a PRIMITIVE TYPE
// NULL represents a deliberate assignment of 'nothing.'
// let x = null;
console.log(x);
// This is a JS OBJECT.
// You can nest things inside objects
const me = {
  name: "Gage",
  age: 23,
  pets: {
    cat: "Wheat",
    dog2: "Lucy"
  }
};

// Create a new key value pair with age = 23
me.age = 22;
me.name = "Jeff";
console.log(me.pet.cat); // undefined.cat and undefined is a primitive so it can not use keys/.notation because it is not an object
