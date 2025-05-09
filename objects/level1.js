//non primitive data types:
const peopleMap =  {
    'John':'Thapa',
    'Jane':'Doe',
    'Bob':'Smith'
}

//Q1. convert to array
//expected output : [['John ','Thapa'],['Jane','Doe'],['Bob','Smith']]
let sami=(Object.entries(peopleMap));
console.log(sami);

// calculate the number of items in an object
//expected output is 3
console.log(Object.keys(peopleMap).length);

// Q3. Print all fullname in this format 'John,Jane,Bob'
console.log(Object.keys(peopleMap).join());