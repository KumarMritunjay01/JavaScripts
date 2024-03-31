// ****24*** Lecture-24 ***24****
//(IIFE) => Immediately Invoked Function Expressions
// whose function is emideatly excuted then that is clled "IIFE"

/*
function code () {
    console.log(`DB CONNECTED`)
}
code()

*/

// Other method for define and call function
(function code () {
    // named IIFE
    console.log(`DB CONNECTED`)
}) ();     // ; is must other wise if defined other IIFE then found error.

// in arroa function

( () => {
    // Simple or unnamed IIFE
    console.log("Hello Arrow")
}) ()