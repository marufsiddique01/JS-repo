// what is class

// define a class
// requies a class keyword => 

// class Person{

// }

// Class instantiation
// it means to create an object using the class

class Person {

}

const person = new Person()
console.log(person);


// Class Constructor

class Pets {
  constructor(name1, name2) {
    console.log(this);
    this.name1 = name1
    this.name2 = name2
  }
}

const pet = new Pets()
console.log(pet);


const petType2 = new Pets('Tom', 'Jerry')
console.log(petType2);


// default values with constructor

class Student {
  constructor(
    firstName = 'Maruf',
    lastName = 'Siddique',
    age = 25
  ) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
  }
}

const student1 = new Student()  // this will take the default value
const student2 = new Student('Test', 'Demo', 23) // passing values to revoke default data

console.log(student1);
console.log(student2);

// class methods
// Methods are javascript functions inside the class

class CityInformation{
constructor(cityName, country, age){
  this.cityName = cityName
  this.country = country
  this.age = age
}
getMoreInformation(){
const info = this.cityName + " is the capital of " + this.country
return info
}
}


const city1 = new CityInformation('Dhaka', 'Bangladesh', 400)

console.log(city1);
console.log(city1.getMoreInformation());


// properties with initial value

// getter

// setter

// Static method

// ===>>
// Inheritance

// overriding methods
