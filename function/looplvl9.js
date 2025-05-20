// Q1. From [1, 2, 3, 4], create ["odd", "even", "odd", "even"]
const nums = [1, 2, 3, 4];
const parity = nums.map(n => n % 2 === 0 ? 'even' : 'odd');
console.log(parity);

// Q2. Count how many words start with 'b' in ['bat', 'apple', 'ball', 'cat']
const words = ['bat', 'apple', 'ball', 'cat'];
const countB = words.filter(word => word.startsWith('b')).length;
console.log(countB);

// Q3. From [10, 15, 20], subtract 5 from each and keep only values > 10
const arr = [10, 15, 20];
const result = arr.map(n => n - 5).filter(n => n > 10);
console.log(result);

// Q4. Print both index and value of numbers in [4, 5, 6]
[4, 5, 6].forEach((val, idx) => console.log(`Index ${idx}: ${val}`));

// Q5. From ['Tom', 'Jerry', 'Spike'], get ['Hello Tom!', 'Hello Jerry!', 'Hello Spike!']
const names = ['Tom', 'Jerry', 'Spike'];
const greetings = names.map(name => `Hello ${name}!`);
console.log(greetings);

// Q6. Filter out strings longer than 4 chars from ['dog', 'lion', 'tiger', 'ant']
const animals = ['dog', 'lion', 'tiger', 'ant'];
const shortNames = animals.filter(a => a.length <= 4);
console.log(shortNames);

// Q7. Convert an object { a: 5, b: 10 } to an array like ['a=5', 'b=10']
const obj = { a: 5, b: 10 };
const entries = Object.entries(obj).map(([k, v]) => `${k}=${v}`);
console.log(entries);

// Q8. From [1, 2, 3], generate ['1 is odd', '2 is even', '3 is odd']
const numbers = [1, 2, 3];
const desc = numbers.map(n => `${n} is ${n % 2 === 0 ? 'even' : 'odd'}`);
console.log(desc);
