// 'use strict';

// let currentHours: number = 14;
// let currentMinutes: number = 34;
// let currentSeconds: number = 42;

// // Write a program that prints the remaining seconds (as an integer) from a
// // day if the current time is represented by these variables

let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;
let secInOneDay: number = 24 * 60 * 60;
let pastSec: number = 14*60*60 + 34 * 60 + 42;
let diff: number = secInOneDay - pastSec;  //sec
let remainingTimeInHour: number = Math.floor(diff/(60*60));
let remainingTimeInMinute: number = Math.floor((diff%(60*60)/ 60));
let remainingTimeInSec: number = (diff%(60*60))% 60;

console.log(remainingTimeInHour + " :", remainingTimeInMinute + " :", remainingTimeInSec + " :");
  
