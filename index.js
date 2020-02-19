// Fizz Buzz
// Log the numbers from 1 to 100.
// However, if the number is divisible by 3 log 'Fizz!'
// If the number is divisible by 5 log 'Buzz!'
// If the number is divisible by 3 and 5 log 'FizzBuzz!'

let x = 0;

while (x <= 100) {
  // (!0)
  if (!(x % 3) && !(x % 5)) {
    console.log(x + " FizzBuzz!");
  } else if (!(x % 3)) {
    console.log(x + " Fizz!");
  } else if (!(x % 5)) {
    console.log(x + " Buzz!");
  } else {
    console.log(x);
  }
  x += 1;
}

// '!' is the NOT operator. It's a UNARY OPERATOR
// Using this in front of any data type (such as a number)
// Will immediately convert that data type into a Boolean
// Then that value will be inverted as per the NOT operator
console.log(Boolean(0));
console.log(!111);
console.log(!"Hello");
console.log(!"");
console.log(!true);
