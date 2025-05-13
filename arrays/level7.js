//Q1 (Level 1):

const names = ['ram', '', 'shyam', null, 'gita', undefined, 'hari'];
// Output should be all non-empty valid string names.
console.log('1 ans')
const result1 = names.filter(item => item)
console.log(result1);

//Q2 (Level 1):

const nums = [5, 8, 13, 21, 34];
// Output only even numbers.
console.log('2 ans');
const result2 = nums.filter(num => num % 2 === 0)
console.log(result2);

//Q3 (Level 2):

const data = [1, '2', 3, 'four', 5];
// Output all numeric values only (exclude string numbers).
console.log('3 ans');
const result3 = data.filter(item => { if (typeof item === 'number') return item })
console.log(result3);

//Q4 (Level 2):

const scores = [
    { subject: 'Math', score: 90 },
    { subject: 'English', score: 80 },
    { subject: 'Science', score: 70 },
];
// Calculate total score.
console.log('4 ans');
const result4 = scores.map(item => item.score).reduce((acc, item) => acc + item)
console.log(result4);

//Q5 (Level 3):

const places = ['Kathmandu', 'Bhaktapur', 'Lalitpur', 'Pokhara'];
// Output names that start with 'K' or 'P'.
console.log('5 ans')
const result5 = places.filter(place => {
    if (typeof place === 'string' && (place[0] === 'K' || place[0] === 'P')) {
        return place
    }
})
console.log(result5)
//Q6 (Level 3):

const items = [1, 2, 3, 4, 5];
// Chain methods to square each number and return only those greater than 10.
console.log('6 ans');
const result6 = items.map(item => item * item).filter(item => item > 10)
console.log(result6);

//Q7 (Level 4):

const userInfo = [
    { name: 'Ram', age: 25 },
    { name: 'Sita', age: 30 },
    { name: 'Gita', age: 20 },
];
// Return names of users older than 21.
const result7 = userInfo.filter(item => item.age > 21).map(item => item.name)
console.log(result7);

//Q8 (Level 4):

const orders = [
    { id: 1, total: 150 },
    { id: 2, total: 200 },
    { id: 3, total: 100 },
];
// Return the order with the highest total.
console.log('8 ans');
for (let item of orders) {

}
const result8 = orders.sort((a, b) => {
    return a.total - b.total
})
console.log(result8[result8.length - 1]);


//Q9 (Level 5):
console.log('9 ans');

const people = [
    { name: 'Ram', hobbies: ['cricket', 'music'] },
    { name: 'Shyam', hobbies: ['reading', 'music'] },
    { name: 'Gita', hobbies: ['cooking'] },
];
// Get a list of unique hobbies.
debugger;
//const op = people.map(item => [...item.hobbies])
debugger;
//console.log(op)
const op1 = people.reduce((acc, item) => {
    return [...acc, ...item.hobbies]
}, [])
console.log(op1);

const newarray = []
console.log(op1.filter(item => {
    //if (item in newarray) return   // in operator not check for value, it check index in array in js (problem was here) 
    // and (array and string doesn't support negative index)
    // else
    //     newarray.push(item)
    if (!(newarray.includes(item)))
        newarray.push(item)
}))
console.log('newarray is', newarray)
//Q10 (Level 5):

const records = [
    { name: 'Ram', scores: { math: 10, english: 20 } },
    { name: 'Sita', scores: { math: 30, english: 25 } },
];
// Return the student with the highest total score.
console.log('10 ans');

const result10 = records.sort((a, b) => {
    return ((a.scores.math + a.scores.english) - (b.scores.math + b.scores.english))
})
console.log(result10[result10.length - 1])