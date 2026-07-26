
const person ={
    name: "shashank",
    age:33
};

console.log(Object.getOwnPropertyNames(person)); //returns only keys
console.log(Object.keys(person)); //returns only keys

const add = (x,y)=>{
    return x+y;
}
console.log(add(5,7));

// const user = () =>{
//     name: "Test"
// }
// console.log(user())     //It will return undefined.

const user2 = () =>({
    name: "Test"
})
console.log(user2())    //It will not return undefined, javascript will treat it as an object due to round bracket "()"

const user3 = () =>({
    name: "Test",
    age:30
})
console.log(user3())

const obj1 = {
    age:50,  
    greet:function(){
        console.log(this.age)

    },
    greet2: () =>{
        console.log(this.age)
    }
}; // now it will not return any error even without() because arrow function is inside another function so it will share the variable from parent function.

console.log(obj1.greet());
console.log(obj1.greet2());

const obj = {
    age:50,  
    greet:function(){
        console.log(this.age)
       const greet2 = ()  => {
            console.log(this.age)
        }
        greet2();
    }
};

console.log(obj.greet())

const keys = Object.keys(obj);
keys.forEach((element, index) => {
    console.log(element);
    console.log(index);
});
