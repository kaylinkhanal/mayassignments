// 1. Print each element in ['apple', 'banana', 'cherry'] using a for loop
// 2. Print each name in ['ram', 'sita', 'hari'] with "Hi " using forEach
// 3. Add "Welcome " before each name in an array using map
// 4. Print numbers from 1 to 5 using a loop
// 5. Square every number in [1, 2, 3, 4, 5] using map
// 6. Print each number in [10, 20, 30] using a loop
// 7. Print "Item: " followed by each item in ['pen', 'pencil', 'eraser'] using forEach
// 8. Convert each string in ['one', 'two', 'three'] to uppercase using map




// q4 solution 
const nums =[]
// Using a for loop to print numbers from 1 to 5
for (let i = 1; i <= 3; i++) {
  var num=i*10;
  // console.log(num);
nums.push(num);
  }
console.log(nums);




// // q1 solution 

// const fruits = ['apple', 'banana', 'cherry']

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i])
// }


// // q3 soln 

const name = ['ram', 'sita', 'hari'];

name.forEach(element => {
  console.log( ' Welcome ' + element);
});

// // q5 solution 

// const nums = [1 ,2 ,3, 4, 5]
// const output = nums.map(num=> num * num)
// console.log(output)

// // q7 soln 

const item = ['pen','pencil','eraser']
item.forEach(hello => {
  console.log('Item : ' + hello)
})


// qn 8

const numbs = ['one', 'two', 'three']
const up=numbs.map((item)=>{ 
 return item.toUpperCase() 
});
console.log(up);







 