// function declaration

// easy way >>>> with out any parameter
function functionName(){
// code goes here
console.log('printing this from the belly of the function')
}

// calling the function >>
functionName();

// function without parameter,  a function which make a number square
function areaOfSquare(){
let lenght = 10;
let sq = lenght*lenght;
console.log(sq)
}

areaOfSquare()

// Function returning value

// string concate function 

function joinString(){

  let mgs1 = 'Hello'
  let mgs2 = 'World'

  let finalMgs = mgs1 + " " + mgs2

  return finalMgs;
}

let wwmgs = joinString()
console.log(wwmgs)


// Function with parameters

// area calculator

function areaCalc(len, wid){

let area = len * wid;
return area;
}

console.log(areaCalc(23,12))
let areaOfLand = areaCalc(5, 20)
console.log(areaOfLand)

// Function with many parameters
// this function takes array as a parameter and sum up the numbers in the array
function sumArrayValues(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

const numbers = [1, 2, 3, 4, 5];
    //calling a function
console.log(sumArrayValues(numbers));


// ----------------------------------------------------------
// Arrow function
// -----------Regular function
function square(n){
  return n*n;
}

console.log(square(6));

// arrow function with return or multiple line of execution line
const squareValue = n => {
  return n*n;
}
console.log(squareValue(7));

// arrow function with one line of execution line
const squareArrowFunc = n => n*n;
console.log(squareArrowFunc(8));


// ------------------=-==

const changeToUpperCase = arr => {
  const newArr = []
  for (const elements of arr){
    newArr.push(elements.toUpperCase())
  }
  return newArr;
}


const names = ['maruf', 'auditi', 'siddique', 'sargam']
console.log(changeToUpperCase(names))


// birthday calculator

const calculateBirthday = (nowYear,birthday) => {
  let age = nowYear - birthday;
  return age;
}

const now = new Date()

currentDate = now.getFullYear()
console.log(calculateBirthday(currentDate , 1997))

// bmi calculator 

const bmiCalculator = (weight, height) =>{

var bmi = weight/(height * height)
return bmi; 
// console.log(bmi)

}

// prompt()

let wei = prompt('Enter Weight', 'in kg')
let hei = prompt('Enter Height', 'in meter')

var outputBmi = bmiCalculator(wei,hei)
console.log(outputBmi)


if (outputBmi > 18.5){
  console.log('Under Weight')
}else if(outputBmi<18.5 && outputBmi > 24.9){
  console.log('Normal Weight')
}else if(outputBmi < 25 && outputBmi >29.9){
console.log('Over weight')
}else if(outputBmi> 30){
  console.log('Obese');
}
// console.log(bmiCalculator(80,1.6));

// print array function
const printArray = arr =>{
  
for(var items of arr){
console.log(items)
}
}

const dummyArray = ['Jamaika', 'Zimp', 'Objs', 'Test 1']

printArray(dummyArray)
