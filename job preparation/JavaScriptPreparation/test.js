
function reverseWord(str) {
  const rev_arr = str.split(" ").reverse();
  return rev_arr.map( (currVal) => currVal.split('').reverse().join('') ).join(' ');
}
console.log(reverseWord("Hello world"));

