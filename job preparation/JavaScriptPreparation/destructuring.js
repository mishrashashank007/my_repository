// object destructuring
const obj = {
    name:"shashank",
    rollno: 55,
    greet: function(){
        console.log("insidefn");
    },
    address:{
        city: "kanpur",
    }
};
let {address} = obj;
let {city} = address;
console.log(city);

// array destructuring
const arr = [145,61,79,156,12];
let [a,b,c] = arr;
console.log(c);

