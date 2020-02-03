// create a variable "timeOfDay" and assign it a string
let timeOfDay = "Afternoon";
// create a variable "greeting" that references a template literal
// use "timeOfDay" in the template literal to create a message like "Good morning!" or "Good evening!"
let greeting = `Good ${timeOfDay}`;
// print "greeting"
console.log(greeting);
// create a new variable, but do not assign it a value
let x;
// print the variable and its type
console.log(typeof x);
// ? what type should we expect? undefined
// assign the variable a value that indicates the variable is purposely blank
x = null;
// ? what value should we assign? null
// print the variable and its type again
console.log(typeof x);
// ? what type should we expect? object
// try to print a variable that does not exist
console.log(y);
// ? what should we expect to print in the CLI? an undefined error
// print "greeting" again
console.log(greeting);
// ? will this line run? no because there is an error before it
