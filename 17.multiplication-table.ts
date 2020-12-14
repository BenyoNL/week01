'use strict';

// Create a program that
// prints the multiplication table with number
//
// Example:
// The number 15 should print:
//
// 1 * 15 = 15
// 2 * 15 = 30
// 3 * 15 = 45
// 4 * 15 = 60
// 5 * 15 = 75
// 6 * 15 = 90
// 7 * 15 = 105
// 8 * 15 = 120
// 9 * 15 = 135
// 10 * 15 = 150


let number: number = 15;

for(let index = 1; index <= 10; index ++ ){
console.log(index + ' * ' + number + ' = ' + index * number);
}

//console.log("1 * 15 = 15 \n2 * 15 = 30 \n3 * 15 = 45 \n4 * 15 = 60 \n5 * 15 = 75 \n6 * 15 = 90 \n7 * 15 = 105 \n8 * 15 = 120 \n9 * 15 = 135 \n10 * 15 = 150 ");
