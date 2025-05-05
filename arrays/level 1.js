const arr = ['ram', 'bahadur', 'thapa']

//Q1 output should be 'RAM-BAHADUR-THAPA'
const joined = arr.join('-').toUpperCase();
console.log(joined);

//Q2 output should be ['ram','thapa']
arr.splice(1,1);
console.log(arr);