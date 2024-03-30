// *****17*** Lecture-17 ***17****
// Js object Part-2

const tinderUser1 = new Object()   // this is an object

const tinderUser = {}   // this is also an object 

// assing value of tinderUser
tinderUser.id = "123abc"
tinderUser.name = "Mritunjay"
tinderUser.isLoggedIn = false

console.log(tinderUser)   // console all value of object tinderUser

// ------Nasted object--------
console.log("----Nasted Object------")

const regularUser = {
    email : "Kumar123@gmail.com",
    fullname:{
        userfullname: {
            firstname : "Mritunjay",
            lastname : "Kumar"
        }
    }
}

// Accessing the object reularUser -> firstName
console.log(regularUser.fullname.userfullname.firstname)

//--------- object merging-------
console.log("----object Merge---")

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
const obj4 = {5:"e",6:"f"}

// const obj3 = {obj1,obj2}            // same as array ->   { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }


// Object.assign() is a static method copies all enumerable own properties from one or more source objects to a target .
// it returns the modified target objects
// {} empty obj => target   &   obj1,obj2 => source
// less use

// const obj3 = Object.assign({},obj1,obj2,obj4)    // { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

// most use for merging of object (90% time)
const obj3 = {...obj1,...obj2,...obj4}  // { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' } => same as Object.assign({},..,..)
console.log("after merge : ",obj3)

// when value come from DataBase then assign with this way
const users = [
    {
        id:1,
        email:"kumar@gmail.com"
    },
    {
        id:2,
        email:"chhota@gmail.com" 
    },
    {
        id:3,
        email:"kale@gmail.com"
    },
    {
        id:4,
        email:"patil@gmail.com"
    }

]

// accessing the object
console.log("DB users : ",users[0].email)  // => 0:kumar@ , 1:chhota@,... -> 0 base indexign
console.log("tinnerUser : ",tinderUser);

// all keys in array we can use at other palces like looping (IMPORTANT)
console.log("Keys of tinderUsers : ", Object.keys(tinderUser))   
console.log("Keys fo User : ",Object.keys(users))
console.log("Values of tinderUser : ",Object.values(tinderUser))

// ------Object.entries
console.log("Enteries of tinerUser : ",Object.entries(tinderUser))  // access all key and value both

// --------check value of tinerUser before accessing due to crash
console.log(tinderUser.hasOwnProperty('isLoggedIn'))              // true

// other object check in (console) by
// const obj = {1:"a",2:"b"}
//obj -> Enter => expand [[Prototype]] :object
