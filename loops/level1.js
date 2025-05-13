//! Level 1 (Beginner): Basic Usage & Understanding

//Q1. Display Each Element of an Array:
// Write a JavaScript program that uses forEach to print each element of the array const numbers = [10, 20, 30, 40, 50].
const numbers = [10, 20, 30, 40, 50];
console.log(numbers)
numbers.forEach(element=>console.log(element));
// numbers.forEach(element => {
//   console.log(element);
// });

//Q2. Square of Each Element:
// Write a program that uses map to create a new array that contains the squares of each number from the array const numbers = [2, 4, 6, 8].
// Expected Output: [4, 16, 36, 64].
const num2 = [2, 4, 6, 8];
// const square=num2.map(item2=>{
//    return item2**2;
// });
const square=num2.map(item=>Math.pow(item,2));
console.log("Orginal: ",num2)
console.log("Square: ",square)

// Q3.Filter Even Numbers:
// Write a JavaScript function that uses filter to extract all the even numbers from the array const numbers = [1, 2, 3, 4, 5, 6].
// Expected Output: [2, 4, 6].
const num3=[1, 2, 3, 4, 5, 6];
// const even=num3.filter(item=>{
// if (item%2===0){
// return item;
// }
// });
const even=num3.filter(items=>items%2===0);
console.log("Orginal Numbers: ",num3);
console.log("Even Numbers: ",even);

//Q4. Sum of All Elements:
// Write a program to find the sum of all elements in the array const numbers = [5, 10, 15, 20] using reduce.
// Expected Output: 50.
const num4=[5, 10, 15, 20];
// const sum=num4.reduce((accumulator,currentValue)=>{
// return accumulator+currentValue;
// },0);
const sum = num4.reduce((acc, curr) => acc + curr, 0);
console.log("Orginal Numbers: ",num4);
console.log("Sum of Numbers: ",sum);