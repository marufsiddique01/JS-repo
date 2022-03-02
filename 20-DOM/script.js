// Document Object Model (DOM) - Day 1
// Getting Element
// Getting elements by tag name
// => getElementsByTagName()

const allH1 = document.getElementsByTagName('h1')
console.log(allH1);
console.log(allH1.length);

for (let i = 0; i < allH1.length; i++){
console.log(allH1[i]);
}

// Getting elements by class name
// => getElementsByClassName()

const allTitles = document.getElementsByClassName('title')
console.log(allTitles);

for (let i = 0; i < allTitles.length; i++){
  console.log(allTitles[i]);
  }

// Getting an element by id
// => getElementById()

const firstTitle = document.getElementById('first-title')
console.log(firstTitle);

// Getting elements by using querySelector methods
// => document.querySelector()
let firstTitleTag = document.querySelector('h1') // select the first available h1 element
let firstTitleID = document.querySelector('#first-title') // select id with first-title
let firstTitleClass = document.querySelector('.title') // select the first available element with class title

// => document.querySelectorAll()
const allTitlesFromTag = document.querySelectorAll('h1') //  selects all the available h1 elements in the page

console.log(allTitlesFromTag.length) // 4
for (let i = 0; i < allTitlesFromTag.length; i++) {
  console.log(allTitlesFromTag[i])
}

allTitlesFromTag.forEach(title => console.log(title))
// const allTitlesFromTag = document.querySelectorAll('.title') // the same goes for selecting using class

// Adding attribute
// Common HTML attributes: id, class, src, style, href,disabled, title, alt. Lets add id and class for the fourth title.

// const titles = document.querySelectorAll('h1')
// titles[3].className = 'title'
// titles[3].id = 'fourth-title'
// Adding attribute using setAttribute
// const titles = document.querySelectorAll('h1')
// console.log(titles);
// titles[3].setAttribute('class', 'title')
// titles[3].setAttribute('id', 'fourth-title')

// Adding attribute without setAttribute
//another way to setting an attribute
// titles[3].className = 'title'
// titles[3].id = 'fourth-title'


// Adding class using classList
//another way to setting an attribute: append the class, doesn't over ride
// titles[3].classList.add('title', 'header-title')

// Removing class using remove
//another way to setting an attribute: append the class, doesn't over ride
// titles[3].classList.remove('title', 'header-title')

// Adding Text to HTML element
// const titles = document.querySelectorAll('h1')
// titles[2].textContent = 'Fourth Title'
// console.log(titles[2].textContent);
// Adding Text content using textContent
// Adding Text Content using innerHTML
// Text Content
// Inner HTML
// Adding style
// Adding Style Color
// Adding Style Background Color
// Adding Style Font Size
