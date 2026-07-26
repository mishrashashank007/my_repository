class Student{
    constructor(name, age){
        this.name = name;
        this.age = age
    }
    getDetail(){
        console.log(`this is my $(this.name) & age is $(this.age)`)
    }
}

const student = new Student("Vivek", 30);
Student.getDetauil();


//constructor:
function Student1(name, age){
        this.name = name;
        this.age = age
    }
    Student1.prototype.getDetail = function(){
        console.log(`this is my ${this.name} & age is ${this.age}`);
    }


const student1 = new Student1("Vivek", 30);
student1.getDetail();



// when we have a constructor the why we use es6 class?.

// inheritence:
class Animal{
     constructor(name){
    this.name = name;
}
    eat(){
        console.log("Animal is Eating");
    }
}
class Dog extends Animal{
    constructor(name){
      super(name)
    }
    bark(){
        console.log("Dog is barking");
        console.log(`Name: ${this.name}`)
    }
}

const d1 = new Dog("sheru");
d1.bark();
d1.eat();

