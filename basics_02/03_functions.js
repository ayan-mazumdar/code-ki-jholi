
function sayMyName(){
    console.log("a");
    console.log("y");
    console.log("a");
    console.log("n");
}

// sayMyName()

// function addTwoNumbers(number1,number2){  // this is known as parameters

//     console.log(number1 + number2);
// }
function addTwoNumbers(number1,number2){  // this is known as parameters

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3,5)  // this is known as arguments

// console.log("Result: ",result );

function loginusermsg(username = "sam"){
    // if(username === undefined ){
    //     console.log("please enter a username");
    //     return
    // }
    if(!username){
        console.log("please enter a username");
        return
    }
    return`${username} just logged in `
}
// console.log(loginusermsg("Ayan"))
// console.log(loginusermsg())


function calculateCartPrice(val1, val2,  ...num1){  // "..." is rest opertaor or spread operator
    return num1

}

// console.log(calculateCartPrice(200,400,500,2000,15000));

const user = {
    username: "ayan",
    price: 200
}

function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleobject(user)
handleobject({
    username: "sam",
    price: 900
})
