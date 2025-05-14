const arr = ['ram', {math: 10, english: 20}, ['bhaktapur','sanepa'], {gender: 'Male'}]
// Q1. calcualte the total scores scored by ram
//expected output 30




const users =['ram' ,'shyam',null, undefined, false, 'gopal']
const output = users.filter((item) => {
    return item;

});
console.log(output);

//Q2. output should be ['ram', 'shyam', 'gopal']


const touristSpots = [
    { name: 'Bhaktapur', location: 'Bhaktapur' },
    { name: 'Patan', location: 'Lalitpur' },
    { name: 'Kathmandu', location: 'Kathmandu' },
    { name: 'Pokhara', location: 'Kaski' },
  ];

  ans =touristSpots.map((el)=>{
    return el.name
  });
  console.log(ans);
  
//Q3. output should be ['Bhaktapur', 'Patan', 'Kathmandu', 'Pokhara']

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Q4. chaining of methods: find first 3 even numbers and multiply each by 5
//expected output [10, 20, 30]

const firstThreeEven = numbers.filter((item)=>{
    if(item%2==0)
    {
        return item;
    }
    
}).slice(0,3).map((item)=>{
    return item *5;

})

console.log(firstThreeEven);
   