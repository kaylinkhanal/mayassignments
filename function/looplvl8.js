// Q1. From ['Ram', 'Sita', 'Hari'], create ["Ram has 3 letters", "Sita has 4 letters", "Hari has 4 letters"]
const names1 = ['Ram', 'Sita', 'Hari'];
const nameLengths = names1.map(name => `${name} has ${name.length} letters`);
console.log(nameLengths);

// Q2. From [10, 20, 30, 40], create an array of half the values that are >= 30
const numbers1 = [10, 20, 30, 40];
const halved = numbers1.filter(num => num >= 30).map(num => num / 2);
console.log(halved);

// Q3. Print index and value for each element in ['x', 'y', 'z']
const letters = ['x', 'y', 'z'];
letters.forEach((letter, index) => console.log(`Index ${index}: ${letter}`));

// Q4. From [1, 2, 3, 4], create an array of squares only if the number is even
const nums = [1, 2, 3, 4];
const evenSquares = nums.filter(n => n % 2 === 0).map(n => n ** 2);
console.log(evenSquares);

// Q5. Count how many strings have length > 3 in ['dog', 'lion', 'antelope', 'cat']
const animals = ['dog', 'lion', 'antelope', 'cat'];
const countLong = animals.filter(animal => animal.length > 3).length;
console.log(countLong);

// Q6. Convert an array of mixed types [1, '2', 3, '4'] to all numbers
const mixed = [1, '2', 3, '4'];
const numbersOnly = mixed.map(item => Number(item));
console.log(numbersOnly);

// Q7. Print only the keys from an object { x: 10, y: 20, z: 30 } using forEach
const obj = { x: 10, y: 20, z: 30 };
Object.keys(obj).forEach(key => console.log(key));

// Q8. Remove all falsy values from [0, 'apple', '', null, 'banana', false, 'cherry']
const values = [0, 'apple', '', null, 'banana', false, 'cherry'];
const truthyValues = values.filter(Boolean);
console.log(truthyValues);
