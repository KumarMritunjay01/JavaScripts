 // *****15*** Lecture-15 ***15****
 // Array part-2

 const marvel_heros = ["thor","ironman","spiderman"]
 const dc_heros = ["superman","flash","batman"]

 marvel_heros.push(dc_heros)  //  [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]  -> 4 element and 4th ele.have 3 ele.
 console.log(marvel_heros)
 console.log(marvel_heros.length) // 4 -> dc heros calculated as one element
 console.log(marvel_heros[3][1])  // flash

 // concat and sprad optrations
 const allHeros = marvel_heros.concat(dc_heros)
 console.log(allHeros)  // [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ] => Return new array
 console.log(allHeros.length) // 7

 // sprad operations

 console.log("After sprad operations")
 const all_newHeros = [...marvel_heros,...dc_heros]  // sprade all array elements
 console.log(all_newHeros)
 console.log(all_newHeros.length)

 const anotherArr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
 const realAnotherArr = anotherArr.flat(Infinity)  // flat is use for spard all array ele. 
 console.log("Real Another array", realAnotherArr)

 // Dermine the given is array or not or cunvert it into array.
console.log(Array.isArray("Mritunjay"))  // false it's not an array

// convert into array
console.log(Array.from("Mritunjay"))  // from is use to cunvert into Array (Any thing like string, objects , etc)
console.log(Array.from({name:"Kumar"}))  // []  -> intresting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))  //  [ 100, 200, 300 ]

// Learn [isArray,from , of] -> mdn