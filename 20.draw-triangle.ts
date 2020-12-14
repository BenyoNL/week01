'use strict';

let lineCount: number = 4;

// Write a program that draws a triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as lineCount is

let stars: string ="";
let z: number = 1;
let y: number = 1;

  for(z = 1; z <= lineCount; z++) {
      for(y = 1; y <= z; y++) {
        stars+="*";
      } 
    console.log(stars);
    stars=""; // kell ide, mert kölönben dupla csillagokat ír, csak azt nem értem, hogy miért :/
  }