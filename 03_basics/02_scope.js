
{}  // curly braces is alsmost considered scope in every programming language

// if (true){
//   let  a = 10
//   const b = 20 
//   var c = 30 
// }


// console.log(a);
// console.log(b);
// console.log(c);


// nested scope ->

function one(){
  const username = "hitesh"

  function two (){
    const website = "youtube"
    console.log(username);
  }
  // console.log(webiste);

  two()

}

one()
