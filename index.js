// JS will COERCE your data types into whatever it feels is appropriate.
// IMPLICIT COERCION
console.log("Hello" + 22);
console.log(22 + 22);
console.log(22 + true);

// Explicit Coercion
console.log(Number(false));
console.log(String(22));
console.log(Boolean(222));
console.log("3" * 3);
console.log("asdwads" * 3);

// Can be used to convert data entered into forms from string to numbers
console.log(parseFloat("123.45"));
console.log(parseInt("123.45"));
