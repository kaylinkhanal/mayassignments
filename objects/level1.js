//non primitive data types:
const peopleMap =  {
    'John':'Thapa',
    'Jane':'Doe',
    'Bob':'Smith'
}

//Q1. convert to array
//expected output : [['John ','Thapa'],['Jane','Doe'],['Bob','Smith']]
<<<<<<< HEAD

let result  = Object.entries(peopleMap);
console.log(result);


// calculate the number of items in an object
//expected output is 3
console.log(Object.keys(peopleMap).length);

// Q3. Print all fullname in this format 'John,Jane,Bob'

let keys =  Object.keys(peopleMap).join(',');
console.log(keys);
=======
console.log(Object.entries(peopleMap))

// calculate the number of items in an object
//expected output is 3
console.log(Object.keys(peopleMap).length)

// Q3. Print all fullname in this format 'John,Jane,Bob'
console.log(Object.keys(peopleMap).join())

// HW: optional chaining in javascript
>>>>>>> 1cc92d1f5a15162cf09591b461e5a417831d70f1
