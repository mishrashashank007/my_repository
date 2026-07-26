let num = 7;

function fact_of_a_num(n)
{
    let fact = 1;
    while (n > 1)
    {
        fact *= n;
        n--;
    }
    return fact;
}   
console.log(fact_of_a_num(num));