// if 

let num = 3
if (num > 0){
  console.log(`${num} is a positive number`)
}

// If else
let isRaining = false

if (isRaining){
  console.log('You need a rain coat')
}else{
  console.log('no need of rain coat')
}


// if else if

let a =0;

if (a>0){
  console.log(`${a} is a positive number`)
}else if(a<0){
  console.log(`${a} is a negative number`)
}else{
  console.log(`${a} is equal to Zero`)
}


// switch Case
let weather = 'sunny'
switch(weather){
  case 'rainy':
    console.log('You need a rain coat')
    break
  case 'cloudy':
    console.log('Pick up you camera and go')
    break
  case 'sunny':
    console.log('Use a umbrella')
    break
  default:
    console.log('no need for rain coat.')
}


// Ternary operators 
let isFriday = true
isFriday?console.log('Today is Friday 🤩😎'):console.log('Today is not Friday 😥')
