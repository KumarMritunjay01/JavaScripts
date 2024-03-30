// **14***  LECTURE-14 ***14***
// *********** ARRAY **********

const myArray = [0,1,2,3,4,5]  // 0 base indexing
// shalow copy and deep copy
// -> Shollow :- A shallow copy of an object is a copy whose properties share the same refrences
// -> Deep :- Properties do not share the same refernces

const myHeros = ["shaktiman", "naagraj"] // second method for declaration of array
const myArr2 = new Array(1,2,3,4)  // third method for declare the array
console.log(myHeros[0])

// Array Method

myArr2.push(5)  // use for push at end
console.log(myArr2)

myArr2.pop()  // pop 1 ele. from end
console.log(myArr2)

myArr2.unshift(10)  // add ele. at begning  (problem for shifting all value this is time consuming (shift/unshift both))
console.log(myArr2)

myArr2.shift()   // remove from begning
console.log(myArr2)

console.log(myArr2.includes(12))  // false
console.log(myArr2.includes(4))  // true

const newArr = myArr2.join()  // join() Method is convert into String
console.log(newArr)
console.log(typeof newArr)

// slice , splice mehtod
console.log("A",myArr2)

const myn1 = myArr2.slice(1,3)  // use for slice the array from (where to where) ->"starting is included but end is not" -> 0 base indexing
console.log(myn1)

const myn2 = myArr2.splice(1,2)  // splice remove the all ele. from the main array with in range -> including starting and ending
console.log("B",myArr2)  // [1]  // splice manuplate in original array
console.log(myn2)

