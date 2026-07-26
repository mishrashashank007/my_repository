// Methods of object creating
// There are three main methods:

//1. Object literals

const details = {
    name : "shashank",
    gender : "male",
    age : 24
};

//2.Cunstructor function
function petAnimal(name, age){
    this.name = name;
    this.age = age;
    this.detail = `name: ${name}`;   
}
const pet = new petAnimal("Dog");
console.log(pet.detail);

//3. Class using constructor function inside
class Human{
    constructor(name, age){
        this.name = name;
        this.age = age;
        this.detail = `name: ${name}, age: ${age} `;
    }
}

//instance of a class
const me = new Human("shashank", 24);
console.log(me.detail);

//4. Object.create (creating a new object using prtotype object)
const parentObject = {isHuman : true};
const newObj = Object.create(parentObject);
newObj.name = "Shashank";

console.log(newObj.isHuman); //true

//5. Factory functions
function createUser(name, age) {
    return {
        name: name,
        age: age,
        greet() {
            console.log(`Hi, I am ${name}`);
        }
    };
}
const user1 = createUser("Shashank", 24);