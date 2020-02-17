// True because PRIMITIVES are COMPARED by VALUE
console.log(49 === 49);

const a = 49;
const b = 49;
// FALSE because OBJECTS are COMPARED by REFERENCE
console.log(a === b);

const x = {
  name: "Gage"
};

const y = {
  name: "Gage"
};

// FALSE because OBJECTS are COMPARED by REFERENCE aka it compares the object names not the values
console.log(x === y);
console.log({ a: 42 } === { a: 42 }); // Is still false never compare objects
