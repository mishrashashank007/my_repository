let num1 = prompt("Enter first number:");
let num2 = prompt("Enter second number:");
let num3 = prompt("Enter third number:");


if (num1 > num2 && num1 > num3)
{
    alert("The largest number is: " + num1);
} 
else if (num2 > num3 && num2 > num1)
{
    alert("The largest number is: " + num2);
}
else
{
    alert("The largest number is: " + num3);
}