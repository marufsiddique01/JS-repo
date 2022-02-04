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
