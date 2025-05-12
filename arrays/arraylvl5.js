const nums = [1, 2, 3, 4];

// Q1: Add 5 to the end
nums.push(5);
console.log(nums);

// Q2: Remove the first number
nums.shift();
console.log(nums);

// Q3: Replace second number with 100
nums[1] = 100;
console.log(nums);

// Q4: Check if number 3 exists
const includesThree = nums.includes(3);
console.log(includesThree);

// Q5: Add 0 to the beginning
nums.unshift(0);
console.log(nums);

// Q6: Output number at index 2
const elementAtIndexTwo = nums[2];
console.log(elementAtIndexTwo);

// Q7: Remove last number
nums.pop();
console.log(nums);

// Q8: Output the number of elements in the array
const arrayLength = nums.length;
console.log(arrayLength);  