const arr = [1,5,8,7,9,5,4,6,3,];
const double = arr.map(num => num * 2);
console.log(double);

// const double2 = arr.forEach(indexed, value)
let num = 0;
for(let i = 0; i < arr.length; i++){
    if(arr[i] === 5){
        return 
    }
    return num;
}

const user = [ 
    {
        name: "vivek",
        age: 25
    },
    {
        name: "test",
        age: 30
    }
];

const name = user.map(u=> u.name);
console.log(name);

const filtered1 = arr.filter(num => num > 5);
console.log(filtered1);

const mapped = arr.map(num => num * 2);
console.log(mapped);

const filtered2 = user.filter(u => u.age > 25);
console.log(filtered2);

const result = arr.filter(num => {
    if(num > 1){
        return true;
    }
});
console.log(result);

const a = arr.indexOf(5);
console.log(a);

const filtered = arr.filter(num =>{ if(num > 5){}});

// "??" is the nullish coalescing operator, which returns the right-hand side operand when the left-hand side operand is null or undefined. It is used to provide a default value when dealing with potentially null or undefined values.
// const age1 = 0;
// const userAge1 = age1 ?? 18;
// console.log(userAge1);      // output: 0    

// const age2 = "";
// const userAge2 = age2 ?? 18;
// console.log(userAge2);      // output: "" (empty string)

// const age3 = null;
// const userAge3 = age3 ?? 18;
// console.log(userAge3);      // output: 18 (because null is considered nullish)

// const age4 = undefined;
// const userAge4 = age4 ?? 18;
// console.log(userAge4);       // output: 18 (because undefined is considered nullish)

// const age5 = true;
// const userAge5 = age5 ?? 18;
// console.log(userAge5);      // output: true (because true is not nullish)

// const age6 = false;
// const userAge6 = age6 ?? 18;
// console.log(userAge6);      // output: false (because false is not nullish)

// const age7 = NaN;
// const userAge7 = age7 ?? 18;
// console.log(userAge7);      // output: NaN (because NaN is not nullish)

// const age8 = {}; 
// const userAge8 = age8 ?? 18;
// console.log(userAge8);      // output: {} (because an empty object is not nullish)

// const age9 = 18;
// const userAge9 = age9 ?? 18;
// console.log(userAge9);      // output: 18 (because 18 is not nullish)


// const age1 = 0;
// const userAge1 = age1 || 18;
// console.log(userAge1);      // output: 18 (because 0 is falsy)

// const age2 = "";
// const userAge2 = age2 || 18;
// console.log(userAge2);      // output: 18 (because an empty string is falsy)

// const age3 = null;
// const userAge3 = age3 || 18;
// console.log(userAge3);      // output: 18 (because null is falsy)

// const age4 = undefined;
// const userAge4 = age4 || 18;
// console.log(userAge4);      // output: 18 (because undefined is falsy)

// const age5 = true;
// const userAge5 = age5 || 18;
// console.log(userAge5);      // output: true (because true is truthy)

// const age6 = false;
// const userAge6 = age6 || 18;
// console.log(userAge6);      // output: 18 (because false is falsy)

// const age7 = NaN;
// const userAge7 = age7 || 18;
// console.log(userAge7);      // output: 18 (because NaN is falsy)

// const age8 = {}; 
// const userAge8 = age8 || 18;
// console.log(userAge8);      // output: {} (because an empty object is truthy)

// const age9 = 18;
// const userAge9 = age9 || 18;
// console.log(userAge9);      // output: 18 (because 18 is truthy)


const arr2 = [10,20,30,40];
const changed_arr = arr2.splice(arr2.length,0,1,2);
console.log(arr2);
console.log(changed_arr);

const arr3 = [1,3,4,5,2];
result = arr3.reduce((acc, curr)=>{
    return curr > acc;
},arr3[0]);