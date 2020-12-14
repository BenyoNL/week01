'use strict';

let a: number = 3;
// make it bigger by 10
a = a + 10;
console.log(a);

let b: number = 100;
// make it smaller by 7
b = b - 7;
console.log(b);

let c: number = 44;
// double c's value
c = c * 2
console.log(c);

let d: number = 125;
// divide d's value by 5
d = d / 5;
console.log(d);

let e: number = 8;
// what's the cube of e's value?
e = e **3
console.log(e);

let f1: number = 123;
let f2: number = 345;
// tell if f1 is bigger than f2 (as a boolean)

let f1VSf2: boolean = true;

if (f1 > f2) {
   console.log('F1 bigger')
}
else {
    console.log('F2 bigger')
}

let g1: number = 350;
let g2: number = 200;
// tell if the double of g2 is bigger than g1 (pras a boolean)
let g1VSg2: boolean = true;

if (g2 *2 > g1){
    console.log(true)
}
else{
    console.log(false)
}


let h: number = 1357988018575474;
// tell if 11 is a divisor of h (as a boolean)
let hDivisor: boolean = true;
let n = h % 11 === 0

    console.log( h % 11 === 0)



let i1: number = 10;
let i2: number = 3;
// tell if i1 is higher than i2 squared and smaller than i2 cubed (as a boolean)
let solution: boolean = true;
let i2S = i2 **2;
let i2C = i2 **3;

if(i1 > i2S){
if (i1 < i2C){
    console.log (true)
}
}
else{
    console.log(false)
}

let j: number = 1521;
// tell if j is divisible by 3 or 5 (as a boolean)
let divisible: boolean = true;
let z: number = 5;
let x: number = 3

if(j / z || j / x){
    console.log(true);
}
else{
    console.log(false)
}

console.log(1521 % 5 === 0 || 1521 % 3 === 0)


console.log(5 + 5 === 9 || 1 + 2 === 3)
console.log(5 + 5 === 9 && 1 + 2 === 3)

