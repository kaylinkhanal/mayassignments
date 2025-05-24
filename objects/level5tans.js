// Q1. convert the above array into an object
const arr=[['john',25],['jane',25],['jim',25]];
let obj = Object.fromEntries(arr);
console.log(obj);

//Q2.Q2. Count the occurrences of each color
//expected output
// {
//    red: 2,
//    green: 2,
//    blue: 1
// }
const colors = ['red','green','red','green','blue','red']

let result={};
colors.forEach(element => {
  if (result[element]){
    result[element]++;
  }else{
    result[element]=1;
  }
});
console.log(result);

//!By using reduce Method
const Results=colors.reduce((acc,color)=>{
acc[color]=(acc[color]||0)+1;
return acc;
},{});
console.log(Results);


// Q1.1 Convert this array:
const arr1 = [['apple', 10], ['banana', 15], ['orange', 20]];

// Into this object:
// {
//   apple: 10,
//   banana: 15,
//   orange: 20
// }

//Q2.2 Count the occurrences of each fruit:
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

// Expected Output:
// {
//   apple: 3,
//   banana: 2,
//   orange: 1
// }
