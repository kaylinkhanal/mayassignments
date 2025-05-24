//! Level 1: Basic Higher-Order Functions on Objects
// Map over an Array of Objects:

// Given an array of student objects, use .map() to create a new array containing only the names of the students.

// const students = [
//   { name: "John", age: 20 },
//   { name: "Jane", age: 22 },
//   { name: "Bob", age: 21 }
// ];
// Filter Objects based on a Property:

// Use .filter() to get all students who are 21 years old or older.

// Find an Object in an Array:

// Use .find() to locate the first student with the name "Jane".

// Check if Any Object Matches a Condition:

// Use .some() to check if there is at least one student whose age is greater than 23.

// Check if All Objects Match a Condition:

// Use .every() to check if all students are 18 years or older.

//! Level 2: Transforming Object Data
// Map Object Keys to an Array:

// Write a function that takes an object and uses .map() to return an array of its keys in uppercase.


// const car = {
//   brand: "Toyota",
//   model: "Corolla",
//   year: 2020
// };
// Filter Object Properties by Value Type:

// Use .filter() to create a new object with only the properties that are of type number.

// Convert Array of Objects to a Single Object:

// Use .reduce() to convert the following array of objects into a single object, where the keys are names and the values are ages:


// const people = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 35 }
// ];
// Find the Oldest Person:

// Use .reduce() to find the person with the maximum age from the people array.

// Flatten Nested Object Arrays:

// Use .flatMap() to flatten an array of objects containing nested arrays of skills:


// const developers = [
//   { name: "John", skills: ["JavaScript", "React"] },
//   { name: "Jane", skills: ["Node.js", "MongoDB"] }
// ];
// Level 3: Advanced Manipulation with Higher-Order Functions
// Group Objects by a Property:

// Use .reduce() to group students by their age.


// const students = [
//   { name: "Alice", age: 22 },
//   { name: "Bob", age: 20 },
//   { name: "Charlie", age: 22 }
// ];
// Transform Object Values Using .map():

// Write a function that takes an object of products and uses .map() to apply a 10% discount to each product price.

// const products = {
//   laptop: 1000,
//   phone: 500,
//   tablet: 300
// };
// Filter Nested Objects Based on a Condition:

// Use .filter() to get only the students who have passed the exam (i.e., marks >= 50) from the nested array:


// const classes = {
//   students: [
//     { name: "John", marks: 45 },
//     { name: "Jane", marks: 78 },
//     { name: "Doe", marks: 52 }
//   ]
// };
// Count Occurrences of a Property Value:

// Use .reduce() to count how many times each city appears in an array of users:


// const users = [
//   { name: "John", city: "Kathmandu" },
//   { name: "Jane", city: "Pokhara" },
//   { name: "Bob", city: "Kathmandu" }
// ];
// Find Duplicates in an Object Array:

// Use .filter() and .map() to find duplicates based on a specific property (id) in an array of objects:


// const orders = [
//   { id: 101, item: "Laptop" },
//   { id: 102, item: "Phone" },
//   { id: 101, item: "Laptop" }
// ];
// Level 4: Real-world Scenarios with Higher-Order Functions
// Inventory Management:

// Use .filter() to get all products with stock less than 5 and .map() to extract only their names.


// const inventory = [
//   { product: "Laptop", stock: 3 },
//   { product: "Mouse", stock: 10 },
//   { product: "Keyboard", stock: 2 }
// ];
// Bank Transactions Summary:

// Use .reduce() to calculate the total balance after a series of deposits and withdrawals.


// const transactions = [
//   { type: "deposit", amount: 500 },
//   { type: "withdrawal", amount: 200 },
//   { type: "deposit", amount: 300 }
// ];
// Employee Salary Increase:

// Use .map() to increase the salary of each employee by 10%.


// const employees = [
//   { name: "John", salary: 4000 },
//   { name: "Jane", salary: 5000 },
//   { name: "Doe", salary: 6000 }
// ];
// Merge Multiple Arrays of Objects:

// Use .flatMap() to merge multiple arrays of user objects into a single list.

// Generate a Leaderboard:

// Use .sort() and .map() to generate a leaderboard from an array of players based on their scores.


// const players = [
//   { name: "Alice", score: 88 },
//   { name: "Bob", score: 92 },
//   { name: "Charlie", score: 85 }
// ];
// Level 5: Complex Use Cases with Higher-Order Functions
// Create a Shopping Cart System:

// Use .map(), .filter(), and .reduce() to:

// Add items to the cart.

// Calculate the total price.

// Remove out-of-stock items.

// Build an Analytics Dashboard:

// Given an array of user logs, use .reduce() to count the number of logins per user.

// Order Management System:

// Use .filter() and .map() to generate an invoice for all orders shipped to a particular city.

// University Student Results Processing:

// Use .map(), .filter(), and .reduce() to:

// Generate a list of passing students.

// Calculate the class average.

// Find the highest scorer.

// Build a Social Media Feed:

// Use .map() to format posts, .filter() to remove flagged posts, and .reduce() to count total likes.