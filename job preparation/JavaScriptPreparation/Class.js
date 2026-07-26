// ES5 (OLD METHOD - Constructor Functions & Prototypes)
// --- BASE ---
function UserES5(username) {
    this.username = username;
}

UserES5.prototype.getDetails = function() {
    console.log("User ka naam hai: " + this.username);
};

// --- INHERITANCE (Derived) ---
function TeacherES5(username, email) {
    // Parent constructor ko current object ('this') ke sath call karna
    UserES5.call(this, username); 
    this.email = email;
}

// Parent ki prototype chain ko manually link karna
TeacherES5.prototype = Object.create(UserES5.prototype);

// Prototype link overwrite hone ke baad constructor ko wapas fix karna
TeacherES5.prototype.constructor = TeacherES5;

// Teacher ka apna naya method
TeacherES5.prototype.addCourse = function() {
    console.log("Naya course add kiya by: " + this.email);
};

// --- TESTING ---
var teacher1 = new TeacherES5("Hitesh", "hitesh@chai.com");
teacher1.getDetails(); // Output: User ka naam hai: Hitesh
teacher1.addCourse();  // Output: Naya course add kiya by: hitesh@chai.com



// ES6 (NEW METHOD - Classes & Syntactic Sugar)
// --- BASE ---
class UserES6 {
    constructor(username) {
        this.username = username;
    }

    getDetails() {
        console.log(`User ka naam hai: ${this.username}`);
    }
}

// --- INHERITANCE (Derived) ---
class TeacherES6 extends UserES6 {
    constructor(username, email) {
        // Parent ke constructor ko call karna
        super(username); 
        this.email = email;
    }

    // Teacher ka apna naya method
    addCourse() {
        console.log(`Naya course add kiya by: ${this.email}`);
    }
}

// --- TESTING ---
const teacher2 = new TeacherES6("Piyush", "piyush@code.com");
teacher2.getDetails(); // Output: User ka naam hai: Piyush
teacher2.addCourse();  // Output: Naya course add kiya by: piyush@code.com

