const users = [
  { name: "Ram", age: 18 },
  { name: "Shyam", age: 25 },
  { name: "Hari", age: 14 },
  { name: "Gita", age: 20 }
];

// Q1) Return names of users who are 18 or older

// Q2) Return array of user ages only

// Q3) Find if all users are above 16

// Q4) Add a new user { name: 'Sita', age: 22 } to the list

// Q5) Sort users by age in ascending order

//1 solution
console.log("question 1 output");

const adult = users.filter(user => (user.age >= 18))
console.log(adult);

//2 solution
console.log("question 2 output");

let ages = users.map(user => user.age)
console.log(ages)
//3 solution
console.log("question 3 output");
let above16Users = users.filter(user => user.age > 16)
console.log(above16Users);
//4 solution
console.log("question 4 output");
users.push({ name: 'Sita', age: 22 })
console.log(users);

//5 solution
console.log("question 5 output");
const userAge = users.map(user => user.age).sort()
console.log(userAge)