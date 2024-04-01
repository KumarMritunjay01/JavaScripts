// ****29*** Lecture-29 ***29****

// forEach loop

const coding =  ["js","rb","py","java","python","cpp"]

coding.forEach(function (item){    // fucntion fun_name() {}  -> in callBack not hold function name
    // item -> variable
    console.log(item)   // print all value
})

// By Arrow function

console.log("----Arrow Funtion----")
coding.forEach((item) =>{
    console.log(item)
})

function printMe (item ,index , arr){
    // console.log("Pass as a Refrence")
    console.log(item,index,arr)
}

coding.forEach(printMe)   // pass as a refrence

// Learn forEach loop from mdn