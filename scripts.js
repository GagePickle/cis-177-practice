// Log the numbers from 1 to 10.
// In parentheses, specify 3 things - start - stop - increment
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

let total = 0;

for (let i = 1; i <= 10; i++) {
  total += i;
  console.log(total);
}

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz!");
  } else if (i % 3 === 0) {
    console.log("Fizz!");
  } else if (i % 5 === 0) {
    console.log("Buzz!");
  } else {
    console.log(i);
  }
}

const x = {};

if (window.confirm("Okay or cancel?")) {
  x.isconfirmed = true;
} else {
  x.isconfirmed = false;
}
