// *****16*** Lecture-16 ***16*****

// singleton

const mySym = Symbol("key1")

// object literals
const jsUser = {         // object Declaratiions (literals)
    name:"Mritunjay",    // key:value
    "fullName":"Mritunjay Kumar",
    age:22,
    [mySym]:"mykey1",    // declare symbol -> always in square brakets []
    location :"Pune",
    email:"kmritunjay525@gmail.com",
    isLoggedIn:false,
    lastLoginDay :["Monday","Saturday"]
} 

// Accessing Object (this is not right way)
console.log(jsUser.name)

// another way to access the objects (square Notations)
console.log(jsUser["name"])
console.log(jsUser["age"])
console.log(jsUser["fullName"])  // we can't access by (.) operator of fullName
console.log(jsUser[mySym])     // access symbol
console.log(typeof mySym)   // Type = symbol

// freeze -> freeze for changes in object
console.log("****FREEZE******")
// Object.freeze(jsUser)      // no changes take place after object.freeze
jsUser.email = "Kumar@123.gmail.com"
console.log(jsUser.email)

// Function trites as variable

console.log("**** Function trited as variable ****")

jsUser.greeting = function () {
    // console.log("Hello Js user");
    console.log(`Hello Js User ${this.fullName}`)
}
console.log(jsUser.greeting)     // [Function (anonymous)]
console.log(jsUser.greeting())  // Hello Js user