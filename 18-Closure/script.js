// Closure
// JavaScript allows writing function inside an outer function. We can write as many inner functions as we want. If inner function access the variables of outer function then it is called closure.


// function outerFunction() {
//   let count = 0;
//   function innerFunction() {
//     count++
//     return count
//   }
//   return innerFunction
// }

// const innerFunc = outerFunction()

// console.log(innerFunc());
// console.log(innerFunc());
// console.log(innerFunc());

// multiple inner functions

function outerFunction() {
  let count = 0;
  function plusOne() {
      count++
      return count
  }
  function minusOne() {
      count--
      return count
  }

  return {
      plusOne:plusOne(),
      minusOne:minusOne()
  }
}
const innerFuncs = outerFunction()

console.log(innerFuncs.plusOne)
console.log(innerFuncs.minusOne)
