let num = 12345;
let sum = 0;

while (num > 0)
{
    sum += num % 10; // Add the last digit to sum
    num = Math.floor(num / 10); // Remove the last digit
}
console.log(sum); // Output: 15
// This calculates the sum of the digits in the number 12345.