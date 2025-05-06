const numbers = [5, 12, 8, 130, 44];
let output = [...numbers]
// Q1) Find the first number greater than 10

// Q2) Return a new array with only numbers less than 100

// Q3) Add number 200 at the end of the array

// Q4) Remove the first two numbers from the array

// Q5) Find the index of number 44

//1 solution
let greaterNumberthan10 = []
for (let number of numbers)
    if (number > 10)
        greaterNumberthan10.push(number)

console.log(greaterNumberthan10);

//2 solution
let numberLessThan100 = []
for (let number of numbers)
    if (number < 100)
        numberLessThan100.push(number)

console.log(numberLessThan100)

//3 solution
numbers.push(200)
console.log(numbers)

//4 solution
//slice method
console.log(numbers.slice(2, 5))
//splice method used to both add and remove the element form the array
numbers.splice(0, 2)

console.log(numbers);

//5 solution
// console.log(output);

console.log(output.indexOf(44))
