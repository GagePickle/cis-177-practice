// PASS by VALUE
let x = 3;

// PRIMITIVES CANNOT MUTATE
// '3' that was used with 'x' previously is completely thrown out and replaced with '4'
x = 4;
let y = x;

console.log(y);

// PASS BY REFERENCE
const a = {
  name: "Gage"
};
// B will point to the same memory address as a.
// What happens to 1 will affect the other.
const b = a;

a.name = "Bill";

console.log(b.name);
