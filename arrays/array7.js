//Q1) Extract only the unique user names from a list of objects that may have duplicates.
const users = [{ name: "Ram" }, { name: "Sita" }, { name: "Ram" }];
// Extract only unique user names
console.log("1 op");

const onlyName = [];
users
  .map((item) => item.name)
  .forEach((item) => {
    if (!onlyName.includes(item)) {
      onlyName.push(item);
    }
  });
console.log(onlyName);

//2. Flatten a nested array [1, [2, [3, [4, 5]]]] to a single level.
const nested = [1, [2, [3, [4, 5]]]];
// Flatten to single level
// hard level
// Hint 1: Recursion Approach
// Define a function that loops through the array:

// If the item is an array, recursively flatten it.

// If it’s a value, just push it to the result.

// 🔹 Hint 2: Using flat() (built-in)
// JavaScript’s .flat(depth) method can flatten arrays up to a specified depth.

// using hint 1
console.log("2 op");
const n = [];
function Flat(arrays) {
  arrays.forEach((item) => {
    if (Array.isArray(item)) {
      Flat(item); // Bap cheej recursive funtion call done.
    } else n.push(item);
  });
}
Flat(nested);
console.log(n);
// const flatt = []
// let newarray = []
// console.log(typeof newarray) // object
// while (typeof nested[nested.length - 1] !== 'number') {
//     nested.forEach(item=>{
//         if(!Array.isArray(item))
//             newarray.push(item)
//         else
//     })
// }
//     const op2 = nested.forEach(item => {
//         if (Array.isArray(item)) // array is object we don't have array here instead of typeof we can use isArray() method

// })

//hint 2
for (let i = nested.length - 1; i >= 0; i--) {}
const flatt = [];
let newarray = [];
nested.forEach((item) => {
  if (!Array.isArray(item)) {
    flatt.push(item);
  } else {
    const flatted = item.flat();
    newarray = [...flatt, ...flatted];
  }
});
// console.log(result)
console.log(newarray); // last array doesn't flatternd

//3. From an array of transactions, return the total credits and total debits separately.
const transactions = [
  { type: "credit", amount: 100 },
  { type: "debit", amount: 500 },
  { type: "credit", amount: 200 },
  { type: "debit", amount: 50 },
  { type: "credit", amount: 100 },
  { type: "debit", amount: 50 },
];
// Return total credits and total debits
console.log("3 op");

const opp1 = transactions
  .filter((item) => item.type === "credit")
  .reduce((acc, value) => {
    return acc + value.amount;
  }, 0);
console.log(opp1);
const opp2 = transactions
  .filter((item) => item.type === "debit")
  .reduce((acc, value) => {
    return acc + value.amount;
  }, 0);
console.log(opp2);

//4. Given an array of objects with nested scores, return a new array with each user's average score.
const students = [
  { name: "Ram", scores: { math: 80, english: 70 } },
  { name: "Sita", scores: { math: 90, english: 85 } },
];
// Return average score per student
console.log("4 op");
const score = students.map((student) => {
  return (student.scores.math + student.scores.english) / 2;
});
console.log(score);
//5. Return the intersection of two arrays (common values, without duplicates).
const a = [1, 2, 3, 4];
const b = [3, 4, 5, 6];
// Return intersection
console.log("5 op");

const combine = [...a, ...b];
const common = [];
combine
  .filter((numbers) => {
    if (a.includes(numbers) && b.includes(numbers)) return numbers;
  })
  .forEach((numbers) => {
    if (!common.includes(numbers)) common.push(numbers);
  });
console.log(combine);
console.log(common);

//6. Group an array of users by their role (e.g., { admin: [...], user: [...] }).
const users1 = [
  { name: "Ram", role: "admin" },
  { name: "Sita", role: "user" },
  { name: "Gita", role: "user" },
  { name: "Hari", role: "admin" },
  { name: "bishal", role: "user" },
];
console.log("6 op");
const results = {
  admin: [],
  user: [],
};
users1.forEach((user) => {
  if (user.role === "admin") results.admin.push(user);
  else results.user.push(user);
});
console.log(results);
// Group by role

// Return the first non-repeating character in an array of single-character strings.
const chars = ["a", "b", "a", "c", "b", "d"];
// First non-repeating character
const op5 = [];
chars.filter((item) => {});
console.log(op5);

// From an array of blog posts, return the post with the longest content.
const blogs = [
  { title: "Post 1", content: "Hello world" },
  { title: "Post 2", content: "This is a very long blog post..." },
];
// Find post with longest content
const content = blogs
  .sort((a, b) => {
    if (a.content.length - b.content.length > 0) return 1;
    if (a.content.length - b.content.length < 0) return -1;
    else return 0;
  })
  .reverse();
console.log(content[0]);

// Reorder an array of numbers so that all even numbers come before odd numbers.
const nums = [3, 2, 1, 4, 7, 6];
// Reorder: even before odd
const even = nums.filter((item) => item % 2 === 0);
const odd = nums.filter((item) => !(item % 2 === 0));
const opp6 = [...even, ...odd];
console.log(opp6);
// Count the number of times each word appears in an array of strings.
const words = ["apple", "banana", "apple", "orange"];
// Word count frequency
const count = {};
words.forEach((item) => {
  item.split("").forEach((chars) => {
    if (count[chars]) count[chars]++;
    else count[chars] = 1;
  });
});
console.log(count);
