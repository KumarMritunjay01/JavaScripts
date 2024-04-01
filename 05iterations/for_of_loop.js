// ****29*** Lecture-29 ***29****

// for of loop  -> use for Array & Object
 
const arr = [1,2,3,4,5]
for (const num of arr){   // const num of object
    console.log(num)
}

// On strings
const greetings = "Hello  world:"

for(let greet of greetings){
    console.log(greet)
}

// Maps  => like array

const map = new Map()   // map is also a object
// learn map from mdn
map.set('IN',"India")  // IN is key
map.set('USA',"United state of America")
map.set('Fr',"France")
map.set('IN',"India")  // Not printed -> Due to map considerd as unique value

console.log(map)

for(const [key,value] of map){   // key also write
    console.log(key)
    console.log(value)
}

// for of loop on object

const myObj = {
    "game1" : "NFS",
    "game2" : "Spiderman",
}

for(const [key,value] of myObj){
    console.log(key , ':-' , value)   // myObj is not iterable
}

// object Iterated by different way  (for in loop)