// const name = "ayan "
// const skilllevel = 3

// console.log(name + skilllevel+ " value");
// this is an old form of systax and is not preferred in the industry 

//  instead use `` {back ticks} .... what it does is string interpolation 
//  in simple words we make placeholders and we can inject any sort of value in there


// syntax

// console.log(`hello my name is ${name} and my skill level is @{skilllevel} `);


// // declaring a string
 const discord = new String('saint-reaper')

// console.log(discord[0]);
// console.log(discord.__proto__);


//  using a function as example  
console.log(discord.length);
console.log(discord.toUpperCase());
console.log(discord.charAt(2));
console.log(discord.indexOf('r'));

// write a article on the methods of string

const newString = discord.substring(0,4)
console.log(newString );

const anotherString = discord.slice(-6 , 8)
console.log(anotherString);

const onemoreString = "    ayan    "

console.log(onemoreString);
console.log(onemoreString.trim()); //removes extra spaaces  
