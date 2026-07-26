const str = "Hello";

// code 1
const revStr1 = Array.from(str).reverse().join('');
console.log(revStr1);

// code 2
const revStr2 = str.split('').reverse().join('');
console.log(revStr2);

// code 3
const revStr3 = Array.from(str,(_, index)=> str[str.length -1-index]).join('');
console.log(revStr3);