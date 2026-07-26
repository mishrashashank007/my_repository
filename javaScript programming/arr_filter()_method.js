let arr = [1, 2, 3, 4, 5, 6, 2, 3];
let num = 2;

function removeElement(arr, num)
{
  return arr.filter(element => element !== num);
}

let newArr = removeElement(arr, num);
console.log(newArr);