const arr = ['ram', {math: 10, english: 20}, ['bhaktapur','sanepa'], {gender: 'Male'}]

// Q1. calcualte the total scores scored by ram
//expected output 30

const sum = Object.values(arr[1]).reduce((acc, score) => acc + score, 0);
console.log('total score:', sum); 

const newArray = Object.values(arr[1])

let totalScore = 0;

const forEachSum = newArray.forEach((item) => {

    totalScore = totalScore + item;  
})

console.log('total score using forEach is', totalScore);



const users =['ram' ,'shyam',null, undefined, false, 'gopal']

//Q2. output should be ['ram', 'shyam', 'gopal']

// const filteredUsers = users.filter((user) => user !== null && user !== undefined && user !== false);
const filteredUsers = users.filter((user) => user)
console.log('filtered users:', filteredUsers); 

// altternative method
  const output = users.filter((item) => {
    return item;
  });
  console.log("filtered users with alternative method:", output);
  

const touristSpots = [
    { name: 'Bhaktapur', location: 'Bhaktapur' },
    { name: 'Patan', location: 'Lalitpur' },
    { name: 'Kathmandu', location: 'Kathmandu' },
    { name: 'Pokhara', location: 'Kaski' },
  ];

//Q3. output should be ['Bhaktapur', 'Patan', 'Kathmandu', 'Pokhara']

const touristSpotNames = touristSpots.map((spot) => spot.name);
console.log(touristSpotNames);



const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Q4. chaining of methods: find first 3 even numbers and multiply each by 5
//expected output [10, 20, 30]


const filteredNumbers = numbers.filter((num) => {
    if(num %2 === 0){
        return num;
    }
}).slice(0,3).map((num)=>{
    num = num*5;
    return num;
})
console.log('first 3 even numbers:', filteredNumbers);

// const filteredNumbers = numbers.filter((num) => num % 2 === 0).slice(0, 3).map((num) => num * 5);
// console.log('first 3 even numbers multiplied by 5:', filteredNumbers);