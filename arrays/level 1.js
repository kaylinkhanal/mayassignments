const arr = ['ram', 'bahadur', 'thapa']

//Q1 output should be 'RAM-BAHADUR-THAPA'
 const newArr = arr.join("-");
 console.log(newArr);
 console.log(newArr.toLocaleUpperCase());
 
 


const output = [arr[0], arr[2]];
console.log(output); // ['ram', 'thapa']


// Reverse the array
const reversedArr = arr.slice().reverse();
console.log(reversedArr); // Output: ['thapa', 'bahadur', 'ram']

// Add elements to the array
const extendedArr = [...arr, 'kumar', 'sharma'];
console.log(extendedArr); // Output: ['ram', 'bahadur', 'thapa', 'kumar', 'sharma']



// Filter elements with more than 4 characters
const filteredArr = arr.filter(name => name.length > 4);
console.log(filteredArr); // Output: ['bahadur', 'thapa']


// Find the first element starting with 'b'
const startsWithB = arr.find(name => name.startsWith('b'));
console.log(startsWithB); // Output: 'bahadur'


// Check if all elements have more than 3 characters
const allMoreThanThree = arr.every(name => name.length > 3);
console.log(allMoreThanThree); // Output: true

