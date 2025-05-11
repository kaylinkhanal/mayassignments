//non primitive data types:
const peopleMap =  {
    'John':'Thapa',
    'Jane':'Doe',
    'Bob':'Smith'
}

//Q1. convert to array
//expected output : [['John ','Thapa'],['Jane','Doe'],['Bob','Smith']]
<<<<<<< HEAD
const peopleArray = Object.entries(peopleMap);
console.log(peopleArray);

// calculate the number of items in an object
//expected output is 3
const numberOfPeople = Object.keys(peopleMap).length;
console.log(numberOfPeople); 


// Q3. Print all fullname in this format 'John,Jane,Bob'
const fullNames = Object.keys(peopleMap).join(',');
console.log(fullNames);
=======
console.log(Object.entries(peopleMap))

// calculate the number of items in an object
//expected output is 3
console.log(Object.keys(peopleMap).length)

// Q3. Print all fullname in this format 'John,Jane,Bob'
console.log(Object.keys(peopleMap).join())

// HW: optional chaining in javascript
>>>>>>> 64d98e88b111d76412f6fd7b85b9958293c1fd4c
