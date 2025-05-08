const letters = ['a', 'b', 'c', 'd', 'e'];

// Q1: Output first 3 elements → ['a','b','c']
console.log(letters.slice(0,3))

// Q2: Output last 2 elements → ['d','e']
console.log(letters.slice(3,5))

// Q3: Output middle 3 elements → ['b','c','d']
console.log(letters.slice(1,4))

// Q4: Replace 'c' with 'z' using index
letters[2] = 'z';
console.log(letters)

// Q5: Insert 'x' at index 2 using splice
letters.splice(2, 0, 'x');
console.log(letters)

// Q6: Remove 1 element from index 1 using splice
letters.splice(1, 1);
console.log(letters);

// Q7: Join all elements with '-' → 'a-b-c-d-e'
const joinedString = letters.join('-')
console.log(joinedString)

// Q8: Create a copy of the array using slice
const copiedArray = letters.slice();
console.log(copiedArray);
