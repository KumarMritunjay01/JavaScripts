// ****23*** Lecture-23 ***23****
// This keyword and arrow function

const user = {
    username :"Mriutnjya",
    login:true,
    welcomeMessage: function() {
        console.log(`${this.username},welcome to website`);  // this is refer to  current context/ current value
        console.log(this)
    }
}

user.welcomeMessage()  // Method
user.username = "kumar"
user.welcomeMessage()
// console.log(this)   // {} empaty object due to not in clobally

// function one () {
//     console.log("This keyword")
//     console.log(this)
// }
// one()

// ---------Arrow Function--------------
console.log("-------Arrow function---------")

const one = () => {
    let username = "Guddu"
    console.log(this);    // {}
}
// one ()

/*
    () => {}  => syntax of arrow function
    ex. const add = (a,b) =>{
        a+b
    }
*/

const addTwo = (a,b) =>{
    return a+b    // explecite return
}

// same  work
const addTwo_2 = (a,b) => (a+b)  // Implecite return  (use for object return)

const addTwo_3 = (a,b) => ({username:"Mritunjay"})  // Object return

console.log(addTwo(3,4))
console.log(addTwo_2(3,4))
console.log(addTwo_3(2,3))