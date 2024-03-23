## variable ##
-----------------------------
Var
---------------------------
 * Var Variable
 * You can re declare
 * You can re assaign
 * Global Scooped
 * var is hosted
 
let
------------------------------
example:
`javascript js`
 * let Variable
 * let a= 10; // Assign 
   let a = 11 // re declare
    a = 12 // re assaign
 ! You can not re declare
 * You can re assaign
 ? Block Scooped
 ! let is not hosted
 
const
-----------------------------
 * const Variable
 ! You can not re declare
 ! You can not re assaign
 ? Block Scooped
 ! const is not hosted
 */
### JavaScript Operator Precedence ##
-----------------------------------------------
 ----- () {} []
 * - +
#### Function ####
-------------------------
##### name Function #####
---------------------------------------
function myFunction(){

    console.log("Hello Function")

}

myFunction()

myFunction()

#####  Function Parameter Pass: #####
----------------------------------------------

/* ==============================
* Code-Driven Invocation:
? Functioned is invoked (called)
* Called directly from other parts of the JavaScript code.
* Used for tasks like calculations, data manipulation, and logic execution.
================================ */
function myFunction(fullname){

    console.log("Hello "+fullname)

}

myFunction("Ashraful Islam")

myFunction("Kalam")

/* =============================
* Event-Driven Invocation
? Function When an event occurs
* Triggered by user interactions or system events.
* Common events: button clicks, form submissions, page loads, etc.
=============================== */
function isSubscribed() {
  console.log('Subcribed');
}
document.getElementById('btn').addEventListener('click', isSubscribed);

/* ====================================
? Automatic (Self-Invoked) Invocation
* Executes immediately after being defined.
* Commonly used with Immediately Invoked Function Expressions (IIFEs).
======================================= */
- 1:
- ------------------
(function(){

console.log("I am sefl call Function")

}())
----------------------------------------
-2:

(function(message){

console.log("I am sefl call Function",message)

}('Yes I am here'))

/* ===================
? Anonymous Function
===================== */
= 1
---------------------------------------
let newArray = [20,30,40,50,60,70]

let result = newArray.filter(function(number){

    return number >30;

})

console.log(result)

let newArray = [20,30,40,50,60,70]

let result = newArray.filter(function(number){

    return number >30;

})

console.log(result)

= 2:
=======================
let newArray = [20,30,40,50,60,70]

let result = newArray.map(function(number){

    return number*2;

})

console.log(result)

/* ===================
? Arrow Functions
===================== */

let arrofunction = (x,y) => (x*y);

console.log(arrofunction(5,6))
---------------------------------
let hello = "";

hello = () => {
  return "Hello World!";
}
console.log(hello())

// JavaScript Objects:
====================