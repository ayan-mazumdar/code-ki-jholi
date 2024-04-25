// stack is used in primitive data type 
// when a variable is declared in stack we a get a copy of 
// Heap is used in Non primitive data types
// anything declared in Heap it gives a reference ... any changes that occour , it occurs in the original value


let myfullname = "ayanmazumdar"


let anothername = myfullname 
anothername = "babypanda"

console.log(myfullname);
console.log(anothername);

let userOne= {
    email: "user@google.com",
    upi: "user@ybl"
}

let usertwo = userOne

usertwo.email = "ayan@google.com"

console.log(userOne);
console.log( usertwo);