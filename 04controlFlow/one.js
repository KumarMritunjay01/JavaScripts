// ****26*** Lectture-26 ***26****

// if-else control flow

const isUserloggedIn = true
if(isUserloggedIn){
    console.log("User is logged In")
}
else {
    console.log("Not logged In")
}

// Comprasion Operators
/*
< , > , <= ,>= , == , != , && (and) ,||(or)
=== , !== (chake data types also)

// var keyword is use globaly
*/

const balance = 100

if(balance<500) console.log("test")   // Implecite scope


/*
if(...){...}
else if (...){....}
else if(...){...}
else{....}
*/

// ------SWITCH KEYWORD -------
/*
 -> Syntax
 switch (key){
    case value:
        break;
    default:
        break;
 }
 */

// Example of switch keyword
console.log("-----Switch keyword------")

const month = 3;

// const month2 = "march"
// switch(month2){         // for string
//     case "jan":
//         ....
//     case "fab":
//         ....
//     case "March":
//         ....
// }
switch(month){
    case 1:
        console.log("Jan")
        break;
    case 2:
        console.log("Fab")
        break;
    case 3:
        console.log("March")
        break;
    default:
        console.log("month not match")
    
}

