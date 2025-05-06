const arr = ['ram', 'shyam', 'hari', 'sita', 'gita']

//Q1) output should be 'ram'
console.log(arr[0]);
// // Q2) output should be ['ram','shyam','hari','sita']
arr.pop()
console.log(arr);

//Q3) output should be ['hari','sita']
const newarr = arr.splice(2, 2)
console.log(newarr)

//Q4) output should be ['gopla',]
let arr3 = ['ram', 'shyam', 'hari', 'sita', 'gita']
const arr2 = ['gopal', 'rajesh']
console.log([...arr2, ...arr3])

// calculate arr2 length,expected output is 2
console.log(arr2.length)

//task
//install git
//repositoty