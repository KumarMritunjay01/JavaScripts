// ****21*** Lecture-21 ***21****
/*
let a =10
const b = 20
var c =30

console.log(a,b,c)
*/

var c = 300   // globale varible/scope
// scopes
if(true){
    let a =10   // this is scope (i.e. variable is accesible only in this scope -> {} brashes)
    const b = 20
    var c =30
}

// console.log(c)   // var is accessible out of scope (this is get problem if c is defined at globally)


// ****22*** Lecture-22 ***22****
// Nasted scope

// child function access the parent funtion variable
function one () {
    const username = "Mritunjay"
    
    function two () {
        const website = "YouTube"
        console.log("username")
    }
    // console.log(website)  // not accesible
    two()
}
one()
