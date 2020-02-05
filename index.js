// Global variables cs. Object keys
const x = 28;
const name = "fake";

const me = {
  name: "Gage",
  age: 22
};

me.name = "Jeff";
me.age = 23;
// Reference the GLOBAL VARIABLE
console.log(name);
// Reference the key 'name' inside of the OBJECT me.
console.log(me.name);
console.log(me.age);

console.log(console);
console.log(me);
