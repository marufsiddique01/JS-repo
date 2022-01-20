// String declaration

let space = " "
let firstName = 'Maruf'
let lastName = 'Siddique'

// String Concatenation

let fullName = firstName +space+ lastName
console.log(fullName)

console.log(`My name is ${fullName}`)

// \n = new line
// \t = tab: 8 spaces
// \\ : back slash
// \' : single quote (')
// \" : double quote (")

// String methods 

let js = 'JavaScript'
console.log(js.length)

console.log(js.toUpperCase())
console.log(js.toLowerCase())

// sting slice 

let string = 'Bangladesh'
console.log(string.substr(0,6))

// substring
let anotherCountry = "Bangladesh"
console.log(anotherCountry.substring(0,6))

// Split method
let cName = "Learn JavaScript"

console.log(cName.split(' '))
console.log(cName.split('a'))

// trim method 
let demoText = '      First day of JavaScript  '
console.log(demoText.trim(' '))

let test = 'some jibrish text'
console.log(test.replace('text', 'lifee'))


// charAt() method

let index = 'demo man with demo gun'
console.log(index.charAt(5))

// charCodeAt()
let jsdemo = '30 days of JavaScript'
console.log(jsdemo.charCodeAt(6))
// this returns the ASCII value of any letter.

// indexOf()
console.log(jsdemo.indexOf('J'))

// lastIndexOf()
console.log(jsdemo.lastIndexOf('of'))

// concat()
console.log(jsdemo.concat(' land'))

// startsWith()
console.log(jsdemo.startsWith('3'))

// endsWith()
console.log(jsdemo.endsWith('t'))

// search()
console.log(jsdemo.search('days'))

// match()
console.log(jsdemo.match('days'))

// repeat()
console.log(jsdemo.repeat(3))


