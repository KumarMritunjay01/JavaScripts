// ****19*** Lecture-19 ***19****
// functions

// => function  Declaration
/*
function function_name () {
    console.log("M")
    console.log("R")
    console.log("I")
    console.log("T")
    console.log("N")
    console.log("J")
    console.log("A")
    console.log("Y")
}

// function call / excute
function_name()
*/

// function of add two number
// function addtwoNumber (num1,num2){   // num1 , num2 => parameter
//     console.log(num1+num2)
// } 
// const result = addtwoNumber(4,5)  // 4,5 => Arguments
// console.log("Result : ",result)   // undefined due to only console not return

function addtwoNumber (num1,num2){   // num1 , num2 => parameter
    let result = num1+num2
    return result
    console.log("Mritunjay")  // Never excute because after return nothing is excute
} 
const result = addtwoNumber(4,5)  // 4,5 => Arguments
console.log("Result : ",result)   // undefined due to only console not return

// crete new function
function loginUserMessage(username){     // (username===sam) => sam is default value
    if(username===undefined){      // or if(!username){}
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Mritunjay"))  // Mritunjay just logged in
console.log(loginUserMessage())     // undefined just logged in   => Please enter a username

// ****20*** Lecture-20 ***20*****
// Dynamic argument  (rest operator) => (...) -> rest/spred operator
function calculateCartPrice1 (...num1){  // rest Operator
    return num1
}

console.log(calculateCartPrice1(200,300,400,500))  // => Found Array -> [ 200, 300, 400, 500 ]

function calculateCartPrice2 (val1,val2,...num1){  // rest Operator
    return num1 
}

console.log(calculateCartPrice2(200,300,400,500))  // [ 400, 500 ] => val1=200, val2=300 


// How to pass Object in function
console.log("How to pass object in function")
const user = {
    username:"Kumar",
    login : false
}

function handleObject (anyobject) {
    console.log(`username is ${anyobject.username} and login is ${anyobject.login}`)
}

// handleObject(user)  // pass object

// we can directly pass object
handleObject({
    username:"Mritunjay",
    login:true
})

// pass Array in function
const myArr = [1,2,3,4,5,6]

function returnSecondVal (getArray){
    return getArray[3]
}

console.log(myArr)