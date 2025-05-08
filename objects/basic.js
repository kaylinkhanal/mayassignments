//object: primitive data types
// bracket: {}
// key: value pair,
// object is based on keys for retrieval (using dot operator)

let scores =  {
    math: 350,
    science: 503,
    computer: 701
}

// Calculate percentage scored and round off to 2 decimal places
let fullMarks = 1000;

for (let person in scores) {
    let percentage = (scores[person] / fullMarks) * 100;
    console.log(`${person}: ${percentage.toFixed(2)}%`);
}