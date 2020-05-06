//repl link: https://repl.it/@TeamEdDM/javascript-5-lecture
//Javascript 5

//Default
//Console log the this keyword to show the default context

//Implicit
// INVOKER OBJECT
// "this" refers to the object where the method is located (the parent object)

function cl(toLog) {
  console.log(toLog)
}

function introduceSelf() {
  if (this !== window) {
    console.log("this:", this)
  } else {
    console.log("this equals the window")
  }
}

//   console.log(this)

//   introduceSelf()

let user = {
  name: "name",
  age: 24,
  favoriteColor: "blue",
  introduceSelf: introduceSelf,
  subUser: {
    name: "SUBUSER",
    age: 22,
    favoriteColor: "red",
    introduceSelf: introduceSelf,
  },
}

//   user.introduceSelf()

//   user.subUser.introduceSelf()

const wallE = {
  name: "Wall-E",
  age: 1000,
  //Write a sayHello method that will return the name of the robot.  Invoke it below
  sayHello: function () {
    return this.name
  },
}

const eve = {
  name: "Eve",
  age: 1000,
  sayHello: function () {
    return this.name
  },
}

//   console.log(wallE.sayHello())
//   cl(eve.sayHello())

//-----------------------------------------------------------------------------------

//Explicit
// .call(OBJECT GETTING CONTEXT, arg1, arg2, etc...)
// CALL COMMA
// .apply(OBJECT GETTING CONTEXT, [argument(s) as array])
// APPLY ARRAY
// .bind(OBJECT GETTING CONTEXT, arg1, arg2, etc...)
// RETURNS A NEW FUNCTION WITH THE SPECIFIED CONTEXT
// CAN PASS ARGUMENTS AT TIME OF CALL OR WHEN NEWLY CREATED FUNCTION IS CALLED
// const mattCar = people.sayName.bind(personTwo, 'geo', 1990)

const salesTaxRates = {
  utah: 7.18,
  texas: 8.19,
  maine: 5.5,
  idaho: 6.03,
}

const shoes = {
  name: "Yeezys",
  price: 2500,
}

const shirt = {
  name: "J. Crew Flannel",
  price: 45,
}

const hat = {
  name: "Stylish Snapback",
  price: 25,
}

//Write a function called calculatePrice that will use the name and price of an explicitly defined context and one of the tax rates from the salesTaxRates object to calculate the total price.  Do it once with each call, apply, and bind.

const people = {
  sayName: function (car, year) {
    console.log(
      `My name is ${this.firstName} ${this.lastName}, and I drive a ${car} made in ${year}`
    )
  },
}

// THIS keyword is referring to the people object which does not contain a firstName or lastName property
//   people.sayName('Geo Metro', 1980)

const personOne = {
  firstName: "Andrew",
  lastName: "Westenskow",
}
const personTwo = {
  firstName: "Matt",
  lastName: "Bodily",
}

// people.sayName.call(personOne, 'Tesla Cybertruck', 2020)
// people.sayName.apply(personTwo, ['Geo Metro', 1980])
// const andrewCar = people.sayName.bind(personOne)
// andrewCar('Another truck', 2020)

// introduceSelf.call(personOne)

//Arrow functions

const arrow = () => {
  console.log(this === window ? "this is the window" : this)
}
const expression = function () {
  console.log(this === window ? "this is the window" : this)
}

let contextObj = {
  regularMethod: function () {
    console.log(this === window ? "this is the window" : this)
  },

  arrowMethod: () => {
    console.log(this === window ? "this is the window" : this)
  },
}

// contextObj.anotherArrow = arrow
// expression()
// contextObj.expression = expression
// contextObj.expression()
// contextObj.anotherArrow()
// contextObj.regularMethod()
// contextObj.arrowMethod()

//Constructor functions

let movie = {}

// movie.title = 'Star Wars';

function Movies(title, genre, director, awesome) {
  // HARD CODED EXAMPLE
  // this.title = 'Star Wars';
  // this.genre = 'Sci-fi/Fantasy';
  // this.director = 'George Lucas';
  // this.awesome = true;
  this.title = title
  this.genre = genre
  this.director = director
  this.awesome = awesome
  //This method essentially creates a new function for every object created with constructor function
  //   this.isItAwesome = function () {
  //     if (this.awesome) {
  //       return `${this.title} is indeed awesome`
  //     } else {
  //       return `${this.title} kinda sucks`
  //     }
  //   }
}

movie = new Movies("Star Wars", "Sci-fi/Fantasy", "George Lucas", true)
const aNewHope = new Movies("A New Hope", "Sci-fi/Fantasy")
const coolRunnings = new Movies("Cool Runnings", "Comedy", "Jon Turtle", true)


//Create a constructor function called Robot.  It should accept parameters for name, height, and kindnessLevel.  You should also add a method called receive kindness which should accept a number, increse the kindness level by that amount and then return the updated object.  Use your constructor function to create a couple of robots.

function Robot(name, height, kindnessLevel) {
    this.name = name
    this.height = height
    this.kindnessLevel = kindnessLevel
}

let robocop = new Robot('Robocop', '7ft', 100)
cl(robocop)

Robot.prototype.sayHi = function() {
    cl(`Hello, my name is ${this.name}`)
}

robocop.sayHi()

//Prototype methods
// Functions that are contained within the prototype object

Movies.prototype.isItAwesome = function () {
    if (this.awesome) {
        return `${this.title} is indeed awesome`
    } else {
        return `${this.title} kinda sucks`
    }
}


cl(coolRunnings.isItAwesome())
cl(coolRunnings)

//Create another constructor called Car.  It should take in make, model, and year parameters.  Create a prototype for the Car constructor called honk.  This function should return a string of 'Make Model says HONK!' filling in the values of make and model with the surrounding context.

function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

Car.prototype.honk = function() {
    return `${this.make} ${this.model} says HONK!`
}

let cyberTruck = new Car('Tesla', 'CyberJunk', 2021)

