// *****18*** Leacture-18 ***18****
// Object De-Structuring

const course = {
    coursename: "JavaScripts",
    price:999,
    courseInstructor:"hitesh"
}

console.log(course.courseInstructor)

// other method for accessing
// const {courseInstructor} = course
const {courseInstructor:ins} = course   // replace with ins (i.e. de-structuring)
console.log(ins)

const navbar = ({company}) => {     // {company} => Object De-structuring

}

navbar(company = "hitesh")

// ---------concept of API----------
console.log("Concept of API")

/*
// Not Obj it's Json (due to obj have some name)
// this is proper JSON 
{
    name:"hitesh",
    coursename :"JavaScripts",    
    price:"free"
}
*/

// API may be in Array formate like
/*
[
    {},
    {},
    {}
]
*/

// serch for famous API on google (randomuser me api)  or => "https://randomuser.me/api/"
// JSON formater tool  => for formating the JSON file