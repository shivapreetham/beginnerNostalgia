// "";           // primitive string
// 0;            // primitive number
// false;        // primitive boolean

// {};           // object object
// [];           // array object
// /()/          // regexp object
// function(){}; // function

// onchange	An HTML element has been changed
// onclick	The user clicks an HTML element
// onmouseover	The user moves the mouse over an HTML element
// onmouseout	The user moves the mouse away from an HTML element
// onkeydown	The user pushes a keyboard key
// onload	The browser has finished loading the page

let text2 = "We are the so-called \"Vikings\" from the north.";


// When using the == operator, x and y are equal:

let x1 = "John";
let y1 = new String("John");
// When using the === operator, x and y are not equal:

let x2 = "John";
let y2 = new String("John");


// (x == y) true or false?

let x3 = new String("John");
let y3 = new String("John");


// Never Create Strings as Objects
// JavaScript objects cannot be compared.

// false

// (x === y) true or false?

let x = new String("John");
let y = new String("John");

// Never Create Strings as Objects
// JavaScript objects cannot be compared.

// false

