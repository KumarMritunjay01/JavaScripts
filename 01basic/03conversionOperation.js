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