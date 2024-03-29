// Primitive dataTypes -> 7 types
// 7 types : String , Number, Boolean ,null , undefined , Symbol , BigInt

// Refrence type (Non-primitive dataTypes)
// -> Array , Objects, Function
const score = 100
const scoreValue = 100.3

const  isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)  // false

const bigNumber = 2323434454455454n  // bigInt


// Array , Object , Functions
const heros = ["shaktiman","naagraj","doga"]  // array

// object
let myObj = {
    name:"abc",
    age: 22,
}

// function
const myFunction = function () {
    console.log("Hello world")
}

// for determine the dataType 
console.log(typeof bigNumber)  // bigInt
console.log(typeof myFunction )  // function

// Learn DataTypes from mdn