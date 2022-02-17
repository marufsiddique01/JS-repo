// destructing arrays => 


const numbers = [ 1,2,3]
let [numOne, numTwo, numThree] = numbers

console.log(numOne)


// Destructing during iteration

const countries = [['Finland','Helsinki'],['Sweden','Stockholm'],['Bangladesh','Dhaka'],['Norway', 'Oslo']]

for(const [country, city] of countries){
console.log(country, city)
}


const fullStack = [['HTML','CSS','JS','React'],['Node','Express','MongoDB']]
for(const [first, second, third] of fullStack){
console.log(first, second, third)
}



// Destructing Object

const rectangular = {
width: 20,
height: 10,
area: 200
}

let {width, height, area, perimeter} = rectangular

console.log(width, height, area, perimeter)   // missing object element will return undefined


