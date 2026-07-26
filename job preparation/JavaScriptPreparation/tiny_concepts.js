// //Anonomous function
// let a = 5;
// let b = 10;
    
// let result = sum(a,b);
// function sum(a,b){
//     return a+b;
// }
// console.log(result);

//Object
// let fruits = ["apple", "mango", "lichi"];
// fruits[2] = "papaya";
// fruits[3] = "banana";

// console.log(fruits[3]);
// console.log(typeof fruits); 
// console.log(fruits);

// for(let i=0; i<fruits.length; i++){
//     console.log(fruits[i]);
// }

// let fruits = ["apple", "mango", "lichi"];
// for (let item in fruits) {
//     console.log(item);
// }




//Object function and class vs constructor function definition(aso called constructor function): It is a function that is used to create objects.It is a template for creating objects. It is a blueprint for creating objects. It is similar to a class in JavaScript.Constructor function and a class are mostly two different syntaxes for the same idea. Class is modern while constructor function is old.
// //object function example code:
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     this.greet = function() {
//         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//     }
// }
// let person1 = new Person("Test", 25);
// person1.greet(); // Output: Hello, my name is Test and I am 25 years old.

// //class example code:
// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     greet() {
//         console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
//     }
// }
// let person1 = new Person("shashank", 20);
// person1.greet(); // Output: Hi, my name is shashank and I am 20 years old.

