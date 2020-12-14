// 'use strict';

// let lineCount: number = 4;

// // Write a program that draws a
// // pyramid like this:
// //
// //    *
// //   ***
// //  *****
// // *******
// //
// // The pyramid should have as many lines as lineCount is


let s = "*";
let x = "     ";
let y= "";

console.log(x,y,y,y, s);
console.log(x,y,y, s+s+s);
console.log(x,y, s+s+s+s+s);
console.log(x, s+s+s+s+s+s+s);


  
let countRowPyr :number = 4;
let starsPyr :number = 1
let numOfSpacesPyr :number = 3

for (let i = 1; i <= countRowPyr; i++) {

  
        console.log(" ".repeat(numOfSpacesPyr) + "*".repeat(starsPyr))
        numOfSpacesPyr = numOfSpacesPyr -= 1
        starsPyr = starsPyr += 2
}
