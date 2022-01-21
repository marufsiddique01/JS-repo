// undefined value

let firstName 
console.log(firstName)

// null value
let empty = null
console.log(empty)

// ------Operators-----
// + - * / % **

// -----Compararison Operators 
// == === != > < <= <= 

// Logical operators 
// && || 

// Increment operators 
// ++ 

// Decrement Operators
// -- 

// Ternary Operators
// condition ? true : false


// Window method
// alert('welcome to js')

// windows prompt()
// prompt('input text', 'optional text')

// let number = prompt('Enter Number', 'Input number here')
// console.log(number)

// date object
// const now = new Date()
// console.log(now)

// getting full year
const fullYear = new Date()
console.log(fullYear.getFullYear())

// getting months
console.log(fullYear.getMonth())

//get date
console.log(fullYear.getDate())

// getting day
console.log(fullYear.getDay())

// Getting time
console.log(fullYear.getTime())

// making the time human readable 

const now = new Date()

const year = now.getFullYear()
const month = now.getMonth()
const date = now.getDate()
const hours = now.getHours()
const minutes = now.getMinutes()

console.log(`${date}/${month}/${year} ${hours}:${minutes}`)
