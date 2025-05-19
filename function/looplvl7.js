// Q1. From ['Ram', 'Sita', 'Hari'], create ["Hi Ram", "Hi Sita", "Hi Hari"]
const names1 = ['Ram', 'Sita', 'Hari'];
const greetings = names1.map(name => `Hi ${name}`);
console.log(greetings);

// Q2. From [5, 12, 18, 7], filter numbers greater than 10
const numbers1 = [5, 12, 18, 7];
const greaterThanTen = numbers1.filter(num => num > 10);
console.log(greaterThanTen);

// Q3. Print all names from ['apple', 'banana', 'cherry'] using forEach
const fruits = ['apple', 'banana', 'cherry'];
fruits.forEach(fruit => console.log(fruit));

// Q4. Double every number in [1, 2, 3, 4] using map
const nums = [1, 2, 3, 4];
const doubled = nums.map(n => n * 2);
console.log(doubled);

// Q5. Count how many names include the letter 'a' in ['ram', 'sita', 'bob']
const names2 = ['ram', 'sita', 'bob'];
const countWithA = names2.filter(name => name.includes('a')).length;
console.log(countWithA);

// Q6. Convert an array of numbers [1, 2, 3] to ['1', '2', '3'] using map
const nums2 = [1, 2, 3];
const asStrings = nums2.map(num => String(num));
console.log(asStrings);

// Q7. Print key-value pairs using forEach from: { a: 1, b: 2 }
const obj = { a: 1, b: 2 };
Object.entries(obj).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});

// Q8. Filter out empty strings from ['apple', '', 'banana', '', 'cherry']
const items = ['apple', '', 'banana', '', 'cherry'];
const nonEmpty = items.filter(item => item !== '');
console.log(nonEmpty);