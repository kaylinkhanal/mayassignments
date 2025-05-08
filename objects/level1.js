// non primitive data types:
const peopleMap={
    'john' : 'thapa',
    'jane' : 'doe',
    'saya' : 'sharma'
}

//qn.1 => convert to array 

const peopleArray = Object.keys(peopleMap).map(key => [key, peopleMap[key]]);
console.log(peopleArray); // Output: [['john', 'thapa'], ['jane', 'doe'], ['saya', 'sharma']]