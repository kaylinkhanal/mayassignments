//non primitive data types:
const peopleMap =  {
    'John':'Thapa',
    'Jane':'Doe',
    'Bob':'Smith'
}

//Q1. convert to array
//expected output : [['John ','Thapa'],['Jane','Doe'],['Bob','Smith']]
const peopleArray = Object.entries(peopleMap);
console.log(peopleArray);

// calculate the number of items in an object
//expected output is 3
const numberOfPeople = Object.keys(peopleMap).length;
console.log(numberOfPeople); 


// Q3. Print all fullname in this format 'John,Jane,Bob'
const fullNames = Object.keys(peopleMap).join(',');
console.log(fullNames);