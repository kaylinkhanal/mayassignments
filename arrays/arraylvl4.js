const name = "hello world";

// Q1: Convert string to array → ['h','e','l','l','o',' ','w','o','r','l','d']
const stringToArray = name.split('')
console.log(stringToArray);

// Q2: Convert to array of words → ['hello', 'world']
const wordsArray = name.split(' ');
console.log(wordsArray);

// Q3: Get first word from the array
const firstWord = wordsArray[0];
console.log(firstWord);

// Q4: Convert all letters to uppercase and join with space
const upperCaseString = name.toUpperCase().split('').join(' ');
console.log(upperCaseString);

// Q5: Replace 'world' with 'javascript'
const replacedString = name.replace('world', 'javascript');
console.log(replacedString);

const names = ['ram', 'gita', 'hari'];

// Q6: Convert all names to uppercase → ['RAM', 'GITA', 'HARI']
const upperCaseNames = names.map(name => name.toUpperCase());
console.log(upperCaseNames);

// Q7: Join names with ' & ' → 'ram & gita & hari'
const joinedNames = names.join(' & ');
console.log(joinedNames);

// Q8: Add 'sita' to the second position → ['ram', 'sita', 'gita', 'hari']
names.splice(1, 0, 'sita');
console.log(names);