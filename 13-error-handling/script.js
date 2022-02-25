// 

// try catch block

try{
let name = " Maruf";
let fullname = name + ' ' + nameInitials;
}catch(err){
console.log(err);
}
// ReferenceError: nameInitials is not defined
// at script.js:7:29

// try catch finallt block

try{
  let sum = random + 5
}catch(e){
console.log(e.message);
}finally{
  console.log('define ');
}

// ReferenceError: random is not defined
//     at script.js:17:13
//      define 


// throw -> allows custom error messages 

const throwErrorExampleFun = () => {
let message
let x = prompt('Enter a number')
try{
if (x== '') throw 'empty'
if(isNaN(x)) throw 'not a number'
x = Number(x)
if (x<5) throw 'too low'
if (x>10) throw 'too high'
}catch(e){
  console.log(e);
}
}

throwErrorExampleFun()

// Type of errors => 
// 1) ReferenceError
// 2) SyntaxError
// 3) TypeError
