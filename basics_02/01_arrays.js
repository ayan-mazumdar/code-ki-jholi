// const myArr = [0,1,2,3,4,5]
// const myHeroes = ["hanuman","bheem"]
// const myArr2 = new Array(1,2,3,4,5,6,7,8,9,)

// console.log(myArr[3]);
// console.log(myHeroes[0]);
// console.log(myArr2[0]);


// Array Methods 

// myArr.push (6) adds elements to the array 
// myArr.push(7)
// myArr.pop()  removes the last value from the array


// myArr.unshift(9)  inputs value in the begining of the array
// myArr.shift() removes value from the begining


// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));



// const newArr = myArr.join()  .join function converts the array into string 
// console.log(myArr);
// console.log(newArr);



// slice , splice

// console.log("A",myArr);
// const myn1 = myArr.slice(1,3) // returns a sliced value within a range  

// console.log(myn1);
// console.log("b",myArr);

// const myn2 = myArr.splice(1,3) // the range is taken out of the array and printed 
// console.log("C",myArr);
// console.log(myn2);


// ************************************************
// array video 2


const marvel = ["thor", "hulk", "ironman"]
const dc = ["superman", "batman", "flash"] 

// marvel.push(dc)
// console.log(marvel); // takes dc as a single element an it becomes a array in a array
// console.log(marvel[3][1]);

// const allhero = marvel.concat(dc) // joins two or more arrays and prints a new array
// console.log(allhero);

const newhero = [...marvel,...dc]
// console.log(newhero);


const anotherArr = [1,2,3,[4,5,6,],7,[6,7,[4,5]]]
const new_anotherArr = anotherArr.flat(Infinity)
// console.log(new_anotherArr);


// console.log(Array .isArray("ayan"))
// console.log(Array.from("ayan"));
// console.log(Array.from({name: "ayan"})); // interesting
