//non primitive data types:
const peopleMap =  {
    'John':'Thapa',
    'Jane':'Doe',
    'Bob':'Smith'
}

//Q1. convert to array
//expected output : [['John ','Thapa'],['Jane','Doe'],['Bob','Smith']]

const entries = Object.entries(peopleMap);
console.log(entries)


// calculate the number of items in an object
//expected output is 3

console.log(Object.keys(peopleMap).length)


// Q3. Print all fullname in this format 'John,Jane,Bob'

console.log((Object.keys(peopleMap).join()))


// HW ; optional chaining in js 