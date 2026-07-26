// type 1
const string1 = "maaad";

// code 1
const removeDuplicate1 = [...new Set(string1)].join('');
console.log(removeDuplicate1);

// code 2
const removeDuplicate2 = Array.from(new Set(string1)).join('');
console.log(removeDuplicate2);

// type 2
const string2 = "orange,mango,orange,banana,papaya,mango";

// code 1
const removeDuplicateWords1 = [...new Set(string2.split(','))].join(',');
console.log(removeDuplicateWords1);