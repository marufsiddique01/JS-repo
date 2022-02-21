// destructing arrays => 


const numbers = [1, 2, 3]
let [numOne, numTwo, numThree] = numbers

console.log(numOne)


// Destructing during iteration

const countries = [['Finland', 'Helsinki'], ['Sweden', 'Stockholm'], ['Bangladesh', 'Dhaka'], ['Norway', 'Oslo']]

for (const [country, city] of countries) {
  console.log(country, city)
}


const fullStack = [['HTML', 'CSS', 'JS', 'React'], ['Node', 'Express', 'MongoDB']]
for (const [first, second, third] of fullStack) {
  console.log(first, second, third)
}



// Destructing Object

const rectangular = {
  width: 20,
  height: 10,
  area: 200
}

let { width, height, area, perimeter } = rectangular

console.log(width, height, area, perimeter)   // missing object element will return undefined

// object parameter without destructing 

// => without destructing 
const rect = {
  width: 10,
  height: 10,
}

const calculatePerimeter = rectangle => {
  return 2 * (rectangle.width + rectangle.height)
}

console.log(calculatePerimeter(rect));

// => object parameter with destructuring 

const calculatePerimeterW = ({width, height}) => {
  return 2 * (width + height)
}

console.log(calculatePerimeterW(rect));

// Destructuring object during iteration

const todoList = [
  {
    task: 'JS 30 days bootcamp',
    startTime: '11 Jan 2022',
    completed: false,
  },
  {
    task: 'JS vanilla 30 projects',
    startTime: 'in future',
    completed: 'pending'
  }
]

for (const {task, startTime, completed} of todoList){
  console.log(task, startTime, completed);
}

// =>>=>>=>=>>=>>=>>=>==>=>>

// spread / REST operator


