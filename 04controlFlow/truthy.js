// ****26*** Lecture-26 ***26****
// Truthy value and falsy value

// falsy values
// -> fasle , 0 , -0, BigInt 0n , "" , null , undefined , NaN

// Truthy values 
// -> "0", 'false', " " , [] , {} , function(){} , 

const userEmail = []    //  array consiter as true

if(userEmail){
    console.log("Got user email")
} else {
    console.log("Don't have user email")
}

if(userEmail.length === 0){
    console.log("Array is empty")
}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0){
    console.log("Object is empty")
} 

// Nullish Coalescing Operator (??) : for null , undefined
// use for error handling

let val1;
// val1 = 5 ?? 10;  // 5
// val1 = null ?? 10;  // 10
// val1 = undefined ?? 10;  // 10
val1 = null ?? 10 ?? 20;  // 10

console.log(val1);

// Terniary Operator
// -> condition ? true : false

const iceTeaPrice = 70

iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80")