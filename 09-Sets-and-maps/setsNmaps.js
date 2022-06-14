// Set
// Set is a collection of elements. Set can only contains unique elements.

// Creating an empty set

const companiesss = new Set()
console.log(companiesss)

// Creating set from array

const demoArray = ['Facebook', 'Usershub', 'FoodBook', 'Foodpanda', 'Blah Blah']

const demoSet = new Set(demoArray)
console.log(demoSet)

// Set is an iterable object and we can iterate through each elements.

// const languages = [
//   'English',
//   'Finnish',
//   'English',
//   'French',
//   'Spanish',
//   'English',
//   'French',
// ]

// const setOfLanguages = new Set(languages)

// for (const language of setOfLanguages) {
//   console.log(language)
// }


// Adding an element to a set
const companies = new Set() // creating an empty set
console.log(companies.size) // 0

companies.add('Google') // add element to the set
companies.add('Facebook')
companies.add('Amazon')
companies.add('Oracle')
companies.add('Microsoft')
console.log(companies.size) // 5 elements in the set
console.log(companies)

// Deleting an element a set
console.log(companies.delete('Google'))
console.log(companies.size) // 4 elements left in the set
console.log(companies)

// Checking an element in the set
console.log(companies.has('Apple')) // false
console.log(companies.has('Facebook')) // true

// Clearing the set
companies.clear()
console.log(companies)

// Real example of how to use sets

const languages = [
  'English',
  'Finnish',
  'English',
  'French',
  'Spanish',
  'English',
  'French',
]
const langSet = new Set(languages)
console.log(langSet) // Set(4) {"English", "Finnish", "French", "Spanish"}
console.log(langSet.size) // 4

const counts = []
const count = {}

for (const l of langSet) {
  const filteredLang = languages.filter((lng) => lng === l)
  console.log(filteredLang) // ["English", "English", "English"]
  counts.push({ lang: l, count: filteredLang.length })
}
console.log(counts)

// Other use case of set. For instance to count unique item in an array.
const numbers = [5, 3, 2, 5, 5, 9, 4, 5]
const setOfNumbers = new Set(numbers)

console.log(setOfNumbers)
