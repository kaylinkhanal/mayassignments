const arr = ['ram', 'bahadur', 'thapa']

//Q1 output should be 'RAM-BAHADUR-THAPA'
const splitedArrau = arr.join('-')
console.log(splitedArrau.toUpperCase())

//Q2 output should be ['ram','thapa']

//By splice method

arr.splice(1, 1)
console.log(arr);

//by another method
// const output = [newOutput[0], newOutput[2]]
// console.log(output);

