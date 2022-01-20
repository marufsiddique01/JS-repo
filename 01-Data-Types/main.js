// Types of number declaration.

// let age = 35;
// const gravity = 9.81;
// let mass = 80;
// const PI = 3.14;


// console.log(age, gravity, mass, PI)


// Math objects: 

const PI = Math.PI

console.log(PI)

console.log(Math.round(PI)) 
// removes the decimals values.
console.log(Math.round(9.81))
// if below .5 then previus value and if over .5 then next round number.

// Floor and  Ceilling 

console.log(Math.floor(PI))

console.log(Math.ceil(PI))

// Random Numbers

console.log(Math.random())

// 0-4
var randomNumbers = Math.floor(Math.random() * 5)
console.log(randomNumbers)
// 1-5
var randomNumber = Math.ceil(Math.random() * 5)
console.log(randomNumber)
// 0-10
var randomNum = Math.floor(Math.random() * 11)
console.log(randomNum)
