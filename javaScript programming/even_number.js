var num = prompt("Upto what number do you want to generate even numbers?: ");

let i = 0;
let store = [];

while (i <= num)
{
    if (i % 2 === 0)
    {
        store.push(i);
    }
    i++;
}

console.log(`Even numbers from 0 to ${num}: ${store.toString()}`);