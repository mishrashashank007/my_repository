let arr = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5];
let newArr = [];
// let i = 0;

// while(i < arr.length)
// {
//     if(arr[i] >= 0)
//     {
//         newArr.push(arr[i]);
//     }
//     i++;
// }
// console.log(newArr);
// // Output: [0, 1, 2, 3, 4, 5]   


// arr.forEach((element) =>
// {
//     if(element >= 0)
//     {
//         newArr.push(element);
//     }
// });
// console.log(newArr);
// // Output: [0, 1, 2, 3, 4, 5]


console.log(arr.filter(element => element >= 0))
// Output: [0, 1, 2, 3, 4, 5]