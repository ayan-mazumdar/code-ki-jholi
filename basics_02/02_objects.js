// // singleton
// // Object.create // this is known as singelton method

// // object literals

const mySym= Symbol("key1")

const JsUser ={
    name: "ayan",
    "full name": "ayan mazumdar",
    [mySym]:"mykey1",
    age: 20 ,
//     location: "durgapur",
    email: "ayan@google.com",
    isLoggedIn: false
}
//  accesing the value by the below method is correct but not good
// console.log(JsUser.email);
// // the below wrotten is a better way of accesing the value
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email= "ayan@abcd"
// Object.freeze(JsUser)
JsUser.email= "ayan@microsfot"

console.log(JsUser);


JsUser.greeting= function(){
    console.log("Hello my frands")
}
JsUser.greeting2= function(){
    console.log(`Hello my frands,this is ${this.name}`)
}
console.log(JsUser.greeting());
console.log(JsUser.greeting2());


// ******************************************************

//  const course = {
//     coursename: "js in hindi",
//     price: "999",
//     instructor: "hitesh"
//  }

// //  course.instructor
//  const {instructor:inst} = course 
//  const {price:pr} = course // destucturing objects

//  console.log(inst);
//  console.log(pr);


// //  {
// //     "name": "ayan"
// //     "course": "js in hindi"
// //     "price": "free"
// //  }

// [
    
// ]