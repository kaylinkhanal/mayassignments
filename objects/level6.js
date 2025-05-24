//!Q1.Find Unique Elements
// Remove duplicates from the array:
const numbers = [1, 2, 2, 3, 4, 4, 5, 6, 6, 7];
// Expected Output:
//[1, 2, 3, 4, 5, 6, 7]

//? Methos1 :-- By Using Set method
const uniqueno1=[...new Set(numbers)];
console.log(uniqueno1)

//? Methos1 :-- By Using filter() with indexOf()
const uniqueno2=numbers.filter((nums,index)=>{
   return numbers.indexOf(nums) === index;
});
console.log(uniqueno2);

 //!Q2.Group Objects by Property
// Group by the "type" property:
const items = [
  { type: 'fruit', name: 'apple' },
  { type: 'vegetable', name: 'carrot' },
  { type: 'fruit', name: 'banana' },
  { type: 'vegetable', name: 'potato' }
];
// Expected Output:
// {
//   fruit: ['apple', 'banana'],
//   vegetable: ['carrot', 'potato']
// }

 //Q3.Find the Most Frequent Element
// Find the most frequent element:
const colors = ['red', 'blue', 'red', 'green', 'blue', 'red'];
// Expected Output: "red"


//Q4.Convert Object to Array
// Convert this object:
const obj = { apple: 10, banana: 15, orange: 20 };
// Into this array:
//[
//   ['apple', 10],
//   ['banana', 15],
//   ['orange', 20]
// ]

//Q5.Flatten Nested Arrays

// Flatten the array:
const nested = [1, [2, 3], [4, [5, 6]]];

// Expected Output:
// [1, 2, 3, 4, 5, 6]


//!Q6. Sum of All Numbers in an Array
// Sum all the numbers:
const numbers2 = [5, 10, 15, 20, 25];
// Expected Output: 75


//Q7. Find Duplicates in an Array
// Find duplicates:
const values = [1, 2, 3, 2, 4, 5, 6, 5, 7];

// Expected Output: [2, 5]
//Q8. Merge Two Objects
// Merge these two objects:
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

// Expected Output:
// { a: 1, b: 3, c: 4 }

//!Q9. Find Intersection of Two Arrays
// Find common elements:
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [4, 5, 6, 7, 8];
// Expected Output:
// [4, 5]

//!Q10.Sort an Array of Objects
// Sort by the "age" property:
const people = [
  { name: 'John', age: 25 },
  { name: 'Jane', age: 22 },
  { name: 'Jim', age: 28 }
];

// Expected Output:
// [
//   { name: 'Jane', age: 22 },
//   { name: 'John', age: 25 },
//   { name: 'Jim', age: 28 }
// ]

//!Q11.Remove All Falsy Values from Array
// Remove falsy values:
const mixed = [0, 1, false, 2, '', 3, null, 'hello', undefined];
// Expected Output:
// [1, 2, 3, 'hello']

//!Q12.Find the Longest Word in a Sentence
// Find the longest word:
const sentence = "JavaScript is a powerful programming language";
// Expected Output: "programming"

//!Q13.Capitalize the First Letter of Each Word
// Capitalize each word:
const message = "hello world from javascript";
// Expected Output: "Hello World From Javascript"