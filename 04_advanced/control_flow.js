// if

// if (true / false ){

// }

// const isUserLoggedIn = true

// const temperature = 51

// if (temperature < 50 ){
//     console.log(("less than 50 "));
    
// }
// else{
// console.log("temperature greater than 50");
// }

// < , > . , <= , >= , == , != , === , !==


// const score = 200

// if (score > 100){
//     let power = "fly"
//     console.log(`user power: ${power}`);

// }
// console.log(`user power: ${power}`);


// const balance = 1000
// if (balance > 500) console.log("tst"), console.log("test2"); // never write this type of code it is very unreadable and immature type of code

// nesting

// if (balance < 500){
//     console.log("less than ");
    
// }else if (balance < 750){
//     console.log("less than 750");

    
// }else if (balance <900){
//     console.log("less than 900");
    
// }else{
//     console.log("less than 1200");
    
// }

const useLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (useLoggedIn && debitCard && 3==2 ){      // && is and statement
    console.log("Allow to buy courses");
}

if (loggedInFromGoogle || loggedInFromEmail){
    console.log("user logged in ");
    
}