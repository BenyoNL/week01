'use strict';

// An average Green Fox attendee codes 6 hours daily
let codingHours: number = 6
// The semester is 17 weeks long
//
let semesterTime: number = 17
// Print how many hours is spent with coding in a semester by an attendee,
// if the attendee only codes on workdays.
//
let workingDayPerWeek: number = 5

console.log(codingHours * semesterTime * workingDayPerWeek + ' hours spend by coding in 17 week if 30 hours coding / week');

// Print the percentage of the coding hours in the semester if the average
// work hours weekly is 52

let hoursInWeek: number = 168;
let averageWorkHoursWeekly: number = 52

console.log(averageWorkHoursWeekly / hoursInWeek + ' hours spend by coding in 17 week if 52 hours coding / week');

