// JS is DYNAMICALLY TYPED language
const name = "";

// We can quickly check to see if a value is `true` or `false`
// For example, if I left the `name` blank on a form
if (name) {
  console.log("the user filled out the name");
} else {
  console.error("User left name blank");
}

if (name === "") {
  console.log("user left this blank");
}
console.log(Boolean(3)); // true

console.log(Boolean(0)); // false
