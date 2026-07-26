const arr = [1,2,3,4,5,6,7,8,9];
for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

// map, filter,forEach methods:
let evenNumbers = arr.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

// map vs forEach method:
let squaredNumbers = arr.map(num => num * num);
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

let forEachResult = arr.forEach(num => console.log(num * num)); // wrong use of forEachResult
console.log(forEachResult); // Output: undefined

const queue = ["Sarah", "John", "Mike"];

queue.forEach((person, index) => {
    // Adding 1 to index so it reads as 1, 2, 3 instead of 0, 1, 2
    console.log(`${index + 1}: ${person} is in line.`);
});

//  Output:
// 1: Sarah is in line.
// 2: John is in line.
// 3: Mike is in line.


// why map returns a new array while forEach does not return anything?
// The map method creates a new array with the results of calling a provided function on every element in the calling array. It returns a new array with the transformed values. On the other hand, the forEach method executes a provided function once for each array element but does not return anything. It is used for performing side effects, such as logging or modifying external variables, rather than creating a new array.

// difference between map and forEach method:
// 1. Return Value: The map method returns a new array with the results of calling a provided function on every element in the calling array, while the forEach method does not return anything (undefined).
// 2. Purpose: The map method is used for transforming data and creating a new array based on the original array, while the forEach method is used for performing side effects, such as logging or modifying external variables, without creating a new array.
// 3. Chainability: Since map returns a new array, it can be chained with other array methods like filter or reduce, whereas forEach cannot be chained because it does not return anything.



const fruits = ["apple", "mango", "lichi"];

fruits.push("banana");
console.log(fruits); // Output: ["apple", "mango", "lichi", "banana"]

fruits.pop();
console.log(fruits); // Output: ["apple", "mango", "lichi"]

fruits.unshift("grape");
console.log(fruits); // Output: ["grape", "apple", "mango", "lichi"]

fruits.shift();
console.log(fruits); // Output: ["apple", "mango", "lichi"]

fruits.splice(1, 0, "orange", "banana");
console.log(fruits); // Output: ["apple", "orange", "banana", "mango", "lichi"]

slices = fruits.slice(1, 3);
console.log(slices); // Output: ["orange", "banana"]


// 🔑 Array Methods Explained

// - splice  
//   - Syntax:
   `array.splice(start, deleteCount, item1, item2, ...)`  
//   - Use: Original array modify karta hai (add/remove elements).  
//   - Return: Removed elements ka new array.  

// - slice  
//   - Syntax:
   `array.slice(start, end)`  
//   - Use: Array ka ek portion copy karta hai.  
//   - Return: New array (original unchanged).  

// - filter  
//   - Syntax:
   `array.filter(callback(element, index, array))`  
//   - Use: Condition-based elements select karta hai.  
//   - Return: New array with filtered elements.  

// - reduce  
//   - Syntax:
   `array.reduce(callback(acc, curr, index, array), initialValue)`  
//   - Use: Saare elements ko ek single value me reduce karta hai.  
//   - Return: Single value (sum, max, object, etc.).  

// - map  
//   - Syntax:
   `array.map(callback(element, index, array))`  
//   - Use: Har element ko transform karta hai.  
//   - Return: New array of transformed values.  

// - forEach  
//   - Syntax:
   `array.forEach(callback(element, index, array))`  
//   - Use: Sirf iteration ke liye (side-effects).  
//   - Return: `undefined`.  

// - find  
//   - Syntax:
   `array.find(callback(element, index, array))`  
//   - Use: Pehla element jo condition satisfy kare.  
//   - Return: Single element (ya `undefined`).  

// - findIndex  
//   - Syntax:
   `array.findIndex(callback(element, index, array))`  
//   - Use: Pehle matching element ka index.  
//   - Return: Index (ya `-1`).  

// - every  
//   - Syntax:
   `array.every(callback(element, index, array))`  
//   - Use: Check karta hai ki sab elements condition satisfy karte hain ya nahi.  
//   - Return: Boolean (`true/false`).  

// - some  
//   - Syntax:
   `array.some(callback(element, index, array))`  
//   - Use: Check karta hai ki koi ek element condition satisfy karta hai ya nahi.  
//   - Return: Boolean (`true/false`).  

// - includes  
//   - Syntax:
   `array.includes(valueToFind, fromIndex)`  
//   - Use: Check karta hai ki element array me hai ya nahi.  
//   - Return: Boolean.  

// - indexOf  
//   - Syntax:
   `array.indexOf(searchElement, fromIndex)`  
//   - Use: Element ka index find karta hai.  
//   - Return: Index (ya `-1`).  

// - concat  
//   - Syntax:
   `array.concat(value1, value2, ...)`  
//   - Use: Arrays combine karta hai.  
//   - Return: New array.  

// - join  
//   - Syntax:
   `array.join(separator)`  
//   - Use: Array elements ko ek string me join karta hai.  
//   - Return: String.  

// - sort  
//   - Syntax:
   `array.sort(compareFunction)`  
//   - Use: Array ko sort karta hai.  
//   - Return: Modified original array.  

// - reverse  
//   - Syntax:
   `array.reverse()`  
//   - Use: Array ko reverse karta hai.  
//   - Return: Modified original array.  



