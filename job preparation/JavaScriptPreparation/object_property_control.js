// 1. Object.seal() 
// Existing properties can be modifiesd, but new properties cannot be added and existing properties cannot be deleted.
const obj1 = {
    name: "ASUS"
};
Object.seal(obj1);
obj1.name = "DELL";      //allowed
obj1.city = "Kanpur";    //not added
delete obj1.name;        //not deleted
console.log(obj1); 

//2. Object.freeze() method is used to freeze an object. It prevents new properties from being added to an object, existing properties from being removed, and existing properties from being changed. In other words, it makes an object immutable.
const obj2 = {
    name: "anmol"
};
Object.freeze(obj2);
obj2.name = "Delhi";   // Ignored( or error in strict mode)
obj2.city = "Kanpur";  // Not added
delete obj2.name;    // Not deleted
console.log(obj2);

// 3. Object.preventExtensions()
// can not add new property but can modify and delete existing properties.
const obj3 = {
    name: "Ram"
};
Object.preventExtensions(obj3);
obj3.name = "Kanpur";      //Not allowed
obj3.city = "Delhi";     //allowed
delete obj3.name;         //Allowed
console.log(obj3);
