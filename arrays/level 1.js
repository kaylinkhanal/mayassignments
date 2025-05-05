const arr = ['ram', 'bahadur', 'thapa']

//Q1 output should be 'RAM-BAHADUR-THAPA'
const splitedArrau = arr.slice(' ').join('-')
console.log(splitedArrau.toUpperCase())

//Q2 output should be ['ram','thapa']

//By splice method
const newOutput = arr.slice(' ')
newOutput.splice(1, 1)
console.log(newOutput);

//by another method
// const output = [newOutput[0], newOutput[2]]
// console.log(output);

