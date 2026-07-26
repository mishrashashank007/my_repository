// ==========================================
// JAVASCRIPT OBJECT COPYING METHODS - NOTES
// ==========================================

// NOTE: Lodash imports hamesha file ke top par hone chahiye best practice ke liye.
// Pehle terminal mein run karein: npm install lodash
const _ = require('lodash'); 

// Creating a deeply nested object with edge cases (Date, Function) to test limitations
const obj = {
    name: "Shashank",
    joinDate: new Date(),          // Edge case: JSON method isko string bana dega
    greet: function() {            // Edge case: JSON aur structuredClone isme fail honge
        return "Hello!"; 
    },
    address: {
        country: "India",
        city: "Kanpur",
        location: {
            x: "abc",
            y: {
                z: "def",
                q: { pet: "cat" }
            }
        }
    }
};

console.log("--- ORIGINAL OBJECT CREATED ---");

// ==========================================
// 1. SHALLOW COPY (Upar-upar se copy karna)
// ==========================================
// Fayde (Pros): Bahut fast hote hain. Kam memory lete hain.
// Nuksan (Disadvantages): Sirf first-level properties copy hoti hain. 
// Nested objects (object ke andar object) copy nahi hote, unka memory address (reference) share ho jata hai.
// Agar copy mein nested value change ki, toh Original object bhi change ho jayega!

// (i) Spread Operator (...) - Most Modern & Used
const obj2 = { ...obj };

// (ii) Object.assign() - Older JS Method
const obj3 = Object.assign({}, obj);

// (iii) Array.slice() - Only for Arrays
// slice() method plain objects {} par kaam nahi karta, yeh Arrays [] ke liye hota hai.
const originalArray = [1, 2, [3, 4, [5, 6]]]; 
const copyArray = originalArray.slice();

copyArray[0] = 99; // Top-level safe hai
copyArray[2][0] = 55; // Nested array original ko bhi change kar dega

console.log("\n--- ARRAY.SLICE TEST ---");
console.log("Original Array Top-level:", originalArray[0]); // 1 (Safe)
console.log("Original Array Nested:", originalArray[2][0]); // 55 (Original modify ho gaya!)

// Proving Shallow Copy Disadvantage:
obj2.name = "Rahul"; // Top-level change -> Safe (Original change nahi hoga)
obj2.address.location.y.q.pet = "Dog"; // Nested change -> DANGER! Original bhi modify ho jayega.

console.log("\n--- SHALLOW COPY TEST ---");
console.log("Original Name:", obj.name); // "Shashank" (Safe)
console.log("Original Pet (after Shallow Copy mutation):", obj.address.location.y.q.pet); // "Dog" (Oops! Original modify ho gaya)



// ==========================================
// 2. DEEP COPY (Gehrai tak copy karna)
// ==========================================
// Fayde (Pros): Nested properties ki completely nayi copy banti hai. Original hamesha safe rehta hai.
// Nuksan (Disadvantages): Memory zyada lete hain aur execution mein slow hote hain.

// Resetting the pet value back to 'cat' for deep copy tests
obj.address.location.y.q.pet = "cat"; 

// (i) JSON.parse(JSON.stringify(obj)) - Oldest Hack
// Limitations (Nuksan): 
// - Functions aur 'undefined' values ko ignore/delete kar deta hai.
// - Date objects ko proper Date nahi rakhta, use text (String) bana deta hai.
const objJSON = JSON.parse(JSON.stringify(obj));
objJSON.address.location.y.q.pet = "Elephant";

console.log("\n--- DEEP COPY: JSON METHOD ---");
console.log("Original Pet:", obj.address.location.y.q.pet); // "cat" (Safe!)
console.log("Copied Pet:", objJSON.address.location.y.q.pet); // "Elephant"
console.log("Function status:", objJSON.greet); // undefined (Function delete ho gaya)
console.log("Date status:", typeof objJSON.joinDate); // "string" (Date string ban gayi)


// (ii) structuredClone() - Modern Native JS Method (Best for internal JS)
// Fayde: JSON method se better hai. Date, Set, Map objects ko preserve karta hai.
// Limitations (Nuksan): Agar object mein functions ya DOM elements hain, toh yeh Error throw karega.
// Note: Kyunki humare obj mein function (greet) hai, structuredClone fail ho jayega.
// Isliye hum function ko hatakar test karenge.

const objWithoutFunction = { ...obj }; 
delete objWithoutFunction.greet; // Removing function so structuredClone works

const objStructured = structuredClone(objWithoutFunction);
objStructured.address.location.y.q.pet = "Lion";

console.log("\n--- DEEP COPY: STRUCTURED CLONE ---");
console.log("Original Pet:", obj.address.location.y.q.pet); // "cat" (Safe!)
console.log("Date status:", typeof objStructured.joinDate); // "object" (Proper Date bachi hui hai!)


// (iii) _.cloneDeep() from Lodash - The Ultimate Solution
// Fayde: Sabse powerful. Functions ko chhodkar almost har complex data type (Date, Regex, arrays, maps) successfully copy kar leta hai bina error ke.
// Limitations (Nuksan): Ek external package (Lodash) download karna padta hai, jo project ka size bada karta hai.

const objLodash = _.cloneDeep(obj);
objLodash.address.location.y.q.pet = "Tiger";

console.log("\n--- DEEP COPY: LODASH _.cloneDeep ---");
console.log("Original Pet:", obj.address.location.y.q.pet); // "cat" (Safe!)
console.log("Copied Pet:", objLodash.address.location.y.q.pet); // "Tiger"
console.log("Function status:", typeof objLodash.greet); // "function" (Bacha hua hai!)
console.log("Date status:", typeof objLodash.joinDate); // "object" (Date bhi safe hai!)