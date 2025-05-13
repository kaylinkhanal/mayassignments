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
    if (item in newarray) return null
    else
        newarray.push(item)
}))