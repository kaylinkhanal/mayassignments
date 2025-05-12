const arr = ['ram', {math: 10, english: 20}, ['bhaktapur','sanepa'], {gender: 'Male'}]

// Q1. calcualte the total scores scored by ram
//expected output 30
const sum = Object.values(arr[1]).reduce((initial,nextItem)=>{
return initial + nextItem
},0)
console.log(sum)

const users =['ram' ,'shyam',null, undefined, false, 'gopal']

//Q2. output should be ['ram', 'shyam', 'gopal']
const output = users.filter((item)=>{
 return item
 
})
 console.log(output)
    



const touristSpots = [
    { name: 'Bhaktapur', location: 'Bhaktapur' },
    { name: 'Patan', location: 'Lalitpur' },
    { name: 'Kathmandu', location: 'Kathmandu' },
    { name: 'Pokhara', location: 'Kaski' },
  ];
//Q3. output should be ['Bhaktapur', 'Patan', 'Kathmandu', 'Pokhara']
const spotNames = touristSpots.map(spot => spot.name);

console.log(spotNames);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Q4. chaining of methods: find first 3 even numbers and multiply each by 5
//expected output [10, 20, 30]

const result = numbers
  .filter(num => num % 2 === 0)   
  .slice(0, 3)                    
  .map(num => num * 5);         

console.log(result); 
