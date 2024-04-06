
// ***42*** Lecture-42 ****42***
// Object Literal

const user = {   // object litral
    username: "Mritunjay",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log("Got user details from database");
        console.log(`Username: ${this.username}`);
        console.log("This : ",this);    // -> this key word is use for current context
    }
}

// console.log(user.username)
// console.log(user.getUserDetails())
// console.log(this);

// cunstructor function
//  const promises = new Promise()  // -> new key word is use to create new instance

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

const userOne = new User("hitesh", 12, true)     // -> new is use to prevent the overWrite
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);  // [Function: User]
console.log(userTwo);

// new Key word
/*
-> jab ham new key word use karte hai ek naya empty object create hota hai that is called enstance
-> 2nd -> ek constuctor function call hota hai new key-word ke karan
-> 3rd -> all argument inject in this key word
-> 4th -> get value
*/