
'use strict';

//let lineCount: number = 6;

// Write a program that draws a
// square like this:
//
// %%%%%%
// %%   %
// % %  %
// %  % %
// %   %%
// %%%%%%
//
// The square should have as many lines as lineCount is

let r = "%";
let p = " ";

console.log(r+r+r+r+r+r);
console.log(r+r+p+p+p+r);
console.log(r+p+r+p+p+r);
console.log(r+p+p+r+p+r);
console.log(r+p+p+p+r+r);
console.log(r+r+r+r+r+r);


let lines :number = 6;
let topAndButtom :string = "%%%%%%"
let middle = ["%", " ", " ", " ", " ", "%"]
let middleString = ""
let iForPer = 1;


for (let i: number = 1; i <= lines; i++) {

    
    if (i == 1 || i == 6) {
        console.log(topAndButtom)
    }
 
    else {
        middle[iForPer] = "%"
        
        middleString = middle.join("");
        console.log(middleString)
        middle = ["%", " ", " ", " ", " ", "%"]
        iForPer = iForPer + 1 
    }  
}