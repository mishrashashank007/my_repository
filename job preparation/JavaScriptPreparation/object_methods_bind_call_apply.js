
//bind method:
function greet(age) {
    console.log(`Hello, my name is ${this.name} and I am ${age} years old.`);
}
const person1 = {
    name: "Test"
};
const person2 = {
    name: "shashank"
};
const boundGreet = greet.bind(person2, 20);
boundGreet(); // Output: Hello, my name is shashank and I am 20 years old.
    
//call method:
function greet(city,country) {
    console.log(`Hello, my name is ${this.name}, my city is ${city} and country is ${country}.`);
}
const person3 = {
    name: "Test",
};
const person4 = {
    name: "shashank",

};
greet.call(person4, "Lucknow", "India"); // Output: Hello, my name is shashank, my city is Lucknow and country is India.
greet.call(person3, "Kanpur", "India"); // Output: Hello, my name is Test, my city is Kanpur and country is India.

//apply method:
function greet(age, weight) {
    console.log(`Hello, my name is ${this.name} and I am ${age} years old and my weight is ${weight}.`);
}
let person5 = {
    name: "Test",
};
let person6 = {
    name: "shashank",
};
greet.apply(person6,["25","70"]); // Output: Hello, my name is shashank and I am 25 years old and my weight is 70.
greet.apply(person5,["50","60"]); // Output: Hello, my name is Test and I am 50 years old and my weight is 60.

// To find out all the keys of an object:
let keys = Object.keys(obj);
console.log(keys);

// To find out all the values of an object:
let values = Object.values(obj);
console.log(values);

// sample question:
let obj = {
    name: "Test",
    age: 25,
    state: {
        city: "kanpur",
        address: {
            currAddress: "Test",
            permanentAddress: "hi"
        }
    }
};
// To find out all the entries of an object:
let entries = Object.entries(obj);
console.log(entries);
result: [ [ 'name', 'Test' ], [ 'age', 25 ], [ 'state', { city: 'kanpur', address: [Object] } ] ]

// To check if a key exists in an object:
let hasName = obj.hasOwnProperty("name");
console.log(hasName);
result: true/false

// To check if a value exists in an object:
let hasValue = Object.values(obj).includes("Test");
console.log(hasValue);
result: true/false