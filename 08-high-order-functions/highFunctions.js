//  Callback functions

const callback = (n) => {
  return n**2
}


function cube (callback, n){
  return callback(n) * n
}

console.log(cube(callback, 3))


// returning function
// kind of nested functions
// higher order function can return another function 

const higherOrder = n =>{
  const doSomething = m =>{
    const doWhatEver = t => {
      return 2*n + 3 * m + t;
    }
    return doWhatEver
  }
  return doSomething
}

console.log(higherOrder(2)(3)(10))

// example

const numbers = [1,2,3,4,5]
const sumArray = arr => {
  let sum = 0
  const callback = function(element){
    sum += element
  }
  arr.forEach(callback)
  return sum

}
console.log(sumArray(numbers))

// forEach is a callback function

const countries = ['Finland', 'DEnmark', 'Sweden', 'Norway', 'Iceland']
countries.forEach((element)=> console.log(element.toUpperCase()))


// test 
const mapping = ['bangladesh', 'dhaka', 'banani', 'Mohakhali']
mapping.forEach((element)=> console.log(element.toUpperCase()))

// map
// --------------------------

// const modifiedArray = arr.map(function (element, index, arr){
//   return element
// })

// console.log(modifiedArray())


const names = ['John', 'Jane', 'Mary', 'Mark', 'Bob']
const namedToUpeerCase = names.map((name) => name.toUpperCase())
console.log(namedToUpeerCase)

const userCountries = ['Finland', 'DEnmark', 'Sweden', 'Norway', 'Iceland', 'Bangladesh', 'India']
const countryCode = userCountries.map((userCountries) => userCountries.slice(0,3).toUpperCase())
console.log(countryCode)

