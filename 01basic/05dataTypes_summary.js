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



// *********** Stack and Heap ***************
// -> stack (Primitive)  , Heap(Non-Primitive)

console.log("---Stack and Heap---")
let myName = "Mritunjay"
let anotherName = myName
anotherName = "Kumar"

console.log(myName)
console.log(anotherName)

// Non-Primitive Data type , so it's goes to heap
let userOne = {
    email:"kmritunjay525@gmail.com",
    upi:"user@ybl",
}

let userTwo = userOne

userTwo.email = "kumar@gmail.com"

console.log(userOne)
console.log(userTwo)

// In stack we get Copied value not change in original value
// but in Heap we always get Refrence value and it change in original value. (any changes then it change in original value)