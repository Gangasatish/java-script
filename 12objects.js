//object in javascript is a collection of key-value pairs. it is used to store multiple values in a single variable.
 //object is a non-primitive data type in javascript.
//object is mutable, which means we can change the properties of an object after it is created.

//creating an object using object literal syntax
let person = {
    name: "John",
    age: 30,
    city: "New York"
};
console.log(person); // Output: { name: "John", age: 30, city: "New York" }
//accessing object properties using dot notation
console.log(person.name); // Output: John
console.log(person.age); // Output: 30
//accessing object properties using bracket notation
console.log(person["city"]); // Output: New York

//adding a new property to the object
person.country = "USA";
console.log(person); // Output: { name: "John", age: 30, city: "New York", country: "USA" }
//updating an existing property of the object
person.age = 31;
console.log(person); // Output: { name: "John", age: 31, city: "New York", country: "USA" }
//deleting a property from the object
delete person.city;
console.log(person); // Output: { name: "John", age: 31, country: "USA" }
//iterating over the properties of the object using for...in loop
for (let key in person) {
    console.log(key + ": " + person[key]);
}
// Output:
// name: John
// age: 31
// country: USA
//nested object
let student = {
    name: "Alice",
    age: 22,
    address: {
        street: "123 Main St",
        city: "Los Angeles",
        state: "CA"
    }
};
console.log(student.address.city); // Output: Los Angeles
//object methods
let car = {
    brand: "Toyota",
    model: "Camry",
    year: 2020,
    getCarInfo: function() {
        return this.brand + " " + this.model + " " + this.year;
    }
};
console.log(car.getCarInfo()); // Output: Toyota Camry 2020
//object constructor function is a function that is used to create multiple objects with the same properties and methods.
function Animal(type, name) {
    this.type = type;
    this.name = name;
    this.getInfo = function() {
        return this.name + " is a " + this.type;
    };
}
let dog = new Animal("Dog", "Buddy"); // creating a new object using the Animal constructor function by here new keyword is used to create a new instance of the Animal object.
console.log(dog.getInfo()); // Output: Buddy is a Dog
let cat = new Animal("Cat", "Whiskers");
console.log(cat.getInfo()); // Output: Whiskers is a Cat
//object.assign() method to copy properties from one object to another
let obj1 = { a: 1, b: 2 };
let obj2 = { b: 3, c: 4 };
let mergedObj = Object.assign({}, obj1, obj2); // here we are creating a new object by merging obj1 and obj2. if there are any duplicate keys, the value from the last object will be used. in this case, the value of key 'b' from obj2 will overwrite the value from obj1.
console.log(mergedObj); // Output: { a: 1, b: 3, c: 4 }
//object.keys() method to get an array of object keys
let keys = Object.keys(person);
console.log(keys); // Output: [ 'name', 'age', 'country' ]
//object.values() method to get an array of object values
let values = Object.values(person);
console.log(values); // Output: [ 'John', 31, 'USA' ]
//object.entries() method to get an array of object key-value pairs
let entries = Object.entries(person);
console.log(entries); // Output: [ [ 'name', 'John' ], [ 'age', 31 ], [ 'country', 'USA' ] ]
//checking if a property exists in an object using hasOwnProperty() method
console.log(person.hasOwnProperty("name")); // Output: true
console.log(person.hasOwnProperty("city")); // Output: false
//freezing an object to prevent modifications using Object.freeze() method
Object.freeze(person);
person.age = 35; // This will not change the age property
console.log(person.age); // Output: 31
//sealing an object to prevent adding or deleting properties using Object.seal() method. it allows modification of existing properties but prevents adding or deleting properties.
Object.seal(person);
delete person.country; // This will not delete the country property
person.city = "Los Angeles"; // This will not add a new city property
console.log(person); // Output: { name: "John", age: 31, country: "USA" }
//creating an object using Object.create() method
let animal = {
    speak: function() {
        return this.name + " makes a sound";
    }
};
let monkey = Object.create(animal); // here we are creating a new object monkey that inherits properties and methods from the animal object.
monkey.name = "Koko";
console.log(monkey.speak()); // Output: Koko makes a sound

//object prototype is a mechanism by which objects inherit properties and methods from other objects in JavaScript.
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}
Person.prototype.getFullName = function() {
    return this.firstName + " " + this.lastName;
};
let person1 = new Person("Jane", "Doe");
console.log(person1.getFullName()); // Output: Jane Doe
let person2 = new Person("Mike", "Smith");
console.log(person2.getFullName()); // Output: Mike Smith
//checking prototype chain using isPrototypeOf() method
console.log(Person.prototype.isPrototypeOf(person1)); // Output: true
console.log(Person.prototype.isPrototypeOf(person2)); // Output: true
//getting the prototype of an object using Object.getPrototypeOf() method
console.log(Object.getPrototypeOf(person1) === Person.prototype); // Output: true
console.log(Object.getPrototypeOf(person2) === Person.prototype); // Output: true
//setting the prototype of an object using Object.setPrototypeOf() method
let animalProto = {
    eat: function() {
        return this.name + " is eating";
    }
};
let parrat = Object.create(animalProto);
parrat.name = "Koko";
console.log(parrat.eat()); // Output: Koko is eating
let fish = { name: "Nemo" };
Object.setPrototypeOf(fish, animalProto);
console.log(fish.eat()); // Output: Nemo is eating
//using class syntax to create objects and prototypes
class Vehicle {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }
    getInfo() {
        return this.brand + " " + this.model;
    }
}
let vehicle1 = new Vehicle("Honda", "Civic");
console.log(vehicle1.getInfo()); // Output: Honda Civic
let vehicle2 = new Vehicle("Ford", "Mustang");
console.log(vehicle2.getInfo()); // Output: Ford Mustang
//checking prototype chain using instanceof operator
console.log(vehicle1 instanceof Vehicle); // Output: true
console.log(vehicle2 instanceof Vehicle); // Output: true
//getting the prototype of an object using Object.getPrototypeOf() method
console.log(Object.getPrototypeOf(vehicle1) === Vehicle.prototype); // Output: true
console.log(Object.getPrototypeOf(vehicle2) === Vehicle.prototype); // Output: true
//setting the prototype of an object using Object.setPrototypeOf() method
let bikeProto = {
    ride: function() {
        return this.brand + " " + this.model + " is riding";
    }
};
let bike = Object.create(bikeProto);
bike.brand = "Yamaha";
bike.model = "R15";
console.log(bike.ride()); // Output: Yamaha R15 is riding
let scooter = { brand: "Vespa", model: "LX" };
Object.setPrototypeOf(scooter, bikeProto);
console.log(scooter.ride()); // Output: Vespa LX is riding
// array of objects
let employees = [
    { name: "Alice", age: 28, department: "HR" },
    { name: "Bob", age: 34, department: "IT" },
    { name: "Charlie", age: 25, department: "Finance" }
];
//iterating over the array of objects using for loop
for (let i = 0; i < employees.length; i++) {
    console.log(employees[i].name + " works in " + employees[i].department);
}
// Output:
// Alice works in HR
// Bob works in IT
// Charlie works in Finance