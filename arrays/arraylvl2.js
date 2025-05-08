const nums = [5, 10, 15, 20];


// Q1: Output the element at index 2
console.log(nums[2])

// Q2: Replace element at index 1 with 100
let arr = [nums[1]=100]
console.log(nums)

// Q3: Output the index of 15
console.log(nums.indexOf(15))

// Q4: Check if 25 is in the array → false
console.log(nums.includes(25))

// Q5: Add 30 at the end
nums.push(30)
console.log(nums)


// Q6: Remove last element
nums.pop()
console.log(nums)

// Q7: Remove first element
nums.splice(0,1)
console.log(nums)

// Q8: Add 0 to the beginning
nums.unshift(0)
console.log(nums)