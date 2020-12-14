'use strict';

// Create a program that prints all the even numbers between 0 and 500

let numberOfExecutions: number = 500

// for (let index = 0; index <= numberOfExecutions; index++)
// if(index % 2 === 0)
// {
//     console.log(index)
// }

for (let index = 0; index <= numberOfExecutions; index += 2) {
    console.log(index);
}