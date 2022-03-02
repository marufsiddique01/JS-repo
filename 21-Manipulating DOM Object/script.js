console.log("Manipulating DOM Object");


// DOM(Document Object Model)-Day 2

// Creating an Element

// let title = document.createElement('h1')
// title.className = 'title'
// title.style.fontSize = '24px'
// title.textContent = 'Creating HTML element DOM Day 2'
// console.log(title);

// // syntax
// document.createElement('tagname')


// Creating elements

let title
for (let i = 0; i < 3; i++) {
  title = document.createElement('h1')
  title.className = 'title'
  title.style.fontSize = '24px'
  title.textContent = i
  console.log(title)
}

// Appending child to a parent element
// Removing a child element from a parent node
