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

