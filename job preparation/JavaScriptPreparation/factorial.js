// code 1
function factorial(n) {
    if(n >= 0 ){
        return n > 1 ? n * factorial(n-1) : 1;
    }
    else {
        return ("Invalid input");
    }
    
}

// Test cases to verify your code:
console.log(factorial(2));  // Should print: 120
console.log(factorial(0));  // Should print: 1
console.log(factorial(-3)); // Should print: "Error: Invalid input"


// code 2
function factorial(n) {
    return n >= 0 ? Array.from({length:n},(_, index)=>index+1).reduce((accumulator, currNum)=>{return accumulator*currNum},1) : "Error: Invalid input";
}

// Test cases to verify your code:
console.log(factorial(2));  // Should print: 120
console.log(factorial(0));  // Should print: 1
console.log(factorial(-3)); // Should print: "Error: Invalid input"