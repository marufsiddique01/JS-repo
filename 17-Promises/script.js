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



// Async/Await




