const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Q1) Create a new array of squares of even numbers

// Q2) Find the sum of all odd numbers

// Q3) Remove numbers that are divisible by 3

// Q4) Reverse the array without using reverse()

// Q5) Chunk the array into groups of size 3

//1 solution
console.log('output of q1');

const evenNumbers = numbers.filter(num => num % 2 === 0)
console.log(evenNumbers);
const output = evenNumbers.map(number => Math.pow(number, 2))
console.log(output);

//2 solution
console.log('output of q2');
const oddNumbers = numbers.filter(num => num % 2 !== 0)
console.log(oddNumbers);
console.log(oddNumbers.reduce((acc, current) => { return acc + current }, 0))

//3 solution
console.log('output of q3');
const divisibleBy3 = []
numbers.map(number => {
  if (number % 3 !== 0)
    divisibleBy3.push(number)
})
console.log(divisibleBy3);

//4 solution
console.log('output of q4');
const reversedArray = []
for (let i = numbers.length - 1; i >= 0; i--) {
  reversedArray.push(numbers[i])
}
console.log(reversedArray);
// reverse method
console.log(numbers.reverse());


//5 solution
console.log('output of q5');

//cann't deal with nested array by myself as we do in c and c++
// let sol[][];
// const groupSize = 3
// const arrayRequired = Math.ceil(numbers.length/groupSize);
// console.log(typeof arrayRequired)
// for(i = 0;i<arrayRequired;i++){
//     for(j=0;j<groupSize;j++){

//     }
// }
// console.log((arrayRequired));

// By chatgpt

const chunkSize = 3;
const chunked = [];

for (let i = 0; i < numbers.length; i += chunkSize) {
  const chunk = numbers.slice(i, i + chunkSize);
  chunked.push(chunk);
}
console.log(chunked);

const name = ['ram', 'shyam']
name.map(nam => <li>{nam}</li>)