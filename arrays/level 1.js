const arr = ['ram', 'bahadur', 'thapa']

//Q1 output should be 'RAM-BAHADUR-THAPA'
console.log(arr.join('*').toUpperCase())

//Q2 output should be ['ram','thapa']
arr.splice(1,1)
console.log(arr)



const arr1= ['apple', 'banana', 'cherry']

// Q1. Output should be 'APPLE-BANANA-CHERRY'

console.log(arr1.join('-').toUpperCase())


// Q2. Output should be ['apple', 'cherry']

// arr1.splice(1,1) 
// console.log(arr1)

// Q3. Output should be 'applebanana'
console.log(arr1[0]+arr1[1])

// Q4. Output should be ['APPLE', 'BANANA', 'CHERRY']
console.log( arr1.map(item => item.toUpperCase()));

// Q5. Output should be ['a', 'b', 'c']
console.log(arr1.map(firsletter => {

    return firsletter[0]
}))

// Q6. Output should be 'banana'

// console.log(arr1.splice(1,1).toString())

// Q7. Output should be 3
console.log(arr1.length)

// Q8. Output should be ['cherry', 'banana', 'apple']
 reverse =arr1.reverse()
 console.log(reverse)


// Q9. Output should be ['banana', 'cherry']

// arr1.splice(0,1)
// console.log(arr1)






