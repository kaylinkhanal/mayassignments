// Q1. From [[1,2], [3,4]], flatten to [1, 2, 3, 4]
const nested = [[1,2], [3,4]];
const flat = nested.flat();
console.log(flat);

// Q2. From ['abc', 'def'], create [['a','b','c'], ['d','e','f']]
const words = ['abc', 'def'];
const split = words.map(w => w.split(''));
console.log(split);

// Q3. Count total letters in ['hi', 'hello', 'yo']
const strings = ['hi', 'hello', 'yo'];
const totalLength = strings.reduce((sum, word) => sum + word.length, 0);
console.log(totalLength);

// Q4. Multiply each number by its index in [10, 20, 30]
const nums = [10, 20, 30];
const result = nums.map((num, idx) => num * idx);
console.log(result);

// Q5. Print key and value length from { a: 'apple', b: 'ball' }
const obj = { a: 'apple', b: 'ball' };
Object.entries(obj).forEach(([k, v]) => console.log(`${k}: ${v.length}`));

// Q6. From [1, 2, 3], make a string "1-2-3"
const arr = [1, 2, 3];
const joined = arr.join('-');
console.log(joined);

// Q7. Filter out arrays with length < 3 from [['a'], ['x','y','z'], ['1','2']]
const nestedArr = [['a'], ['x','y','z'], ['1','2']];
const filtered = nestedArr.filter(sub => sub.length >= 3);
console.log(filtered);

// Q8. Capitalize first letter of each word in ['ram', 'sita']
const names = ['ram', 'sita'];
const caps = names.map(name => name[0].toUpperCase() + name.slice(1));
console.log(caps);
