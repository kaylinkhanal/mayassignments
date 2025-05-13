const arr = ['ram', {math: 10, english: 20}, ['bhaktapur','sanepa'], {gender: 'Male'}]

// Q1. calcualte the total scores scored by ram
//expected output 30
const arrEl=arr[1];
const array=Object.values(arrEl);
let total=0;
const sum=array.forEach(element => {
  total=total+element;
});
 console.log(total);

  // console.log(array);
  // let sum=array[0]+array[1];
  // console.log(sum);


  //Q2. output should be ['ram', 'shyam', 'gopal']

  const users =['ram' ,'shyam',null, undefined, false, 'gopal']

   const filteredUsers = users.filter(element=>element !=null && element !=undefined && element !=false)
  console.log("Users",  filteredUsers);




 //Q3. output should be ['Bhaktapur', 'Patan', 'Kathmandu', 'Pokhara']
const touristSpots = [
    { name: 'Bhaktapur', location: 'Bhaktapur' },
    { name: 'Patan', location: 'Lalitpur' },
    { name: 'Kathmandu', location: 'Kathmandu' },
    { name: 'Pokhara', location: 'Kaski' },
  ];

const place=touristSpots.map(element=> element.name);
console.log(place);


// Q4. chaining of methods: find first 3 even numbers and multiply each by 5
//expected output [10, 20, 30]
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNo=numbers.filter((items)=>{
  if(items%2 ==0){
    return items;
  }
})
// console.log(evenNo);
const evenarr=evenNo.slice(0,3)
// console.log(evenarr);
const output=evenarr.map(element=>element*5);
console.log(output);

