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

class CityInformation {
  constructor(cityName, country, age) {
    this.cityName = cityName
    this.country = country
    this.age = age
  }
  getMoreInformation() {
    const info = this.cityName + " is the capital of " + this.country
    return info
  }
}


const city1 = new CityInformation('Dhaka', 'Bangladesh', 400)

console.log(city1);
console.log(city1.getMoreInformation());


// properties with initial value
class GameDetails {
  constructor(gameName, releaseDate) {
    this.gameName = gameName
    this.releaseDate = releaseDate
    this.score = 0
    this.type = ['Shooting', 'FPS', 'Online']
  }
}

const game1 = new GameDetails('CSGO', '2007')
console.log(game1);
console.log(game1.score, game1.type);

// getter
// to get values from an object

class Officeget {
  constructor(officeName, location, employeeCount, type) {
    this.officeName = officeName
    this.location = location
    this.employeeCount = employeeCount
    this.type = type
  }
  get getOfficeName() {
    return this.officeName;
  }
  get getLocation() {
    return this.location
  }
  get getEmployeeCount() {
    return this.employeeCount
  }
}

const office1 = new Officeget('OrangeBD', 'Dhaka', 120, 'IT Company')

console.log(office1);
console.log(office1.getOfficeName);

// setter

class Officeset {
  constructor(officeName, location, employeeCount, type) {
    this.officeName = officeName
    this.location = location
    this.employeeCount = employeeCount
    this.score = 0
    this.type = []
  }
  get getOfficeName() {
    return this.officeName;
  }
  get getLocation() {
    return this.location
  }
  get getEmployeeCount() {
    return this.employeeCount
  }

  set setScore(score) {
    this.score += score
  }

  set setType(type) {
    this.type.push(type)
  }

}

const office2 = new Officeset('OrangeBD', 'Dhaka', 120, 'IT Company')
console.log(office2);

office2.setScore = 2
office2.setType = 'Offline'
office2.setType = 'Hybrid'

console.log(office2);


// Static method

class Doggos {
  constructor(name, age, country, city) {
    this.name = name
    this.age = age
    this.country = country
    this.city = city
    this.skill = []

  }
  get getSkills() {
    return this.skills
  }
  set setSkill(skill) {
    this.skills.push(skill)
  }
  static favoriteSkill(skill) {
    const skills = ['Dancing', 'Walking', 'Cudling', 'Racing', 'Jumping']
    const index = Math.floor(Math.random() * skills.length)
    return skills[index]
  }
}

console.log(Doggos.favoriteSkill());


// ===>>
// Inheritance
// Using inheritance we can access all the properties and the methods of the parent class. This reduces repetition of code. If you remember, we have a Person parent class and we will create children from it. Our children class could be student, teach etc.

// creating pet doggos class from doggos class
class PetDoggos extends Doggos {
  saySomething() {
    console.log('I am a child of the Doggos class')
  }


}

const d1 = new PetDoggos('Bull', '23', 'Bangladesh', 'Dhaka')
console.log(d1);
console.log(d1.age);
console.log(d1.saySomething());


// overriding methods
