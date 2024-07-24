// converting a piece of code into a package so that it can be 
// used anywhere and repeteadly

// function addTwoNumbers(number1, number2 ) // here (number1 and number2) is called parameters
// {
//     console.log(number1 + number2);
// }


// addTwoNumbers(3,4)
// addTwoNumbers(3,"4") // results comes out to be 34 as it considers "4" to be a string 
// addTwoNumbers(3,"a") // results comes out to be 3a 
// addTwoNumbers(3,"null") // resilt is 3
// it gives output beacuse we did not check the input of a specific datatype

//  In java script we can store the result in another variable as well
// const result = addTwoNumbers(3,5)

// console.log("result: ",result);  // the result comes out to be undefined
// So to return a value here are some types of methods
// // 1>
// function addTwoNumbers(number1, number2 ) 
// {
//     let result = number1 + number2
//     return result
//     console.log(ayan); // by deafault its a nature of function that after return no other console log will be executed

// }
// console.log("result: ",result);
// // 2>
// function addTwoNumbers(number1, number2 ) // here (number1 and number2) is called parameters
// {
//    return number1 + number2 // directly return the value of the funtion without the need to declair another variable
// }
// console.log("result: ",result);

// function loginUserMessage(username){
//     return `${username} just logged in `
// }
// console.log(loginUserMessage("ayan") )

// function loginUserMessage(username){
//     if (username === undefined){
//         console.log("Please enter a username")
//         return

//     }
//     return `${username} just logged in `
// }
// console.log(loginUserMessage() )

// function loginUserMessage(username){
//     if (!username){
//         console.log("Please enter a username")
//         return

//     }
//     return `${username} just logged in `
// }
// console.log(loginUserMessage("ayan") )

// fuction for a shopping cart scenario

// function calculateCartPrice(...num1) {
//     return num1
    
// }

// console.log(calculateCartPrice(200,400,500));

// const user = {
//     username: "ayan",
// //     price: 199
// // }

// function handleObject(anyobject){
//     console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
// }

// // handleObject(user)
// handleObject({
//     username: "sam",
//     price: 300
// })


const myNewArray = [200,300,400,500,600]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
