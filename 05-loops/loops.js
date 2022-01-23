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


