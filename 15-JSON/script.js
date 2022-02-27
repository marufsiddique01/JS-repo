
// JSON 
// JSON is a JavaScript Object Notation.
// JSON is a lightweight data-interchange format.
// JSON is a text format.
// JSON is a data format.
// JSON is a data-interchange format.
// JSON is used to exchange data between programs.
// JSON is easier to use than XML.

const usersOfAPI = {
  "users": [
    {
      "name": "John",
      "age": 30,
      "email": "test@test.com"
    },
    {
      "name": "Jane",
      "age": 25,
      "email": "demo@demo.com"
    }
  ]
}

console.log(usersOfAPI);

const userObject = JSON.parse(usersOfAPI);
console.log(userObject);
