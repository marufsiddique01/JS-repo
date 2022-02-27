// console.log("yesssss");

// setting something in the local storage
localStorage.setItem('firstName', 'Maruf')
localStorage.setItem('lastName', 'Siddique')
// getting something from the local storage
const dataFromLocalStorage = localStorage.getItem('firstName')
console.log(dataFromLocalStorage);

// removing something from the local storage
console.log(localStorage);
localStorage.removeItem('firstName')
console.log(localStorage);
// clearing something from the local storage
localStorage.clear()
console.log(localStorage);

