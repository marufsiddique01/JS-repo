//  regular expressions 

// pattern and flag 

// regular expression methods =>

// => test() method
const str = 'I love JavaScript'
const pattern = /love/

const result = pattern.test(str)
console.log(result);

// => match() method

const newResult = str.match(pattern)
console.log(newResult);

// => search() method
const newPattern = /love/g
const searchResult = str.search(newPattern)
console.log(searchResult);

// it returns the index of match

// => replace() method

const text = 'Hello, idk what im doing. but, i am learning python'
const matchedReplace = text.replace(/python|Python/,'JavaScript')
console.log(matchedReplace);


