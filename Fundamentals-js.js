
var a = 5; 
var b = 15; 
if (a > b) { 
    console.log('a is greater than b'); 
} else { 
    console.log('a is not greater than b'); // print: a is not greater than b
} 

function multiply(x, y) { 
    return x * y; 
} 
console.log(multiply(3, 7)); //multiply 21

var c = 8; 
var d = 8; 
if (c === d) { 
    console.log('c is equal to d'); //Print: c is equal to d
} else { 
    console.log('c is not equal to d'); 

} 

function subtract(m, n) { 
    return m - n; 
} 
console.log(subtract(10, 4)); //Print: 6

var e = 12; 
var f = 6; 
if (e % f === 0) { 
    console.log('e is divisible by f'); //Print: e is divisible by f
} else { 
    console.log('e is not divisible by f'); 
} 

function divide(p, q) { 
    return p / q; 
} 
console.log(divide(20, 5)); //Print: 4



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

// Multiplication Function 
function multiply( x, y ) {
    return x * y;
}
let result = multiply( 3, 7 );
console.log(result);

// Divide Function add 
function divide(num1, num2) {
    return num1 / num2;
}
let print = divide(20, 5)
console.log(print);

// for looping

for (let a = 1; a = 10; a++) {
    const  = [a];
    
}
console.log(element);