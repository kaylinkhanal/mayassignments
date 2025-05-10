
//!Function:Function are reusable blocks of code that perform a specific task.
//!We can define function in 3 Ways:-

//? 1. Function Declaration:-A Function Declaration is the most common way to define a function. It is hoisted, which means it can be called before it is defined in the code.
//!Syntax:-
/*

function functionName(parameters) {
   Function body
}


*/

//!Example:-
function addition(a,b){
return a+b;
}
console.log(`Addtion is ${addition(30,10)}`);

//? 2. Function Expression:-A Function Expression is when a function is assigned to a variable. It is not hoisted, so it must be declared before it is used.
//!Syntax:-
/*

const functionName = function(parameters) {
   Function body
};

*/

//!Function Expression Example:-
const Multiply=function(a,b){
  return a*b;
}
console.log(`The Reasult of Multiplication is ${Multiply(30,10)}`)

//? 3. Arrow Function (ES6):-Arrow Functions, introduced in ES6, provide a more concise syntax for writing functions.An Arrow Function is a short way to write a function in JavaScript. It is written using the => (arrow) symbol.
//!Syntax:-
/*

const functionName = (parameters) => {
  Function body
};

*/
const Divide=(a,b)=>{
  return a/b;
}
console.log("The Reasult of Division is "+ Divide(30,10));



