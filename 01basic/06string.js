// *********  STRINGS *******

const name = "Mritunjay"  // string Declarations
const repoCount = 8

console.log(name + repoCount + " value")

// Srting Interpolations
console.log("Concatinataion by String Interpolations")
console.log(`hello my name is ${name} and my repo count is ${repoCount}`) // `` -> backTick

// Another way to Intialise String
const gameName = new String('Kumar')

console.log(gameName[0])
console.log("object is :" , gameName.__proto__)
console.log("Length is : " ,gameName.length)
console.log("In upperCase :", gameName.toUpperCase())
console.log("At second position :", gameName.charAt(2))
console.log("R at positions :", gameName.indexOf('r'))

const newString = gameName.substring(0,4)  // 0-3 (4 not included)
console.log(newString)  

const anotherString = gameName.slice(-8,4)
console.log(anotherString)

// ***** TRIM AND REPLACE (for trim start and end space) 
const newStringOne = "    Kumar     "
console.log("Before trim :",newStringOne)
console.log("After trim :",newStringOne.trim())

// Learn trim on mdn  -> like trimStart() and trimEnd()

// ------ Rplace  ----- 

const url = "https://mritunjay@0101"
console.log(url.replace('0101','_01'))  // replace with 0101 -> _01

console.log(url.includes('mritunja'))  // true / false

console.log(gameName.split('-'))