// Lecture-13 (Dates)

let myDate = new Date()   // create Object
console.log(myDate)  // 2024-03-30T06:02:43.436Z (Not redable)
console.log(myDate.toString) // 2024-03-30T06:03:44.853Z
console.log(myDate.toLocaleString())  // 3/30/2024, 6:05:36 AM
console.log(typeof myDate)  // object

// create specific date formate
let myCreateDate = new Date(2024,0,1)   // month is start with 0=jan
console.log(myCreateDate.toLocaleString())  // 1/1/2024, 12:00:00 AM
console.log(myCreateDate.toDateString())  // Mon Jan 01 2024
 
let anotherDate = new Date("2024-03-30")  // specific formate
console.log(anotherDate.toDateString())

let myTimeStamp = Date.now()
console.log(myTimeStamp)  // 1711779134838 (in mili second)

console.log(Math.floor(Date.now()/1000))  // in second

// ANOTHER METHOD IN DATE

let newDate = new Date()
console.log(newDate)  // 2024-03-30T06:15:54.719Z (Current Date)
 console.log(newDate.getMonth())  // 2 (due to month start with 0)
 console.log(newDate.getDay())  // get current day (Day-1=Monday)

 // Learn from mdn