// for loop

for (let i=0 ; i <= 10; i++){
  console.log(`looping number: ${i}`);
}

const countries = ['bangladesh', 'india', 'pakistan', 'myanmar', 'japan']
const newArr = []
for(let i=0; i < countries.length; i++){
  newArr.push(countries[i].toUpperCase())
  console.log(newArr[i])
}
console.log(newArr)
  
// while loop
let i = 1;

while(i<=5){
  console.log(i);
  i++;
}

// do while loop

let j = 1;
do{
  console.log(`goru number ${j}`)
  j++
}while(j <= 5)

// for of loop

const numbersCheck = [53,13,135,52,12,67,34,12]
for (const num of numbersCheck){
  console.log(num)
}

// Iterate 0 to 10 using for loop, do the same using while and do while loop
console.log(`Iterate 0 to 10 using for loop, do the same using while and do while loop`)
for (let z=0; z<=10; z++){
  console.log(z)
}
let x =0
while(x<=10){
  console.log(x)
  x++
}
let y = 0;
do{
  console.log(y)
  y++
}while(y<=10)


console.log(`Use for loop to iterate from 0 to 100 and print the sum of all numbers.`)

var sum = 0;
let m =0;

for(i=0; i<=100;i++){
sum = i + sum;
}

console.log(sum)
