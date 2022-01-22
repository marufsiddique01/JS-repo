// Create an array

// ->> using array constructor 

const arrayConstructor = Array()
console.log(arrayConstructor)

// -> using square brackets 

const arr = []
console.log(arr)

// Create arrays with values 

const numbers = [0,4.32,24,53,12]
console.log(numbers)


// different data types
const diffArr = ['Maruf', 250, true, {country: 'Bangladesh', city: 'Dhaka'}]
console.log(diffArr)


// Array split
let jsFrameworks = ['ReactJS', 'ExpressJS', 'Angular']
console.log(jsFrameworks.slice(1)) 

// array length
console.log(jsFrameworks.length) 
// array last index
console.log(jsFrameworks[jsFrameworks.length-1])

// Modifying array elements
const numberMod = [1,2,3,4,5,6,7,8]
numberMod[2]=89
console.log(numberMod)

// Methods to manipulate array

// array constructor 
const eightDigitArray = Array(8)
console.log(eightDigitArray)


// fill array with static value
eightDigitArray.fill('X')
console.log(eightDigitArray)

// Array concatenating 
const firstBucket = ['Mango', 'Orange', 'Strawberry']
const secondBucket = ['Grape', 'Lemon', 'Banana']

const mixedBucket = firstBucket.concat(secondBucket)
console.log(mixedBucket)

// array length 
const lengthTesting = [1,2,3,4,5,3]
console.log(lengthTesting.length)

// getting index of element in an array
console.log(lengthTesting.indexOf(5))
console.log(lengthTesting.indexOf(2))

// last index of an array
console.log(lengthTesting.lastIndexOf(3))

// checking and element in the array
console.log(lengthTesting.includes(4))

// Joining array elements

const names = ['Maruf', 'Siddique', 'Auditi']
console.log(names.join(' + '))


// array slice
const spArray = [1,2,3,4,5,6,7,8,9]
spArray.splice(6,7)
console.log(spArray)

// adding item in the array using push method

spArray.push(69)
console.log(spArray)

// removing item in the array using pop method
spArray.pop()
console.log(spArray)

// pop - removes from the end
// shift - removed from the front
spArray.shift()
console.log(spArray)

// Add an element in the front
spArray.unshift(69)
console.log(spArray)

// reversing an array orderly
spArray.reverse()
console.log(spArray)

// sorting in the array
spArray.sort()
console.log(spArray)

const cityNames = ['Dhaka','Cumilla','Alapur','Sirajganj']
cityNames.sort()
console.log(cityNames)
cityNames.reverse()
console.log(cityNames)

