let score = null   // try with " null , 123, 123abc,"


console.log(typeof score)
 console.log(typeof(score))

 let valueInNumber = Number(score);  // convert string into Number
 console.log(typeof valueInNumber)

 console.log(valueInNumber)    // NaN-> Not A Number

 // Notes
 // "33"=> 33
 //"33abc" => NaN
 // true  => 1 , false =>0

 let isLoggedIn = 1;
 let booleanIsLoggedIn = Boolean(isLoggedIn)
 console.log(booleanIsLoggedIn)

 // 1 => true , 0 => false  
 // "" = flase , "abc"=> true

 let someNumber = 33
 let stringNumber = String(someNumber);  // convert into string
 console.log(typeof stringNumber)

 // ***************** OPERATIONS *****************
  let value =3 
  let nagValue = -value  // -3
  console.log(nagValue)

//   console.log(2**3)
//   console.log(2-2)
//   console.log(2+3)
//   console.log(2/2)
//   console.log(2%3)  // => for modulus
  
let str1 = "hello"
let str2 = "kumar"
console.log(str1+ " " +str2)

console.log("1"+2)  // 12
console.log(1+"2") // 12
console.log("1"+2+2) // 122
console.log(1+2+"2")  // 32

// prefix and postFix from mdn