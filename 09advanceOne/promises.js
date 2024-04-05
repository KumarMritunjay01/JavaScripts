// ****40*** Lecture-40 ***40****
// Promises in JavaScripts

// Learn bluebird vs Native library -> from github (Not required it's only for history)

const promisesOne = new Promise(function(resolve,reject){    //promise is object -> promise created
    // Do as async task
    // -> DB call , cryptography , network

    setTimeout(function () {
        console.log('async task is complete')
        // to connect then with resolve
        resolve()   // this is direct method
    },1000)
})    

// consume / consumpsion of promises

promisesOne.then(function(){           // then -> resolve
    console.log("Promise consumed")
})

// Other method to create and call the promises
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2")
        resolve()
    },1000)
}).then(function(){
    console.log("Async task 2 resolved")
})

const promisesThree = new Promise (function(resolve,reject){
     setTimeout(function(){
        resolve({username:"abc",email:"abc@gmail.com"})  // jayada time object pass hoga

     },1000)
})

promisesThree.then(function(user){
    console.log(user)    // { username: 'abc', email: 'abc@gmail.com' }
})

const promiseFour = new Promise(function(resolve,rejet){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"Mk",password:"kumar"})
        }
        else{
            rejet("ERROR Some thing wend wrong")
        }
    },1000)
})

promiseFour
.then((user)=>{
    console.log(user);
    return user.username
})
.then((username) => {
    console.log(username)
})
.catch(function(error){
    console.log(error)    //ERROR Some thing wend wrong
})
.finally(() =>{console.log("Promises four excuted")})  // finally always excuted either resolved or rejected


const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"Mritunjay",password:"1234"})
        }
        else{
            reject("Error Js went wrong: ")
        }
    },1000)
})

// exat as then and catc

async function consumePromiseFive (){
    // rejecting a promise which was not handled with .catch(). (must be wrap try and catch block)
    // const response = await promiseFive
    // console.log(response)

    try{
        const response = await promiseFive
        console.log(response)
    } catch(error){
        console.log(error)
    }
}

consumePromiseFive()

// API Fetch from back-End

// async function getAllUsers() {
//     try{
//         const response = await fetch('https://api.github.com/users/mritunjay')  // Promise { <pending> }
//     const data = await response.json();
//     console.log(data);
//     // console.log(response)  // it's working
//     } catch(error){
//         console.log(error)
//     }
// }
// getAllUsers()

// same code with resolve and reject method
fetch('https://api.github.com/users/mritunjay')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log(error)
})