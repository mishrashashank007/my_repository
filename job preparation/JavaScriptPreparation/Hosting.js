//Hosting:
a = 10;
console.log(a);
var a = 10;

//Output is 10 and not error because of hosting. In hosting, variable and function declarations are moved to the top of their scope before code execution. So, when we try to access variable 'a' before its declaration, it is undefined. However, since we have assigned a value to 'a' after its declaration, it will print 10 instead of throwing an error.

//Hosting with functions:
greet(); // Output: Hello, World!
function greet() {
    console.log("Hello, World!");
}
//In this example, the function declaration 'greet' is hoisted to the top of its scope, allowing us to call it before its actual declaration in the code. Therefore, it successfully prints "Hello, World!" without any errors.


var a = 10;
function test(){
    console.log(a);
    var a = 20;
}
test(); // //Output: undefined