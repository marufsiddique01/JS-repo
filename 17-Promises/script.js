// Promise

// Callback
const doSomething = callback => {
  setTimeout(() => {
    const skills = ['HTML', 'CSS', 'JS']
    callback('It did not go well', skills)
  }, 2000)
}

const callback = (err, result) => {
  if (err) {
    return console.log(err)
  }
  return console.log(result)
}

doSomething(callback)


// Promise Constructor

// syntax
const promise = new Promise((resolve, reject) => {
  resolve('success')
  reject('failure')
})


// Example 
const doPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const skills = ['JS', 'Python']
    if (skills.length > 0) {
      resolve(skills)
    } else {
      reject('Something is wrong')
    }
  })
})

doPromise.then(result => {
  console.log(result);
}).catch(error => console.log(error))

// Fetch API

const url = 'https://restcountries.com/v2/all' // countries api
fetch(url)
  .then(response => response.json()) // accessing the API data as JSON
  .then(data => {
    // getting the data
    console.log(data)
  })
  .catch(error => console.error(error)) // handling error if something wrong happens


const catsAPI = 'https://api.thecatapi.com/v1/breeds'

fetch(catsAPI).then(res => res.json()).then(data => {
  console.log(data);
}).catch(error => console.log(error))

// Async/Await
// Async and await is an elegant way to handle promises. It is easy to understand and it clean to write.
// The word async in front of a function means that function will return a promise. The above square function instead of a value it returns a promise.


// const square = async function (n) {
//   return n * n
// }
// const value = await square(2)
// console.log(value)


// Using promises ->> on the value of country api
fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })
  .catch(error => console.error(error))


  // using async await -> on the value of country api
  
  const fetchData = async () => {
    try {
      // console.log('===== async and await')
      const response = await fetch(url)
      const countries = await response.json()
      console.log(countries)
    } catch (err) {
      console.error(err)
    }
  }
  // console.log('===== async and await')
  fetchData()
