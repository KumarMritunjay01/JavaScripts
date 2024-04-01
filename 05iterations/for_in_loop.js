// ****29*** Lecture-29 ***29***

// loop on Object
const myObj = {
    js : "javaScripts",
    cpp : "C++",
    rb : "ruby",
    swift : "swift by apple" 
}

for(const key in myObj){
    // console.log(key)      // print all key
    // console.log(myObj[key])  // print all value
    console.log(`${key} :- ${myObj[key]}`)   // key & Value
}

// for in loop in Array

const Arr = ["js","rb","py","java"]

for (const key in Arr){
    // console.log(key)    // print indexing like (0,1,2,3)  -> i.e. key
    console.log(Arr[key])  // print actual value
}

// Map is not Itratable
const map = new Map()

map.set('IN',"India")  // IN is key
map.set('USA',"United state of America")
map.set('Fr',"France")
map.set('IN',"India")  // Not printed -> Due to map considerd as unique value

for(const key in map){
    console.log(key)     // Nothing is print  -> Learn map key form mdn
}

