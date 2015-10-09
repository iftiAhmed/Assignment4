
// Assignment 4

// Q1

/*
var ANIMAL = ANIMAL|| {};

ANIMAL.Cat = function() {}

Animal.Dog = function() {}
*/

// Q2

/*
function Cat() {}  // class literal

var Dog = new Cat();

window.console.log(Dog.constructor);


// Q3 

var cat = new Cat();
var dog = new Dog();
window.console.log(typeof cat());

*/

// Q4

/*
function Animal() {
    window.console.log("The Animal has been created");
}
var cat = new Animal();
window.console.log(cat.constructor);
*/

// Q5

/*
function Animal(kind) {
    this._type = kind;
    window.console.log(this._type);
}
var myAnimal = new Animal("Cat");
*/


// Q6

/*
function Animal(type, breed, color, height, length) {
    this._type = type;
    this._breed = breed;
    this._color = color;
    this._height = height;
    this._length = length;

window.console.log(this._type + this._breed + this._color + this._height + this._length);
}
var newAnimal = new Animal("Dog ", "German Shepherd " , " Black ",   "2 ",  " 6");
*/

// Q7

/*
function Animal(type, breed, color, height, length) {
    this._type = type;
    this._breed = breed;
    this._color = color;
    this._height = height;
    this._length = length;
//window.console.log(this._type + this._breed + this._color + this._height + this._length);
}
var myAnimal = new Animal();
for (var property in myAnimal) {
    window.console.log(property);
}

*/
//Q8
/*

function Animal(type, breed, color, height, length) {
    this._type = type;
    this._breed = breed;
    this._color = color;
    this._height = height;
    this._length = length;
    this.speak = function () {
        if (this._type === "Cat") {
            window.console.log("The " + "<"+color+">" + type + " is meowing!");
        } else if (this._type === "Dog") {
                window.console.log("The "  + "<"+ color +">"  + type + " is barking!");
        }
                                     
    }
//window.console.log(this._type + this._breed + this._color + this._height + this._length);
}
var myAnimal = new Animal( "white" + "Cat");
myAnimal.speak();
*/

// Q9

/*
function Animal(type, breed, color, height, length) {
    var _type = type;
    var _breed = breed;
    var _color = color;
    var _height = height;
    var _length = length;
    var checkType = function () {
        if (_type === "Cat") {
            window.console.log("The animal type " + type + " has made the noise!" );
        } else if (_type === "Dog") {
            window.console.log("The animal type "  + type + "has made the noise!");
        }
    }
    this.speak = function () {
        checkType();
    }
                                     
}
//window.console.log(this._type + this._breed + this._color + this._height + this._length);

var myAnimal = new Animal("Cat");
myAnimal.speak();

*/


//10

/*
function Animal(type, breed, color, height, length) {
    this._type = type;
    this._breed = breed;
    this._color = color;
    this._height = height;
    this._length = length;
    this.speak = function () {
        if (this._type === "Cat") {
            window.console.log("The " + "<"+color+">" + type + " is meowing!");
        } else if (this._type === "Dog") {
                window.console.log("The "  + "<"+ color +">"  + type + " is barking!");
        }
                                     
    }
//window.console.log(this._type + this._breed + this._color + this._height + this._length);
}
var myAnimal = new Animal( "white" + "Cat");
myAnimal.speak();

*/


/*    

Change Oil Program

*/

/*

var Vehicle = function (make, model, total_miles, milage) {
	this._make = make;
	this._model = model;
	this._totalMiles = total_miles;
	this._drivenMiles = milage;
	this._type = type;
	this._LastOilChange = lastOilChange;
	this._drivenMiles = 0;
	this._type = "";
	
	this.drive = function (miles) {
		milage += miles;
		return milage;
	}
	
	this.checkOil = function () {
		if (((total_miles - lastOilChange) + milage ) <= 3000 ) {
			return "You need an oil change!";
		} else {
			return "You don't need an oil change!";
		}
		
	}
		
}

var Car = function (doorCount) {
	this.door_count = doorCount;
	if (doorCount === 2) {
		return "Coupe";
	} else {
		return "Sedan";
		
	}
}
	
	Car.prototype = new Vehicle ("Honda", "Civic", 15300, 5000);
	var myCar = new Car(4);
	
	window.console.log(myCar.drive().checkOil());
	
*/


// Recipe Card




var Recipe  = {
	
	title: "",
	servings: Number,
	ingridients : ["- 3 Avacados", " - 1 Lime", " - 1 Teaspoon Salt", "- 1/2 Cup onion", "- 2 Diced Tomatoes", "- 1 Tespoon Garlic", "- 1 Pinch Ground Pepper"],
	displayIngridients: function (title, ingridients) {
		return (title + "\n" + "Serve: \n" + "\n" + "Ingridients: \n"  + ingridients);
	}
};

var cooking = Object.create(Recipe, {
	servings: {value: 6}
});
window.console.log(cooking.displayIngridients("Guacamole", "- 3 Avacados", "- 1 Lime", "- 1 Teaspoon Salt", "- 1/2 Cup onion", "- 2 Diced Tomatoes", "- 1 Tespoon Garlic", "- 1 Pinch Ground Pepper"));




// Fill in the blanks

/*

(function() {
    var person = {
        // add code here
		firstname: "John",
		age: 21,
		displayPerson: function(firstname age){
			return("His first name is " + firstname + " and he is " + age + " years old);
			}
		
    };

    var car = {
        // add code here
		make: "Lamberguini",
    };

    // print vroom vroom
    car.drive();

    // print 'I'm rich'
    if (car.price > 100000) {
        person.buy(car);
    }
}());

*/