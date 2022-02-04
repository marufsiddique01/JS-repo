// scoping 

// global scoping

let a = 'JavaScript'
let b = 10

function letsLearnScoping(){
  console.log(a, b)
  if(true){
    let a = 'Python'
    let b = 25
    console.log(a, b)
  }
  console.log(a, b)
}

letsLearnScoping()
console.log(a, b)

// Local scoping

function letsLearnScope(){
  var gravity = 9.81;
  console.log(gravity)
}


// Objects -----
// -------------------------

// creating an empty object -> 
const employee = {}

// objects with value =>
const employees = {
  username: 'demo', 
  age: 45
}

console.log(employees)


const person = {
  firstName : 'Maruf',
  lastName : 'Siddique',
  age: 25,
  country: 'Bangladesh',
  city: 'Dhaka',
  skills: [
    'HTML', 'Java', 'Python', 'Design'
  ],
  isMarried: false,
}

console.log(person.lastName)
// access object items using dot (.) method.


