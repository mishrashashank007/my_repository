//  ----------------------------------------------------------------------------------------------------

//   4 pillars of DOMException

//   1. Selection of an Element
//   2. change=ing HTML
//   3. Changing css
//   4. Event Listner


//   1. Selection of an Element---
//  document.querySelector("h1")
//  document.querySelector("#box")  select id
//  document.querySelector(".box")  select class

//  var a = document.querySelector("h1")
//  console.log(a);


//   2. Changing HTML---
//  a.innerHTML = "changed HTML";


//   3. Changing CSS---
//  a.style.color = "red";
//  a.style.backgroundColor = "black";


//   4. Event Listener---
//  a.addEventListener("click", function() {
//      alert("Heading clicked!");
//  });

//  ------------------------------------------------------------------------------------------------------



//  ------------------------------------------------------------------------------------------------------
// bulb program
// var bulb = document.querySelector("#bulb")
// var button = document.querySelector("button")

// var flag = 0;

// button.addEventListener("click", function()
// {
//     if(flag == 0)
//     {
//         bulb.style.backgroundColor = "yellow";
//         flag = 1;
//     }
//     else
//     {
//         bulb.style.backgroundColor = "white";
//         flag = 0;
//     }
// })



//  ------------------------------------------------------------------------------------------------------

// var h1 = document.querySelector("h1"); // for selecting only first occurrence

// var h = document.querySelectorAll("h1");
// console.log(h);

// h.forEach(function(e)
// {
//     console.log(e);
// });

//  ------------------------------------------------------------------------------------------------------



//  ------------------------------------------------------------------------------------------------------

// var box = document.getElementById("box");    // select by id
// var box = document.getElementsByClassName("box");    // select by class

// var box = document.querySelector("#box");    // select by id
// var box = document.querySelector(".box");    // select by class

// box.innerHTML = "<h1>Hello World</h1>";    //output: <h1>Hello World</h1>
// box.textContent = "Hello World";    //output: Hello World
// box.textContent = "<h1>Hello World</h1>";    //output: <h1>Hello World</h1>

//  ------------------------------------------------------------------------------------------------------
