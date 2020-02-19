// Fizz Buzz
// Log the numbers from 1 to 100.
// However, if the number is divisible by 3 log 'Fizz!'
// If the number is divisible by 5 log 'Buzz!'
// If the number is divisible by 3 and 5 log 'FizzBuzz!'

let x = 0;

while (x < 100) {
  x += 1;
  if (x % 3 === 0 && x % 5 === 0) {
    console.log(x + " FizzBuzz!");
  } else if (x % 3 === 0) {
    console.log(x + " Fizz!");
  } else if (x % 5 === 0) {
    console.log(x + " Buzz!");
  } else {
    console.log(x);
  }
}
