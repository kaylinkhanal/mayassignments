// 1. Use map to reverse each string in ['hi', 'ok']
const greetings = ['hi', 'ok'];
const reversed = greetings.map(word => word.split('').reverse().join(''));
console.log(reversed);

// 2. Use filter to return items containing the letter 'a' in ['cat', 'dog', 'apple']
const words = ['cat', 'dog', 'apple'];
const withA = words.filter(word => word.includes('a'));
console.log(withA);

// 3. Use map to create greeting messages like 'Hello Ram!' for each name
const names = ['Ram', 'Sita', 'Hari'];
const greetingsList = names.map(name => `Hello ${name}!`);
console.log(greetingsList);

// 4. Use forEach to log "Found!" for each match to 'target' in ['target', 'miss', 'target']
const values = ['target', 'miss', 'target'];
values.forEach(val => {
  if (val === 'target') {
    console.log('Found!');
  }
});

// 5. Use filter to remove numbers <= 0 from [0, -1, 5, 8]
const nums = [0, -1, 5, 8];
const positives = nums.filter(num => num > 0);
console.log(positives);

// 6. Use map to pad each string to 5 characters in ['a', 'bb']
const padded = ['a', 'bb'].map(str => str.padEnd(5, '_'));
console.log(padded);

// 7. Use forEach to find total length of all strings in ['abc', 'de']
const strArr = ['abc', 'de'];
let totalLength = 0;
strArr.forEach(str => totalLength += str.length);
console.log(totalLength);

// 8. Use filter to keep only truthy values in [0, 'hello', false, 1]
const mix = [0, 'hello', false, 1];
const truthy = mix.filter(Boolean);
console.log(truthy);
