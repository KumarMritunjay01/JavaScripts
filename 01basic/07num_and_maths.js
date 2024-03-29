// Lecture -12

const score = 400
console.log(score)

const balance = new Number(100)
console.log(balance)

console.log(balance.toString()) // -> to convert into string
console.log(balance.toFixed(2))  // -> to fixed 2 digit after desimle

const otherNumber = 23.8966
console.log(otherNumber.toPrecision(3))  // 

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')) // 10,00,000


// ********  MATHS  ************

console.log("Maths")
console.log(Math);
console.log(Math.abs(-4))  // -> absolute value
console.log(Math.round(4.4)) // -> round of 4.5 => 5
console.log(Math.ceil(4.2)) // -> seiling value (if 4.1/4.2/.. => 5)
console.log(Math.floor(4.9)) // -> floor value (if 4.9/4.8/... => 4)
console.log(Math.min(4,3,6,8))  // -> find Minimum value
console.log(Math.max(4,3,6,8))  // 8
console.log(Math.random()) // value is always 0-1
console.log((Math.random()*10)+1)  // if you want to random number from 1-10

const min =10
const max = 20

console.log(Math.floor(Math.random() *(max-min +1)) +min)