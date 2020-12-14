'use strict';

//let lineCount: number = 6;

// Write a program that draws a square like this:
//
// %%%%%%
// %    %
// %    %
// %    %
// %    %
// %%%%%%
//
// The square should have as many lines as lineCount is

let j = "%";
let k = "    ";

console.log(j+j+j+j+j+j);
console.log(j+k+j);
console.log(j+k+j);
console.log(j+k+j);
console.log(j+k+j);
console.log(j+j+j+j+j+j);


let line :number = 6;
let topAndButtom :string = "%%%%%%"
let sides :string = "%    %"

for (let i :number = 1; i < 7; i++) {
    if (i == 1 || i == 6) {
        console.log(topAndButtom)
    }
    else {
        console.log(sides)
    }
}