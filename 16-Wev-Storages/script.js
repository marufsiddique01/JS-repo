// console.log("yesssss");

// setting something in the local storage
localStorage.setItem('firstName', 'Maruf')

// getting something from the local storage
const dataFromLocalStorage = localStorage.getItem('firstName')
console.log(dataFromLocalStorage);

localStorage.clear()
console.log(localStorage.getItem('firstName'));

