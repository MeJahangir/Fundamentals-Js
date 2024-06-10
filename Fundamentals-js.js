let a = 10;
let b = 5;

// Arithmetic Operations 
console.log(a + b); // 15
console.log(a - b); // 5
console.log(a * b); // 50
console.log(a / b); // 2
console.log(a % b); // 0

// Comparison Operations
console.log(a > b); // true
console.log(a < b); // false
console.log(a == b); // false
console.log(a != b); // true

// Logical Opetions
let isAdult = true;
let hasPermission = false;

console.log(isAdult && hasPermission); // false
console.log(isAdult || hasPermission); // true
console.log(!isAdult); // false

// Ternary Operation
let age = 20;
let access = (age >= 18);
console.log(access); // true 'Granted'

// Addition Function 
function add(x, y) {
    return x + y;
}
console.log(add (5, 10)); // Return = 15

// Subtrection Function 
function subtract(a,b) {
    return a - b;
}
console.log(subtract(10, 4)); // Return = 6
