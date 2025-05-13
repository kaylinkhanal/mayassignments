const arr = ['ram', { math: 10, english: 20 }, ['bhaktapur', 'sanepa'], { gender: 'Male' }]

// // Q1. calcualte the total scores scored by ram
// //expected output 30
const sum = Object.values(arr[1]).reduce((initial, nextItem) => { return initial + nextItem }, 0)
console.log(sum)

const users = ['ram', 'shyam', null, undefined, false, 'gopal']
//Q2. output should be ['ram', 'shyam', 'gopal']
// return if last character of item have 'm'
const result2 = users.filter(item => {
    return item
}).filter(item => {
    if (typeof item === 'string')
        return item[item.length - 1] === 'm'
})
console.log(result2)

const touristSpots = [
    { name: 'Bhaktapur', location: 'Bhaktapur' },
    { name: 'Patan', location: 'Lalitpur' },
    { name: 'Kathmandu', location: 'Kathmandu' },
    { name: 'Pokhara', location: 'Kaski' },
];
//Q3. output should be ['Bhaktapur', 'Patan', 'Kathmandu', 'Pokhara']
const result3 = touristSpots.map(items => items.name)
console.log(result3)
const name1 = 'bishal'


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Q4. chaining of methods: find first 3 even numbers and multiply each by 5
//expected output [10, 20, 30]
const result4 = numbers.filter(number => number % 2 === 0).slice(0, 3).map(number => number * 10)
console.log(result4)