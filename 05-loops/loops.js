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
  
