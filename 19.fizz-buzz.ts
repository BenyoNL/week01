'use strict';

// Write a program that prints the numbers from 1 to 100
// but for multiples of three print “Fizz” instead of the number
// and for the multiples of five print “Buzz”
// For numbers which are multiples of both three and five print “FizzBuzz”

let fizz: number= 3;
let buzz: number= 5;
for(let x=1; x <= 100; x++) {
  if (x % fizz == 0) {
    console.log("Fizz");
  } else if (x % buzz == 0) {
    console.log("Buzz");
  } else if (x % fizz == 0 && x % buzz == 0) {
    console.log("Buzz");
  } else {
    console.log(x);
  }
}

