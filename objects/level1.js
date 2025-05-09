//non primitive data types:
const peopleMap = {
    'John': 'Thapa',
    'Jane': 'Doe',
    'Bob': 'Smith'
}

//Q1. convert to array
//expected output : [['John ','Thapa'],['Jane','Doe'],['Bob','Smith']]
const newArray = Object.entries(peopleMap)
console.log(newArray);

// calculate the number of items in an object
console.log(Object.entries(peopleMap).length)

// Q3. Print all fullname in this format 'John,Jane,Bob'
const keys = Object.keys(peopleMap)
console.log(keys.join(','))