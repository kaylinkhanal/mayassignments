const arr = ['ram', 'shyam', 'hari', 'sita', 'gita']

//Q1) output should be 'ram'
console.log('question 1 solution');

console.log(arr[0]);
// // Q2) output should be ['ram','shyam','hari','sita']
console.log('question 2 solution');
arr.pop()
console.log(arr);

//Q3) output should be ['hari','sita']
console.log('question 3 solution');
const newarr = arr.splice(2, 2)
console.log(newarr)

//Q4) output should be ['gopla','rajesh','ram','shyam','hari','sita','gita']
console.log('question 4 solution');
let arr3 = ['ram', 'shyam', 'hari', 'sita', 'gita']
const arr2 = ['gopal', 'rajesh']
console.log([...arr2, ...arr3])

//Q5 calculate arr2 length,expected output is 2
console.log('question 5 solution');
console.log(arr2.length)

//task
//install git
//repositoty