const arr = ['ram', 'bahadur', 'thapa']

//Q1 output should be 'RAM-BAHADUR-THAPA'
console.log(arr.join("-").toUpperCase());

//Q2 output should be ['ram','thapa']
result1=arr.splice(1,1);
console.log(arr);
