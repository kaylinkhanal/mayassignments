const arr = ['ram', 'bahadur', 'thapa']

//Q1 output should be 'RAM-BAHADUR-THAPA'
console.log(arr.join('-').toUpperCase());


//Q2 output should be ['ram','thapa']
arr1=arr[0];
arr2=arr[2];

console.log(arr1.concat(arr2));