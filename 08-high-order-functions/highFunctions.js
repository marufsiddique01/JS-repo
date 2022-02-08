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

// --------------------------
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

// --------------------------
// filter
// Filter: Filter out items which full fill filtering conditions and return a new array.
// --------------------------

const countriesThatHaveLandInIt = userCountries.filter((userCountries)=> userCountries.endsWith('way'))
console.log(countriesThatHaveLandInIt)

const scores = [
  { name: 'Asabeneh', score: 95 },
   { name: 'Lidiya', score: 98 },
  { name: 'Mathias', score: 80 },
  { name: 'Elias', score: 50 },
  { name: 'Martha', score: 85 },
  { name: 'John', score: 100 },
]

const scoresGreaterThanEighty = scores.filter((scores)=> scores.score >80)

console.log(scoresGreaterThanEighty[0].name)

const studentName = scoresGreaterThanEighty.map((scoresGreaterThanEighty) => scoresGreaterThanEighty.name)
console.log(studentName)


// --------------------------
// reduce
// reduce: Reduce takes a callback function. The call back function takes accumulator, current, and optional initial value as a parameter and returns a single value. It is a good practice to define an initial value for the accumulator value. If we do not specify this parameter, by default accumulator will get array first value. If our array is an empty array, then Javascript will throw an error.
//

const numbersToSum = [101, 201, 301, 401, 2, -6, 14, 1237182]

const sum = numbersToSum.reduce((acc, cur) => acc + cur, 0)

console.log(sum)

// every
// every: Check if all the elements are similar in one aspect. It returns boolean
// =================

const namedPerson = ['Maruf', 'Samanta', 'Murad']

const allTheNamesAreString = namedPerson.every(
(names) => typeof names === 'string'
)

console.log(allTheNamesAreString)

const bools = [true, true, true, true]
const areAllTrue = bools.every((b) => b !== true) // Are all true? 

console.log(areAllTrue) // true


// find
// find: Return the first element which satisfies the condition

const allAgedPeople = [24,22,18,19,21,22,42]

const age = allAgedPeople.find((age) => age < 20)
console.log(age)

const namesew = ['Asabeneh', 'Mathiads', 'Elias', 'Brook']
const result = namesew.find((name) => name.length > 7)
console.log(result)
