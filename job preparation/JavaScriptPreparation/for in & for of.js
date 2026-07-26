const details = {
    class : "10th",
    name : "shashank",
    section : "4 B"
};
//"for in" loop works directly in object literals but not in an array, it prints the keys.
for(const key in details){
    console.log(`${key}: ${details[key]}`);
}

//Object.keys(obj): Returns an array of the keys. 
//Object.values(obj): Returns an array of the values.
//Object.entries(obj): Returns an array of [key, value] pairs.
//"for of" loop does not works directly in object literals but works fine on arrays, it prints the values.To make it work on object we convert that object into an array.

for(const key of Object.keys(details)){
    console.log(`${key}: ${details[key]}`)
}
