'use strict';

// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
//
// Surface Area: 600  //felszín
// Volume: 1000  //térfogat


// let surface: number = 600;

// let aSide = 600 / 6 / 10 *10

// console.log(aSide);

let aSide: number = 10;
let bSide: number = 5;
let cSide: number = 15

let surface: number = 2 *( aSide * bSide + aSide * cSide + bSide * cSide)
let volume: number = aSide * bSide * cSide

console.log(surface +" nm2")
console.log(volume +" m3")